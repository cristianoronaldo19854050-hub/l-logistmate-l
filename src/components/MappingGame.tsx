import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, RotateCcw, MapPin, Globe, Volume2, VolumeX } from 'lucide-react';

const US_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

interface StateData {
  id: string;
  name: string;
}

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const MappingGame: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [states, setStates] = useState<any[]>([]);
  const [targetState, setTargetState] = useState<any | null>(null);
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'finished'>('idle');
  const [completedStates, setCompletedStates] = useState<Set<string>>(new Set());
  const [stateColors, setStateColors] = useState<Record<string, string>>({});
  const [time, setTime] = useState(0);
  const [loading, setLoading] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  const speak = (text: string) => {
    if (!voiceEnabled) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    let interval: any;
    if (gameState === 'playing') {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameState]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    fetch(US_ATLAS_URL)
      .then(res => res.json())
      .then(us => {
        const statesData = (topojson.feature(us, us.objects.states) as any).features;
        // Filter to only include the 50 states
        const filteredStates = statesData.filter((s: any) => US_STATES.includes(s.properties.name));
        setStates(filteredStates);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading map data:', err);
        setLoading(false);
      });
  }, []);

  const startGame = () => {
    setScore(0);
    setTotalAttempts(0);
    setTime(0);
    setCompletedStates(new Set());
    setStateColors({});
    setGameState('playing');
    pickNewTarget([]);
  };

  const pickNewTarget = (completed: string[]) => {
    const availableStates = states.filter(s => !completed.includes(s.properties.name));
    if (availableStates.length === 0) {
      setGameState('finished');
      // Save high score
      const savedStats = localStorage.getItem('logistmate_stats');
      const stats = savedStats ? JSON.parse(savedStats) : { mappingHighScore: 0, mappingBestTime: Infinity };
      
      const newStats = {
        ...stats,
        mappingHighScore: Math.max(stats.mappingHighScore || 0, score),
        mappingBestTime: Math.min(stats.mappingBestTime || Infinity, time),
        lastActivity: {
          type: 'mapping_game',
          score: `${score}/${totalAttempts}`,
          time: new Date().toISOString()
        }
      };
      
      localStorage.setItem('logistmate_stats', JSON.stringify(newStats));
      return;
    }
    const random = availableStates[Math.floor(Math.random() * availableStates.length)];
    setTargetState(random);
    speak(random.properties.name);
  };

  const handleStateClick = (event: any, d: any) => {
    if (gameState !== 'playing' || !targetState) return;

    const clickedName = d.properties.name;
    const targetName = targetState.properties.name;

    // Don't allow clicking states that are already completed (either correctly or missed)
    if (completedStates.has(clickedName)) return;

    setTotalAttempts(prev => prev + 1);

    if (clickedName === targetName) {
      // Correct guess
      setStateColors(prev => ({ ...prev, [clickedName]: '#10b981' }));
      const nextCompleted = [...Array.from(completedStates), clickedName];
      setCompletedStates(new Set(nextCompleted));
      setScore(prev => prev + 1);
      pickNewTarget(nextCompleted);
    } else {
      // Wrong guess - only one try allowed
      setStateColors(prev => ({ ...prev, [clickedName]: '#ef4444' }));
      speak(`No, that is ${clickedName}. Moving to next state.`);
      
      // Mark the target state as completed (missed) so it's not asked again
      const nextCompleted = [...Array.from(completedStates), targetName];
      setCompletedStates(new Set(nextCompleted));
      pickNewTarget(nextCompleted);
    }
  };

  useEffect(() => {
    if (!svgRef.current || states.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 500;
    
    const projection = d3.geoAlbersUsa()
      .scale(1000)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    const g = svg.append('g');

    g.selectAll('path')
      .data(states)
      .enter()
      .append('path')
      .attr('d', path as any)
      .attr('class', 'state')
      .attr('fill', (d: any) => stateColors[d.properties.name] || '#ffffff')
      .attr('stroke', '#000033')
      .attr('stroke-width', 0.5)
      .style('cursor', (d: any) => completedStates.has(d.properties.name) ? 'default' : 'pointer')
      .on('mouseover', function(event, d: any) {
        if (gameState === 'playing' && !completedStates.has(d.properties.name)) {
          d3.select(this).attr('fill', stateColors[d.properties.name] ? d3.color(stateColors[d.properties.name])?.darker(0.2)?.toString() || stateColors[d.properties.name] : '#f3f4f6');
        }
      })
      .on('mouseout', function(event, d: any) {
        d3.select(this).attr('fill', stateColors[d.properties.name] || '#ffffff');
      })
      .on('click', handleStateClick);

  }, [states, gameState, stateColors, completedStates, targetState]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 space-y-4">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-zinc-500 font-medium">Loading US Map...</p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-semibold">
          <MapPin size={16} />
          US Geography Challenge
        </div>
        <h2 className="text-4xl font-bold text-zinc-900 tracking-tight">Mapping Game</h2>
        <p className="text-zinc-600 max-w-2xl mx-auto">
          Test your knowledge of US states. A critical skill for logistics professionals navigating North American supply chains.
        </p>
      </div>

      <div className="bg-white border border-zinc-100 rounded-[2rem] shadow-xl overflow-hidden relative">
        {/* Game Header */}
        <div className="bg-zinc-50 border-b border-zinc-100 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <div className="text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Score</p>
              <p className="text-2xl font-bold text-zinc-900">{score} / {totalAttempts}</p>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Progress</p>
              <p className="text-2xl font-bold text-zinc-900">{completedStates.size} / {states.length}</p>
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Time</p>
              <p className="text-2xl font-bold text-zinc-900 font-mono">{formatTime(time)}</p>
            </div>
          </div>

          {gameState === 'playing' && targetState && (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="px-8 py-4 bg-[#000080] text-white rounded-2xl shadow-lg text-center"
            >
              <p className="text-xs font-medium opacity-70 uppercase tracking-widest mb-1">Find State</p>
              <p className="text-2xl font-bold tracking-tight">{targetState.properties.name}</p>
            </motion.div>
          )}

          <div className="flex gap-3">
            <button 
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`p-3 rounded-xl border transition-all ${
                voiceEnabled 
                  ? 'bg-emerald-50 border-emerald-100 text-emerald-600' 
                  : 'bg-zinc-50 border-zinc-200 text-zinc-400'
              }`}
              title={voiceEnabled ? "Mute Voice" : "Unmute Voice"}
            >
              {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
            {gameState === 'idle' ? (
              <button 
                onClick={startGame}
                className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Start Game
              </button>
            ) : (
              <button 
                onClick={startGame}
                className="px-6 py-3 bg-white border border-zinc-200 text-zinc-600 rounded-xl font-bold hover:bg-zinc-50 transition-all flex items-center gap-2"
              >
                <RotateCcw size={18} />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Map Area */}
        <div className="p-8 flex justify-center bg-zinc-50/50 min-h-[500px] relative">
          <svg 
            ref={svgRef} 
            viewBox="0 0 800 500" 
            className="w-full max-w-4xl h-auto drop-shadow-2xl"
          />

          {gameState === 'idle' && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center z-20">
              <div className="text-center space-y-6 p-8 bg-white rounded-[2.5rem] shadow-2xl border border-zinc-100 max-w-md">
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto">
                  <Globe size={40} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-zinc-900">Ready to start?</h3>
                  <p className="text-zinc-500">Identify all 50 US states on the map. Accuracy and speed are key!</p>
                </div>
                <button 
                  onClick={startGame}
                  className="w-full py-4 bg-[#000080] text-white rounded-2xl font-bold text-lg hover:bg-[#000066] transition-all shadow-xl"
                >
                  Start Challenge
                </button>
              </div>
            </div>
          )}

          {gameState === 'finished' && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-md flex items-center justify-center z-20">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center space-y-8 p-12 bg-white rounded-[3rem] shadow-2xl border border-zinc-100 max-w-lg"
              >
                <div className="w-24 h-24 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mx-auto">
                  <Trophy size={56} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-bold text-zinc-900">Game Complete!</h3>
                  <p className="text-zinc-500 text-lg">You've identified all states.</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-6 bg-zinc-50 rounded-3xl">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Final Score</p>
                    <p className="text-2xl font-bold text-zinc-900">{score} / {totalAttempts}</p>
                  </div>
                  <div className="p-6 bg-zinc-50 rounded-3xl">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Accuracy</p>
                    <p className="text-2xl font-bold text-zinc-900">{totalAttempts > 0 ? Math.round((score / totalAttempts) * 100) : 0}%</p>
                  </div>
                  <div className="p-6 bg-zinc-50 rounded-3xl">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Time</p>
                    <p className="text-2xl font-bold text-zinc-900 font-mono">{formatTime(time)}</p>
                  </div>
                </div>

                <button 
                  onClick={startGame}
                  className="w-full py-5 bg-emerald-600 text-white rounded-2xl font-bold text-xl hover:bg-emerald-700 transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  <RotateCcw size={24} />
                  Play Again
                </button>
              </motion.div>
            </div>
          )}
        </div>

        {/* Legend/Footer */}
        <div className="p-6 bg-white border-t border-zinc-100 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white border border-zinc-300 rounded-sm"></div>
            <span>Unexplored</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-sm"></div>
            <span>Correct</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
            <span>Wrong Guess</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MappingGame;
