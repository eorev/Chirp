import './App.css';
import Landing from './pages/Landing';
import Learn from './pages/Learn';
import NavBar from './components/NavBar';
import { Link, Route, Routes } from 'react-router-dom';
import Level1 from './pages/Level1';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getFirestore } from './firebase';
import { useState, useEffect } from 'react';
import Level3 from './pages/Level3';

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const userDocRef = doc(getFirestore(), 'users', currentUser.uid);
        const userDocSnap = await getDoc(userDocRef);
        setUsername(userDocSnap.data()?.username || '');
      } else {
        setUsername('');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <NavBar user={user} username={username} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/Lesson1" element={<Level1 />} />
        <Route path="/Lesson3" element={<Level3 />} />
        <Route path="/SignIn" element={<SignIn user={user} />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;