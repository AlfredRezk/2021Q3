import React, { useContext , useState, useEffect, useReducer} from 'react'
import AuthContext from '../context/AuthContext'
import { Form, Button } from 'react-bootstrap'


const initialState = { value: '', isValid: null }

const emailReducer = (state, { type, payload }) => {
  switch (type) { 
    case 'EMAIL_INPUT': return { value: payload, isValid: payload.includes('@') };
    case 'EMAIL_BLUR': return {value: state.value, isValid: state.value.includes('@')}
    default: return initialState;
  }

}

const passwordReducer = (state, { type, payload }) => {
  switch (type) { 
    case 'PASSWORD_INPUT': return {value: payload, isValid: payload.length>6}
    case 'PASSWORD_BLUR': return {value: state.value, isValid: state.value.length>6}
    default: return initialState;
  }
}

const LoginForm = () => {

  const { isLoggedIn, loginHandler } = useContext(AuthContext);
  const [email, dispatchEmail] = useReducer(emailReducer, initialState);
  const [password, dispatchPassword]= useReducer(passwordReducer, initialState)
  const [isFormValid, setIsFormValid] = useState(false)

  
  useEffect(() => {
    const timerId = setTimeout(() => { 
      console.log('Check form validation ');
      setIsFormValid(email.isValid&& password.isValid)
    }, 500)
    return () => { 
      console.log('Clean up')
      clearTimeout(timerId)
    }
   }, [email.isValid, password.isValid])

  const emailHandler = (e) => {
    dispatchEmail({type:'EMAIL_INPUT', payload: e.target.value})
  }

  const passwordHandler = (e) => {
    dispatchPassword({type: 'PASSWORD_INPUT', payload: e.target.value})
  }

  const submitHandler = (e) => { 
    e.preventDefault();
    if (isFormValid) {
      loginHandler(email, password);
    } 
  }

  const validatePassword = () => { 
    dispatchPassword({type:'PASSWORD_BLUR'})
  }

  const validateEmail = () => { 
    dispatchEmail({type:'EMAIL_BLUR'})
  }

  return (
		<Form onSubmit={submitHandler}>
			<Form.Group className="mb-3" >
				<Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={ emailHandler } value={ email.value }
          className={ email.isValid === false && 'is-invalid' } onBlur={ validateEmail}/>
        <small className='invalid-feedback'> Check email</small>
			</Form.Group>

			<Form.Group className="mb-3" >
				<Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={ passwordHandler } value={ password.value }
          className={ password.isValid === false && 'is-invalid' } onBlur={ validatePassword}/>
        <small className='invalid-feedback'> Check Password</small>
			</Form.Group>
      <div className="text-center">
        <Button variant="primary" type="submit">Login</Button>
    </div>
		</Form>
	);
}

export default LoginForm