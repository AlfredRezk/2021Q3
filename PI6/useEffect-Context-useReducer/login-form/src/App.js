import Header from './components/Header';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import { useState, useEffect } from 'react';
import AuthContext from './context/AuthContext';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
      if (localStorage.getItem("token")) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
   }, [])


  const loginHandler = (email, password) => { 
    setIsLoggedIn(true);
    localStorage.setItem('token', '123245646');
  }

  const logoutHandler = () => { 
    setIsLoggedIn(false);
    localStorage.removeItem('token')
  }


  return (
    <AuthContext.Provider value={ {isLoggedIn, logoutHandler, loginHandler}}>
				<Header />
				{isLoggedIn ? <HomePage /> : <LoginPage />}
		</AuthContext.Provider>
	);
}

export default App;
