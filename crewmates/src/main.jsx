import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCrew from './components/CreateCrew.jsx';
import Gallery from './components/Gallery.jsx';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route index={true} path="/create" element={<CreateCrew />} />
        <Route index={true} path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
