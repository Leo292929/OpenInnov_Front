import React from 'react';
import { Link } from 'react-router-dom';
import logo_blanc from '../assets/logo_blanc.png'
const Header = () => (
  <header>
    
      
    <img src ={logo_blanc} alt ="" className='logo'/>
    <ul id= 'header'>
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/species">Espèces</Link></li>
      <li><Link to="/upload">Uploader une empreinte</Link></li>
    </ul>
  </header>
);

export default Header;