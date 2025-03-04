const API_URL = 'http://localhost:3000/api';

export const fetchSpecies = async () => {
  const response = await fetch(`${API_URL}/especes/`);
  return response.json();
};

export const fetchSpeciesById = async (id) => {
  const response = await fetch(`${API_URL}/especes/${id}`);
  return response.json();
};

export const uploadFootprint = async (file) => {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('idUser', 1);
  formData.append('localisationempreinte', "Nantes, France");
  const response = await fetch(`${API_URL}/classification/classify`, {
    method: 'POST',
    body: formData
  });

  return response.json();
};