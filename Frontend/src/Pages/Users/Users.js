import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box,Button } from '@mui/material';
import  Axios  from "axios";
import Modal from 'react-modal'
import '../../Components/Modal.css';


Modal.setAppElement('#root');



const Users = () => {
  const [users, setUsers] = useState([]);
  const[submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect (() => {
      getUsers();
  }, []);

  const getUsers = () => {
      Axios.get('http://localhost:3001/api/users')
        .then(response => {
          console.log('API Response:', response.data);  
          setUsers(response.data || []);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
  }
  
  const addUser = (data) =>{
      setSubmitted(true);
      
      if (data.id && data.name) {  // check if data has a valid id and name
      const payload = {
        id: data.id,
        name: data.name,
      }
      
      Axios.post('http://localhost:3001/api/createuser', payload)
        .then(() => {
          getUsers();
          setSubmitted(false);
          isEdit(false);
          
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });
      
        // show an error message or disable the submit button
      }  else {
        alert("Please enter a valid id and name");
      }

  }
  
  const updateUser = (data) => {
      setSubmitted(true);

      const payload = {
        id: data.id,
        name: data.name,
      }

      Axios.post('http://localhost:3001/api/updateuser', payload)
        .then(() => {
          getUsers();
          setSubmitted(false);
          isEdit(false);
        })
        .catch(error => {
            console.error("Axios Error : ", error);
        });

  }

  const deleteUser = (data) =>{
    Axios.post('http://localhost:3001/api/deleteuser', data)
      .then(() => {
        getUsers();
      })
      .catch(error => {
          console.error("Axios Error : ", error);
      });

  }
          
  return (
    <div className='userpage'>

        <Box
          sx={{
            width:'calc(100% - 50px)',
            margin: 'auto',
            marginTop:'100px',
           
          }}
        >
            <Button
          style={{background:'blue',color:'white',position:'absolute',right:'45px',top:'50px'}}
          onClick={() => setModalIsOpen(true)}>Add User</Button>
          
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
          <UserForm
              addUser = {addUser}
              updateUser = {updateUser}
              submitted = {submitted}
              data = {selectedUser}
              isEdit={isEdit}
          />
          </Modal>
          <UsersTable 
              rows = {users}
              selectedUser = {data => {
                setSelectedUser(data);
                setIsEdit(true);
                setModalIsOpen={setModalIsOpen}
              }}
              setModalIsOpen={setModalIsOpen}
              deleteUser = {data => window.confirm('Are you sure') && deleteUser(data) }
          />
         
        </Box>
    </div>
  );
}

export default Users;
