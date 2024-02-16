import React, { useEffect, useState } from 'react';
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import  Axios  from "axios";
import './Users.css';



const Users = () => {
  const [users, setUsers] = useState([]);
  const[submitted, setSubmitted] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [isEdit, setIsEdit] = useState(false);


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
            marginTop:'50px',
           
          }}
        >
          <UserForm
              addUser = {addUser}
              updateUser = {updateUser}
              submitted = {submitted}
              data = {selectedUser}
              isEdit={isEdit}
          />

          <UsersTable 
              rows = {users}
              selectedUser = {data => {
                setSelectedUser(data);
                setIsEdit(true);

              }}
              deleteUser = {data => window.confirm('Are you sure') && deleteUser(data) }
          />
         
        </Box>
    </div>
  );
}

export default Users;
