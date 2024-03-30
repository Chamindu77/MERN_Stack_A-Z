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

const getUsers = (cb) => {
    cb(users);
};

const getUsersById = (id,cd) => {
  const user = users.find(user => user.id == id);
  cd(user);  
};

exports.getUsers = getUsers;
exports.getUsersById = getUsersById;

