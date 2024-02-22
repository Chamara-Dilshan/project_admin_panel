import React, { useEffect, useState } from 'react';
import ProjectForm from './ProjectForm';
import ProjectTable from './ProjectTable';
import { Box } from '@mui/material';
import  Axios  from "axios";
import Modal from 'react-modal'
import '../../Components/Modal.css';
import {Button} from '@mui/material';


Modal.setAppElement('#root');



const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect (() => {
      getProjects();
  }, []);

  const getProjects = () => {
      Axios.get('http://localhost:3001/api/users')
        .then(response => {
          console.log('API Response:', response.data);  
          setProjects(response.data || []);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
  }
  
  const addProject = (data) =>{
      setSubmitted(true);
      
      if (data.name) {  // check if data has a valid id and name
      const payload = {
        name: data.name,
      }
      
      Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
          getProjects();
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
  
  const updateProject = (data) => {
      setSubmitted(true);

      const payload = {
        name: data.name,
      }

      Axios.post('http://localhost:3001/api/updateuser', payload)
        .then(() => {
          getProjects();
          setSubmitted(false);
          isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

  }

  const deleteProject = (data) =>{
    Axios.post('http://localhost:3001/api/deleteuser', data)
      .then(() => {
        getProjects();
      })
      .catch(error => {
          console.error("Axios Error : ", error);
      });

  }
          
  return (
    <div className='projectpage'>

        <Box
          sx={{
            width:'calc(100% - 50px)',
            margin: 'auto',
            marginTop:'100px',
           
          }}
        >
          <Button
          style={{background:'blue',color:'white',position:'absolute',right:'45px',top:'50px'}}
          onClick={() => setModalIsOpen(true)}>Add Project</Button>
          
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
          <ProjectForm
              addProject = {addProject}
              updateProject = {updateProject}
              submitted = {submitted}
              data = {selectedProject}
              isEdit={isEdit}
          />
          </Modal>
          <ProjectTable 
              rows = {projects}
              selectedProject = {data => {
                setSelectedProject(data);
                setIsEdit(true);

              }}
              deleteProject = {data => window.confirm('Are you sure') && deleteProject(data) }
          />
         
        </Box>
    </div>
  );
}

export default Projects;
