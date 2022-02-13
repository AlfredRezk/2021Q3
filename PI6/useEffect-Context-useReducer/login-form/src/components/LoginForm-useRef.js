import React, { useContext , useState, useEffect, useReducer, useRef} from 'react'
import AuthContext from '../context/AuthContext'
import { Form, Button } from 'react-bootstrap'


const LoginForm = () => {

  const { isLoggedIn, loginHandler } = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (e) => { 
    e.preventDefault();
    loginHandler(emailRef.current.value, passwordRef.current.value);
  }

  return (
		<Form onSubmit={submitHandler}>
			<Form.Group className="mb-3" >
				<Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={ emailRef}/>
  
			</Form.Group>

			<Form.Group className="mb-3" >
				<Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={ passwordRef}/>
			</Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit">Login</Button>
    </div>
		</Form>
	);
}

export default LoginForm