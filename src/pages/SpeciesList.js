import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSpecies } from '../services/api';

const SpeciesList = () => {
  const [species, setSpecies] = useState([]);

  useEffect(() => {
    fetchSpecies().then(data => setSpecies(data));
  }, []);

  return (
    <div>
      <h2>Liste des Espèces:</h2>
      <ul>
        {species.map(species => (
          <li key={species.idEspece}>
            <Link to={`/species/${species.idEspece}`}>{species.nomEspece}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpeciesList;