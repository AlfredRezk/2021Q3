import React, { useContext } from 'react'
import { Navbar, Container, Button} from 'react-bootstrap'
import AuthContext from '../context/AuthContext';

const Header = () => {

  const {isLoggedIn, logoutHandler }= useContext(AuthContext)
  return (
		<Navbar bg="primary" expand="sm" className='mb-4 shadow'>
			<Container>
        <Navbar.Brand href="#" className='text-light'>My App</Navbar.Brand>
        { isLoggedIn && <Button variant="warning" onClick={ logoutHandler}>Logout</Button> }
			</Container>
		</Navbar>
	);
}

export default Header