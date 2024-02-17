import React, { useEffect, useState } from 'react';
import ClientForm from './ClientForm';
import ClientTable from './ClientTable';
import { Box } from '@mui/material';
import  Axios  from "axios";




const Clients = () => {
  const [clients, setClients] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedClient, setSelectedClient] = useState({});
  const [isEdit, setIsEdit] = useState(false);


  useEffect (() => {
      getClients();
  }, []);

  const getClients = () => {
      Axios.get('http://localhost:3001/api/users')
        .then(response => {
          console.log('API Response:', response.data);  
          setClients(response.data || []);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
  }
  
  const addClient = (data) =>{
      setSubmitted(true);
      
      if (data.name) {  // check if data has a valid id and name
      const payload = {
        name: data.name,
      }
      
      Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
          getClients();
          setSubmitted(false);
          isEdit(false);
          
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
      
        // show an error message or disable the submit button
      }  else {
        alert("Please enter a valid Team name");
      }

  }
  
  const updateClient = (data) => {
      setSubmitted(true);

      const payload = {
        name: data.name,
      }

      Axios.post('http://localhost:3001/api/updateuser', payload)
        .then(() => {
          getClients();
          setSubmitted(false);
          isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

  }

  const deleteClient = (data) =>{
    Axios.post('http://localhost:3001/api/deleteuser', data)
      .then(() => {
        getClients();
      })
      .catch(error => {
          console.error("Axios Error : ", error);
      });

  }
          
  return (
    <div className='clientpage'>

        <Box
          sx={{
            width:'calc(100% - 50px)',
            margin: 'auto',
            marginTop:'50px',
           
          }}
        >
          <ClientForm
              addClient = {addClient}
              updateClient = {updateClient}
              submitted = {submitted}
              data = {selectedClient}
              isEdit={isEdit}
          />

          <ClientTable 
              rows = {clients}
              selectedClient = {data => {
                setSelectedClient(data);
                setIsEdit(true);

              }}
              deleteClient = {data => window.confirm('Are you sure') && deleteClient(data) }
          />
         
        </Box>
    </div>
  );
}

export default Clients;
