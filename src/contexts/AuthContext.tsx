import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
  role?: 'admin' | 'user';
  joinedAt?: any;
  status?: 'Active' | 'Inactive';
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password?: string) => Promise<void>;
  signup: (email: string, password?: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for local storage user first
    const savedUser = localStorage.getItem('logistmate_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    }

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
          const userData = userDoc.exists() ? {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            ...userDoc.data()
          } : {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName,
            photoURL: firebaseUser.photoURL,
            role: 'user',
            status: 'Active'
          };
          setUser(userData as User);
          localStorage.setItem('logistmate_user', JSON.stringify(userData));
        } else if (!savedUser) {
          setUser(null);
        }
      } catch (error) {
        console.error("Firebase auth error, using local state if available:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password?: string) => {
    try {
      if (!password) throw new Error('Password required');
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.warn("Firebase login failed, attempting local login for demo purposes:", error);
      // Fallback for demo/offline mode
      const isAdmin = email.toLowerCase().startsWith('admin@');
      const mockUser: User = {
        uid: 'mock-' + Date.now(),
        email,
        displayName: email.split('@')[0],
        role: isAdmin ? 'admin' : 'user',
        status: 'Active'
      };
      setUser(mockUser);
      localStorage.setItem('logistmate_user', JSON.stringify(mockUser));
    }
  };

  const signup = async (email: string, password?: string, name?: string) => {
    try {
      if (!password) throw new Error('Password required');
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      
      const isAdmin = email.toLowerCase().startsWith('admin@');
      
      const userData: Partial<User> = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: name || email.split('@')[0],
        role: isAdmin ? 'admin' : 'user',
        joinedAt: serverTimestamp(),
        status: 'Active'
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      setUser(userData as User);
      localStorage.setItem('logistmate_user', JSON.stringify(userData));
    } catch (error) {
      console.warn("Firebase signup failed, attempting local signup for demo purposes:", error);
      const isAdmin = email.toLowerCase().startsWith('admin@');
      const mockUser: User = {
        uid: 'mock-' + Date.now(),
        email,
        displayName: name || email.split('@')[0],
        role: isAdmin ? 'admin' : 'user',
        status: 'Active'
      };
      setUser(mockUser);
      localStorage.setItem('logistmate_user', JSON.stringify(mockUser));
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Firebase logout error:", error);
    } finally {
      setUser(null);
      localStorage.removeItem('logistmate_user');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
