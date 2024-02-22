import React, { useEffect, useState } from 'react';
import TeamForm from './TeamForm';
import TeamTable from './TeamTable';
import { Box, Button } from '@mui/material';
import  Axios  from "axios";
import Modal from 'react-modal'
import '../../Components/Modal.css';


Modal.setAppElement('#root');
const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});
  const [isEdit, setIsEdit] = useState(false); 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect (() => {
      getTeams();
  }, []);

  const getTeams = () => {
      Axios.get('http://localhost:3001/api/users')
        .then(response => {
          console.log('API Response:', response.data);  
          setTeams(response.data || []);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
  }
  
  const addTeam = (data) =>{
      setSubmitted(true);
      
      if (data.name) {  // check if data has a valid id and name
      const payload = {
        name: data.name,
      }
      
      Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
          getTeams();
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
  
  const updateTeam = (data) => {
      setSubmitted(true);

      const payload = {
        name: data.name,
      }

      Axios.post('http://localhost:3001/api/updateuser', payload)
        .then(() => {
          getTeams();
          setSubmitted(false);
          isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

  }

  const deleteTeam = (data) =>{
    Axios.post('http://localhost:3001/api/deleteuser', data)
      .then(() => {
        getTeams();
      })
      .catch(error => {
          console.error("Axios Error : ", error);
      });

  }
          
  return (
    <div className='teampage'>

        <Box
          sx={{
            width:'calc(100% - 50px)',
            margin: 'auto',
            marginTop:'100px',
            
          }}
        >
          <Button
          style={{background:'blue',color:'white',position:'absolute',right:'45px',top:'50px'}}
          onClick={() => setModalIsOpen(true)}>Add Team</Button>
          
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
          <TeamForm
              addTeam = {addTeam}
              updateTeam = {updateTeam}
              submitted = {submitted}
              data = {selectedTeam}
              isEdit={isEdit}
              
          />
          </Modal>
          
          <TeamTable 
              rows = {teams}
              selectedTeam = {data => {
                setSelectedTeam(data);
                setIsEdit(true);
              }}
              setModalIsOpen={setModalIsOpen}
              deleteTeam = {data => window.confirm('Are you sure') && deleteTeam(data) }
          />
         
        </Box>
    </div>
  );
}

export default Teams;
