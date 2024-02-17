import React, { useEffect, useState } from 'react';
import TeamForm from './TeamForm';
import TeamTable from './TeamTable';
import { Box } from '@mui/material';
import  Axios  from "axios";




const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState({});
  const [isEdit, setIsEdit] = useState(false);


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
            marginTop:'50px',
           
          }}
        >
          <TeamForm
              addTeam = {addTeam}
              updateTeam = {updateTeam}
              submitted = {submitted}
              data = {selectedTeam}
              isEdit={isEdit}
          />

          <TeamTable 
              rows = {teams}
              selectedTeam = {data => {
                setSelectedTeam(data);
                setIsEdit(true);

              }}
              deleteTeam = {data => window.confirm('Are you sure') && deleteTeam(data) }
          />
         
        </Box>
    </div>
  );
}

export default Teams;
