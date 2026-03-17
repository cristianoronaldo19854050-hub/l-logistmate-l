import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

const US_ATLAS_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

const TIME_ZONE_COLORS: Record<string, string> = {
  'Eastern': '#2563eb', // blue-600
  'Central': '#4f46e5', // indigo-600
  'Mountain': '#10b981', // emerald-600
  'Pacific': '#d97706', // amber-600
  'Alaska': '#e11d48', // rose-600
  'Hawaii': '#0ea5e9', // sky-600
};

const STATE_TO_TZ: Record<string, string> = {
  'Alabama': 'Central', 'Alaska': 'Alaska', 'Arizona': 'Mountain', 'Arkansas': 'Central',
  'California': 'Pacific', 'Colorado': 'Mountain', 'Connecticut': 'Eastern', 'Delaware': 'Eastern',
  'Florida': 'Eastern', 'Georgia': 'Eastern', 'Hawaii': 'Hawaii', 'Idaho': 'Mountain',
  'Illinois': 'Central', 'Indiana': 'Eastern', 'Iowa': 'Central', 'Kansas': 'Central',
  'Kentucky': 'Eastern', 'Louisiana': 'Central', 'Maine': 'Eastern', 'Maryland': 'Eastern',
  'Massachusetts': 'Eastern', 'Michigan': 'Eastern', 'Minnesota': 'Central', 'Mississippi': 'Central',
  'Missouri': 'Central', 'Montana': 'Mountain', 'Nebraska': 'Central', 'Nevada': 'Pacific',
  'New Hampshire': 'Eastern', 'New Jersey': 'Eastern', 'New Mexico': 'Mountain', 'New York': 'Eastern',
  'North Carolina': 'Eastern', 'North Dakota': 'Central', 'Ohio': 'Eastern', 'Oklahoma': 'Central',
  'Oregon': 'Pacific', 'Pennsylvania': 'Eastern', 'Rhode Island': 'Eastern', 'South Carolina': 'Eastern',
  'South Dakota': 'Central', 'Tennessee': 'Eastern', 'Texas': 'Central', 'Utah': 'Mountain',
  'Vermont': 'Eastern', 'Virginia': 'Eastern', 'Washington': 'Pacific', 'West Virginia': 'Eastern',
  'Wisconsin': 'Central', 'Wyoming': 'Mountain'
};

const USTimeZoneMap: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [loading, setLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  const TZ_TO_IANA: Record<string, string> = {
    'Eastern': 'America/New_York',
    'Central': 'America/Chicago',
    'Mountain': 'America/Denver',
    'Pacific': 'America/Los_Angeles',
    'Alaska': 'America/Anchorage',
    'Hawaii': 'Pacific/Honolulu',
  };

  const getTimeInTZ = (tz: string) => {
    const iana = TZ_TO_IANA[tz];
    if (!iana) return '';
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: iana
    }).format(currentTime);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetch(US_ATLAS_URL)
      .then(res => res.json())
      .then(us => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);
        svg.selectAll('*').remove();

        const width = 960;
        const height = 600;

        const projection = d3.geoAlbersUsa()
          .scale(1200)
          .translate([width / 2, height / 2]);

        const path = d3.geoPath().projection(projection);

        const states = (topojson.feature(us, us.objects.states) as any).features;

        const g = svg.append('g');

        // Draw states
        g.selectAll('path')
          .data(states)
          .enter()
          .append('path')
          .attr('d', path as any)
          .attr('fill', (d: any) => {
            const tz = STATE_TO_TZ[d.properties.name];
            return tz ? TIME_ZONE_COLORS[tz] : '#e5e7eb';
          })
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 1)
          .attr('class', 'state-path')
          .append('title')
          .attr('class', 'state-title')
          .text((d: any) => {
            const tz = STATE_TO_TZ[d.properties.name];
            return `${d.properties.name} (${tz || 'N/A'})\nCurrent Time: ${tz ? getTimeInTZ(tz) : 'N/A'}`;
          });

        // Simplified label placement
        const labels = [
          { id: 'Pacific', name: 'PACIFIC', x: 120, y: 250 },
          { id: 'Mountain', name: 'MOUNTAIN', x: 300, y: 280 },
          { id: 'Central', name: 'CENTRAL', x: 500, y: 320 },
          { id: 'Eastern', name: 'EASTERN', x: 750, y: 280 },
          { id: 'Alaska', name: 'ALASKA', x: 200, y: 500 },
          { id: 'Hawaii', name: 'HAWAII', x: 350, y: 550 },
        ];

        const labelGroups = g.selectAll('.tz-label-group')
          .data(labels)
          .enter()
          .append('g')
          .attr('class', 'tz-label-group')
          .attr('transform', d => `translate(${d.x}, ${d.y})`)
          .style('pointer-events', 'none');

        labelGroups.append('text')
          .attr('class', 'tz-name')
          .attr('text-anchor', 'middle')
          .attr('fill', 'white')
          .attr('font-weight', 'bold')
          .attr('font-size', '14px')
          .attr('style', 'text-shadow: 0 1px 4px rgba(0,0,0,0.5);')
          .text(d => d.name);

        labelGroups.append('text')
          .attr('class', 'tz-time')
          .attr('y', 20)
          .attr('text-anchor', 'middle')
          .attr('fill', 'white')
          .attr('font-weight', 'medium')
          .attr('font-size', '12px')
          .attr('style', 'text-shadow: 0 1px 4px rgba(0,0,0,0.5);')
          .text(d => getTimeInTZ(d.id));

        setLoading(false);
      })
      .catch(err => {
        console.error('Error loading map data:', err);
        setLoading(false);
      });
  }, []);

  // Update times in existing SVG elements
  useEffect(() => {
    if (!svgRef.current || loading) return;
    const svg = d3.select(svgRef.current);

    // Update time zone labels
    svg.selectAll('.tz-time')
      .text((d: any) => getTimeInTZ(d.id));

    // Update state tooltips
    svg.selectAll('.state-path')
      .select('title')
      .text((d: any) => {
        const tz = STATE_TO_TZ[d.properties.name];
        return `${d.properties.name} (${tz || 'N/A'})\nCurrent Time: ${tz ? getTimeInTZ(tz) : 'N/A'}`;
      });
  }, [currentTime, loading]);

  return (
    <div className="relative w-full aspect-[16/10] bg-zinc-50 rounded-3xl overflow-hidden border border-zinc-200 shadow-inner">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 960 600"
        className="w-full h-full"
      />
    </div>
  );
};

export default USTimeZoneMap;
