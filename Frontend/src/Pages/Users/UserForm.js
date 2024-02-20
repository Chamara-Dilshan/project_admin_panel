import React, { useState } from 'react';
import axios from 'axios';
import './Userform.css'; // Import CSS file

function UserForm() {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    employeeNo: '',
    team: 'ios'
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
       
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });
  };

  return (
    <div className="client-form-container">
      <button className="create-client-button" onClick={() => setShowForm(true)}>Create User</button>
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
            Employee No:
            <input
              type="text"
              name="employeeNo"
              value={formData.employeeNo}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Team:
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
            >
              <option value="ios">iOS</option>
              <option value="android">Android</option>
              <option value="web">Web</option>
              <option value="api">API</option>
            </select>
          </label>
          <br />
          <button type="submit" className="submit-button">Submit</button>
          <button type="submit" className="edit-button">Edit</button>
        </form>
      }
    </div>
  );
}

export default UserForm;
