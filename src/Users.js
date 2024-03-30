import React, { useEffect, useState } from 'react'
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';
import axios from 'axios';

export default function Users() {

  useEffect(() => {
    getUsers();
  }, []);

  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit,setIsEdit] = useState(false);
  const [selectedUser,setSelectedUser] = useState({});


  //GET
  const getUsers = () => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data?.response || [])
      })
      .catch(error => {
        console.error("Axios Error : ", error);
      })
  }

  //ADD
  const addUser = (data) =>{
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,

    }

    axios.post('http://localhost:3001/api/createuser', payload)
      .then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch (error => {
        console.error("Axios Error : ", error);
      });
  }

  //UPDATE
  const updateUser = (data) => {
    setSubmitted(true);
    
    const payload = {
      id: data.id,
      name: data.name,
    }
    
    axios.post('http://localhost:3001/api/updateuser', payload)
      . then(() => {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.error("Axios Error : ", error);
      });
  }

  //DELETE
  const deleteUser = (data) => {
    axios.post('http://localhost:3001/api/deleteuser', data)
      .then(() => {
        getUsers();
      })
      .catch(error => {
        console.error("Axios Error : ", error);
      });
  }

  return (
    <Box
      sx={{
        width: 'calc(100% - 100px)',
        margin: 'auto',
        marginTop: '100px',
      }}
    >
      <UserForm 
          addUser={addUser}
          updateUser={updateUser}
          submitted={submitted}
          data={selectedUser}
          isEdit={isEdit}
      />
      <UsersTable 
        rows={users} 
        selectedUser={data=>{
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={data=> window.confirm('Are You Sure?') && deleteUser(data)}
         
      />
    </Box>
  );
}
