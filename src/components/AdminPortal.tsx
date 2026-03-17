import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Search,
  Filter,
  Download,
  MoreVertical,
  GraduationCap,
  CheckCircle2,
  Clock,
  TrendingUp,
  ChevronRight,
  FileText,
  Settings as SettingsIcon,
  Bell,
  Shield,
  Globe,
  Database,
  Mail
} from 'lucide-react';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

type AdminTab = 'students' | 'progress' | 'settings';

interface AdminPortalProps {
  activeTab?: AdminTab;
}

interface Student {
  uid: string;
  name: string;
  email: string;
  joinedAt: any;
  status: 'Active' | 'Inactive';
  tests?: number;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ activeTab: propActiveTab }) => {
  const [internalTab, setInternalTab] = useState<AdminTab>('students');
  const activeTab = propActiveTab || internalTab;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'users'), orderBy('joinedAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (snapshot.empty) {
        // Fallback to mock data if collection is empty (e.g. new project)
        const mockStudents: Student[] = [
          { uid: '1', name: 'John Doe', email: 'john@example.com', joinedAt: new Date('2024-01-15'), status: 'Active', tests: 12 },
          { uid: '2', name: 'Jane Smith', email: 'jane@example.com', joinedAt: new Date('2024-02-01'), status: 'Active', tests: 8 },
          { uid: '3', name: 'Mike Ross', email: 'mike@example.com', joinedAt: new Date('2024-02-10'), status: 'Inactive', tests: 5 },
          { uid: '4', name: 'Sarah Wilson', email: 'sarah@example.com', joinedAt: new Date('2024-02-20'), status: 'Active', tests: 15 },
        ];
        setStudents(mockStudents);
      } else {
        const studentData = snapshot.docs.map(doc => ({
          uid: doc.id,
          ...doc.data()
        })) as Student[];
        setStudents(studentData);
      }
      setLoading(false);
    }, (error) => {
      console.error("Error fetching students, using mock data:", error);
      // Fallback to mock data on error (e.g. permission denied or not configured)
      const mockStudents: Student[] = [
        { uid: '1', name: 'John Doe (Demo)', email: 'john@example.com', joinedAt: new Date('2024-01-15'), status: 'Active', tests: 12 },
        { uid: '2', name: 'Jane Smith (Demo)', email: 'jane@example.com', joinedAt: new Date('2024-02-01'), status: 'Active', tests: 8 },
        { uid: '3', name: 'Mike Ross (Demo)', email: 'mike@example.com', joinedAt: new Date('2024-02-10'), status: 'Inactive', tests: 5 },
      ];
      setStudents(mockStudents);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleStatusToggle = async (uid: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'Active' ? 'Inactive' : 'Active';
      if (uid.startsWith('mock-') || uid.length < 5) {
        // Handle mock data update locally
        setStudents(prev => prev.map(s => s.uid === uid ? { ...s, status: newStatus as 'Active' | 'Inactive' } : s));
      } else {
        await updateDoc(doc(db, 'users', uid), { status: newStatus });
      }
      setActiveMenuId(null);
    } catch (error) {
      console.error("Error updating status:", error);
      // Fallback update
      setStudents(prev => prev.map(s => s.uid === uid ? { ...s, status: (currentStatus === 'Active' ? 'Inactive' : 'Active') as 'Active' | 'Inactive' } : s));
      setActiveMenuId(null);
    }
  };

  const handleDelete = async (uid: string) => {
    if (confirm('Are you sure you want to delete this student?')) {
      try {
        if (uid.startsWith('mock-') || uid.length < 5) {
          setStudents(prev => prev.filter(s => s.uid !== uid));
        } else {
          await deleteDoc(doc(db, 'users', uid));
        }
        setActiveMenuId(null);
      } catch (error) {
        console.error("Error deleting student:", error);
        setStudents(prev => prev.filter(s => s.uid !== uid));
        setActiveMenuId(null);
      }
    }
  };

  const results = [
    { id: 1, student: 'John Doe', test: 'HOS Basics', score: 95, date: '2024-03-10', status: 'Passed' },
    { id: 2, student: 'Jane Smith', test: 'ELD Compliance', score: 72, date: '2024-03-09', status: 'Passed' },
    { id: 3, student: 'Mike Ross', test: 'Safety Protocol', score: 100, date: '2024-03-08', status: 'Passed' },
    { id: 4, student: 'Sarah Wilson', test: 'HOS Basics', score: 88, date: '2024-03-08', status: 'Passed' },
    { id: 5, student: 'David Chen', test: 'Dispatch Basics', score: 92, date: '2024-03-07', status: 'Passed' },
  ];

  const stats = [
    { label: 'Total Results', value: '4,512', icon: FileText, color: 'blue' },
    { label: 'Avg. Score', value: '86%', icon: TrendingUp, color: 'emerald' },
    { label: 'Passed Today', value: '124', icon: CheckCircle2, color: 'amber' },
  ];

  const filteredStudents = students.filter(student => {
    const searchLower = searchTerm.toLowerCase();
    return (
      student.name?.toLowerCase().includes(searchLower) ||
      student.email?.toLowerCase().includes(searchLower) ||
      student.status?.toLowerCase().includes(searchLower)
    );
  });

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black text-[#000033]">
              {activeTab === 'students' ? 'Student Management' : 
               activeTab === 'progress' ? 'Test Progress' : 'System Settings'}
            </h1>
            <p className="text-zinc-500">
              {activeTab === 'students' ? 'Manage and track your students' : 
               activeTab === 'progress' ? 'Monitor test results and performance' : 'Configure platform preferences'}
            </p>
          </div>
          <div className="flex gap-3">
            {activeTab === 'students' && (
              <button className="px-6 py-3 bg-[#000080] text-white rounded-2xl font-bold hover:bg-[#000066] transition-all flex items-center gap-2">
                <Users size={18} />
                Add Student
              </button>
            )}
            <button className="px-6 py-3 bg-white border border-zinc-200 rounded-2xl font-bold text-zinc-600 hover:bg-zinc-50 transition-all flex items-center gap-2">
              <Download size={18} />
              Export Data
            </button>
          </div>
        </div>

        {/* Internal Tab Navigation (only if no prop provided) */}
        {!propActiveTab && (
          <div className="flex gap-2 p-1 bg-zinc-100 rounded-2xl w-fit">
            {[
              { id: 'students', label: 'Students', icon: Users },
              { id: 'progress', label: 'Progress', icon: TrendingUp },
              { id: 'settings', label: 'Settings', icon: SettingsIcon },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setInternalTab(tab.id as AdminTab)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-white text-[#000080] shadow-sm' 
                    : 'text-zinc-500 hover:text-zinc-700 hover:bg-white/50'
                }`}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <AnimatePresence mode="wait">
          {activeTab === 'students' && (
            <motion.div
              key="students"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white rounded-[40px] border border-zinc-100 shadow-sm overflow-hidden"
            >
              <div className="p-8 border-b border-zinc-50 flex items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input 
                    type="text"
                    placeholder="Search students..."
                    className="w-full pl-12 pr-4 py-3 bg-zinc-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <button className="p-3 bg-zinc-50 text-zinc-600 rounded-xl hover:bg-zinc-100 transition-all">
                  <Filter size={20} />
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-zinc-50 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                      <th className="px-8 py-4">Student</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Joined</th>
                      <th className="px-8 py-4">Tests</th>
                      <th className="px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    <AnimatePresence mode="popLayout">
                      {filteredStudents.length > 0 ? (
                        filteredStudents.map((student, index) => (
                          <motion.tr 
                            key={student.uid}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ delay: index * 0.05 }}
                            className="hover:bg-zinc-50/50 transition-colors group"
                          >
                          <td className="px-8 py-6">
                            <div>
                              <p className="font-bold text-zinc-900">{student.name}</p>
                              <p className="text-xs text-zinc-500">{student.email}</p>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                              student.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-zinc-100 text-zinc-400'
                            }`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-zinc-500">{formatDate(student.joinedAt)}</td>
                          <td className="px-8 py-6 font-bold text-zinc-900">{student.tests || 0}</td>
                          <td className="px-8 py-6 text-right relative">
                            <button 
                              onClick={() => setActiveMenuId(activeMenuId === student.uid ? null : student.uid)}
                              className={`p-2 rounded-xl transition-all ${
                                activeMenuId === student.uid ? 'bg-zinc-100 text-[#000080]' : 'text-zinc-400 hover:text-zinc-600 hover:bg-zinc-50'
                              }`}
                            >
                              <MoreVertical size={20} />
                            </button>

                            <AnimatePresence>
                              {activeMenuId === student.uid && (
                                <>
                                  <div 
                                    className="fixed inset-0 z-10" 
                                    onClick={() => setActiveMenuId(null)} 
                                  />
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                    className="absolute right-8 top-16 w-48 bg-white rounded-2xl shadow-xl border border-zinc-100 z-20 py-2 overflow-hidden"
                                  >
                                    <button 
                                      onClick={() => setActiveMenuId(null)}
                                      className="w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50 flex items-center gap-2 font-medium"
                                    >
                                      <FileText size={16} className="text-zinc-400" />
                                      View Profile
                                    </button>
                                    <button 
                                      onClick={() => handleStatusToggle(student.uid, student.status)}
                                      className="w-full px-4 py-2 text-left text-sm text-zinc-700 hover:bg-zinc-50 flex items-center gap-2 font-medium"
                                    >
                                      {student.status === 'Active' ? (
                                        <>
                                          <Clock size={16} className="text-amber-500" />
                                          Deactivate
                                        </>
                                      ) : (
                                        <>
                                          <CheckCircle2 size={16} className="text-emerald-500" />
                                          Activate
                                        </>
                                      )}
                                    </button>
                                    <div className="h-px bg-zinc-100 my-1" />
                                    <button 
                                      onClick={() => handleDelete(student.uid)}
                                      className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 font-medium"
                                    >
                                      <Users size={16} className="text-red-400" />
                                      Delete Student
                                    </button>
                                  </motion.div>
                                </>
                              )}
                            </AnimatePresence>
                            </td>
                          </motion.tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={5} className="px-8 py-12 text-center text-zinc-500">
                              No students found matching "{searchTerm}"
                            </td>
                          </tr>
                        )}
                      </AnimatePresence>
                    </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'progress' && (
            <motion.div
              key="progress"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-6 rounded-[32px] border border-zinc-100 shadow-sm space-y-4"
                  >
                    <div className={`w-12 h-12 rounded-2xl bg-${stat.color}-50 flex items-center justify-center text-${stat.color}-600`}>
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                      <h3 className="text-3xl font-black text-[#000033]">{stat.value}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-[40px] border border-zinc-100 shadow-sm overflow-hidden">
                <div className="p-8 border-b border-zinc-50 flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#000033]">Recent Test Results</h3>
                <div className="flex gap-3">
                  <button className="p-3 bg-zinc-50 text-zinc-600 rounded-xl hover:bg-zinc-100 transition-all">
                    <Filter size={20} />
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-zinc-50 text-zinc-400 text-xs font-bold uppercase tracking-widest">
                      <th className="px-8 py-4">Student</th>
                      <th className="px-8 py-4">Test Name</th>
                      <th className="px-8 py-4">Score</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-50">
                    {results.map((result) => (
                      <tr key={result.id} className="hover:bg-zinc-50/50 transition-colors">
                        <td className="px-8 py-6 font-bold text-zinc-900">{result.student}</td>
                        <td className="px-8 py-6 text-zinc-600">{result.test}</td>
                        <td className="px-8 py-6">
                          <span className={`font-black ${result.score >= 80 ? 'text-emerald-600' : 'text-amber-600'}`}>
                            {result.score}%
                          </span>
                        </td>
                        <td className="px-8 py-6 text-zinc-500">{result.date}</td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-widest">
                            {result.status}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <button className="text-[#000080] font-bold text-sm hover:underline">View Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              key="settings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-[40px] border border-zinc-100 shadow-sm p-8 space-y-8">
                <h3 className="text-xl font-bold text-[#000033] flex items-center gap-2">
                  <Globe size={20} className="text-blue-600" />
                  General Settings
                </h3>
                <div className="space-y-6">
                  {[
                    { label: 'Allow Registration', desc: 'Enable new student signups', icon: Users },
                    { label: 'Email Notifications', desc: 'Send automated test results', icon: Mail },
                    { label: 'Public Leaderboard', desc: 'Show top scoring students', icon: TrendingUp },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-400">
                          <item.icon size={20} />
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900">{item.label}</p>
                          <p className="text-xs text-zinc-500">{item.desc}</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[40px] border border-zinc-100 shadow-sm p-8 space-y-8">
                <h3 className="text-xl font-bold text-[#000033] flex items-center gap-2">
                  <Shield size={20} className="text-indigo-600" />
                  Security & System
                </h3>
                <div className="space-y-6">
                  <div className="p-6 bg-zinc-50 rounded-3xl space-y-4">
                    <div className="flex items-center gap-3">
                      <Database className="text-zinc-400" size={20} />
                      <p className="font-bold text-zinc-900">Database Backup</p>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Last backup was completed 4 hours ago. Automatic backups are scheduled daily.
                    </p>
                    <button className="w-full py-3 bg-white border border-zinc-200 rounded-2xl font-bold text-zinc-600 hover:bg-zinc-100 transition-all text-sm">
                      Run Manual Backup
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-zinc-100 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Bell className="text-zinc-400" size={20} />
                      <span className="font-bold text-zinc-900">System Alerts</span>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold">STABLE</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
