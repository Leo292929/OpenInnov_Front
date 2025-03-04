import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SpeciesList from './pages/SpeciesList';
import SpeciesDetail from './pages/SpeciesDetail';
import Upload from './pages/Upload';
import './App.css';
function App() {
  return (
      <Router>
        <div>
        <html>
          <body>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/species" element={<SpeciesList />} />
                <Route path="/species/:id" element={<SpeciesDetail />} />
                <Route path="/upload" element={<Upload />} />
              </Routes>
            </main>
          </body>
          </html>
        </div>
      </Router>
  );
}

export default App;