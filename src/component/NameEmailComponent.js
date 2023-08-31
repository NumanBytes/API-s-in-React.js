import React, { useState } from 'react';
import '../App.css'; 

const NameEmailComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  return (
    <div className="name-email-container">
       <label>Name:</label>
      <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
      <br />
      <label>Email:</label>
      <input type="email" placeholder="Enter your email" value={email} onChange={handleEmailChange} />
    </div>
  );
};

export default NameEmailComponent;