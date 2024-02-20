import React, { useState } from 'react';
import axios from 'axios';
import './ClientForm.css'; // Import CSS file

function ClientForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    country: '',
    sampleLinks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('your-api-endpoint', formData)
      .then(response => {
        console.log('Data successfully submitted:', response.data);
        // You can perform any other actions here after successful submission
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <div className="client-form-container">
      <button className="create-client-button" onClick={() => setShowForm(true)}>Create Client</button>
      {showForm &&
        <form className="client-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Country:
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Sample Links:
            <input
              type="text"
              name="sampleLinks"
              value={formData.sampleLinks}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      }
    </div>
  );
}

export default ClientForm;
