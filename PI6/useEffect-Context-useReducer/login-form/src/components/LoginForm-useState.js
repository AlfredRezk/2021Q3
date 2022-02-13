import React, { useContext , useState} from 'react'
import AuthContext from '../context/AuthContext'
import { Form, Button} from 'react-bootstrap'

const LoginForm = () => {

  const { isLoggedIn, loginHandler } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState()
  
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState()
  const [isFormValid, setIsFormValid] = useState(false)


  const emailHandler = (e) => {
    validateEmail()
    setIsFormValid(e.target.value.includes('@') && password.trim().length>6)
    setEmail(e.target.value)
  }

  const passwordHandler = (e) => { 
    validatePassword()
    setIsFormValid(email.includes("@") && e.target.value.trim().length > 6);
    setPassword(e.target.value)
  }

  const submitHandler = () => { 
    loginHandler(email, password)
  }

  const validatePassword = () => { 
    setPasswordIsValid(password.trim().length > 6);
  }

  const validateEmail = () => { 
    setEmailIsValid(email.includes("@"));
  }

  return (
		<Form onSubmit={submitHandler}>
			<Form.Group className="mb-3" >
				<Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={ emailHandler } value={ email }
          className={ emailIsValid === false && 'is-invalid' } onBlur={ validateEmail}/>
        <small className='invalid-feedback'> Check email</small>
			</Form.Group>

			<Form.Group className="mb-3" >
				<Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={ passwordHandler } value={ password }
          className={ passwordIsValid === false && 'is-invalid' } onBlur={ validatePassword}/>
        <small className='invalid-feedback'> Check Password</small>
			</Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit" disabled={ isFormValid? false: true}>Login</Button>
    </div>
		</Form>
	);
}

export default LoginForm