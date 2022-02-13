import React from 'react'
import LoginForm from './LoginForm'
import { Card } from 'react-bootstrap';

const LoginPage = () => {
  return (
		<Card style={{ width: "50%", margin:'auto' }} className="shadow">
			<Card.Body>
				<Card.Title className='text-center'>Login</Card.Title>
        <LoginForm/>
			</Card.Body>
		</Card>
	);
}

export default LoginPage