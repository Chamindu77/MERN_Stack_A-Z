import React from 'react'
import UserForm from './UserForm';
import UsersTable from './UsersTable';
import { Box } from '@mui/material';

const users = [
    {
        id: 1,
        name: 'chamindu',
    },
    {
        id:2,
        name: 'nipun'
    }
];


export default function Users() {
  return (
    <Box
      sx={{
          width: 'calc(100% - 100px)',
          margin: 'auto',
          marginTop: '100px',
      }}
    >
    <UserForm/>
    <UsersTable rows={users} />
    </Box>
  );
}
