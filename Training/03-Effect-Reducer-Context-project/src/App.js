import React, { useState, useEffect, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useEffect(() => {
  //   console.log('App useEffect');
  //   const storageUserLoggedInInformation = localStorage.getItem("isLoggedIn");
  //   if (storageUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem("isLoggedIn", 1);
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      {/* <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler
      }}> */}
        <MainHeader onLogout={ctx.onLogout} />
        <main>
          {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
          {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
        </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default App;
