import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setFormData({ name: '', email: '', address: '', message: '' });
  };
  
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    someAsyncOperation().then(result => {
      sendResponse(result);
    });
    return true; // Indicates async response
  });
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} />
      <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
