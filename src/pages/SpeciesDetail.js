import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSpeciesById } from '../services/api';

const SpeciesDetail = () => {
  const { id } = useParams();
  const [species, setSpecies] = useState(null);

  useEffect(() => {
    fetchSpeciesById(id).then(data => setSpecies(data));
  }, [id]);

  if (!species) return <div>Chargement...</div>;

  return (
    <div>
      <h2>{species.nomEspece}</h2>
      <p>{species.descriptionEspece}</p>
      <p>Nom Latin: {species.nomLatin}</p>
      <p>Famille: {species.famille}</p>
      <p>Habitat: {species.habitat}</p>
      <p>Fun Fact: {species.funfact}</p>
    </div>
  );
};

export default SpeciesDetail;