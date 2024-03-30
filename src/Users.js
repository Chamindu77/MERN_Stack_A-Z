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


  const getUsers = () => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setUsers(response.data?.response || [])
      })
      .catch(error => {
        console.error("Axios Error : ", error);
      })
  }

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
      })
      .catch (error => {
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
          submitted={submitted}
      />
      <UsersTable rows={users} />
    </Box>
  );
}
