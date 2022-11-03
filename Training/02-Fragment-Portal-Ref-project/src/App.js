import React, { Fragment, useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (userData) =>{
    console.log(userData);
    setUserList((prevState)=>[userData, ...prevState]);
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={userList}/>
    </Fragment>
  );
}

export default App;
