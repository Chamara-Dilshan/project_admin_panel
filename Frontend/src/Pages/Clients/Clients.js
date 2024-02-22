import React, { useEffect, useState } from 'react';
import ClientForm from './ClientForm';
import ClientTable from './ClientTable';
import { Box,Button } from '@mui/material';
import  Axios  from "axios";
import Modal from 'react-modal'
import '../../Components/Modal.css';


Modal.setAppElement('#root');



const Clients = () => {
  const [clients, setClients] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedClient, setSelectedClient] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
            marginTop:'100px',
           
          }}
        >
          <Button
          style={{background:'blue',color:'white',position:'absolute',right:'45px',top:'50px'}}
          onClick={() => setModalIsOpen(true)}>Add Client</Button>
          
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                width: '100%',
              },
              content: {
                color: 'orange',
                position: 'absolute',
                top: '30px',
                left: '25%',
                right: '30%',
                bottom: '40px',
                borderRadius: '10px',
              },
              
            }}

          >
          <ClientForm
              addClient = {addClient}
              updateClient = {updateClient}
              submitted = {submitted}
              data = {selectedClient}
              isEdit={isEdit}
          />
          </Modal>
          <ClientTable 
              rows = {clients}
              selectedClient = {data => {
                setSelectedClient(data);
                setIsEdit(true);
              }}
              setModalIsOpen={setModalIsOpen}
              deleteClient = {data => window.confirm('Are you sure') && deleteClient(data) }
          />
         
        </Box>
    </div>
  );
}

export default Clients;
