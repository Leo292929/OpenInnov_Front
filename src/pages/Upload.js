import React, { useState } from 'react';
import { uploadFootprint } from '../services/api';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      uploadFootprint(file).then(response => {
        const { classificationResult } = response;
        setMessage(`Classification : ${classificationResult}`);
      }).catch(error => {
        setMessage('Erreur lors de l\'upload');
      });
    }
  };

  return (
    <div>
      <h2>Uploader une Empreinte</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Uploader</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Upload;