import React, { useState, useEffect } from "react";
import LoadingScreen from "./assets/components/LoadingScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import Demande from "./assets/pages/Demande";
import Connexion from './assets/components/Connexion';
import Inscription from './assets/components/Inscription';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demande" element={<Demande />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
      </Routes>
    </Router>
  );
}
