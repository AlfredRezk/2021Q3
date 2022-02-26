import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/workshop-styles.css';
import useInput from '../hooks/useInput';
import { register } from '../services';

const Register = () => {

  const passwordRef = useRef();
  const navigate = useNavigate(); 
  
  const {
		value: email,
		hasError: emailInvalid,
		valid: emailValid,
		changeHandler: emailChangeHandler,
		blurHandler: emailBlurHandler,
		reset: emailReset,
	} = useInput(
		(email) => email.trim().length !== "" && email.includes("@") 
	);

  const {
		value: password,
		hasError: passwordInvalid,
		valid: passwordValid,
		changeHandler: passwordChangeHandler,
		blurHandler: passwordBlurHandler,
		reset: passwordReset,
  } = useInput((password) => password.trim().length > 5);

  const {
		value: password2,
		hasError: password2Invalid,
		valid: password2Valid,
		changeHandler: password2ChangeHandler,
		blurHandler: password2BlurHandler,
		reset: password2Reset,
  } = useInput((p) => p === passwordRef?.current?.value);
  
  const formValid = emailValid & passwordValid && password2Valid;
  
  const submitHandler = async(e) => { 
    e.preventDefault();
    if (!formValid) { 
      return;
    }
    register(email, password);
    navigate('/login')
  }


  return (
    <div className="Register">
      <h1>Register Page</h1>
			<form onSubmit={submitHandler} noValidate>
				<div className='form-control'>
					<label htmlFor="email">Email</label>
          <input type="text"
            id="email"
            onChange={ emailChangeHandler }
            value={ email }
            autoComplete="off"

            onBlur={ emailBlurHandler}/>
          { emailInvalid && <p>Invalid email input</p> }
				</div>
				<div className='form-control'>
					<label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={ passwordChangeHandler } value={ password }
            ref={ passwordRef}/>
				  { passwordInvalid && <p>Invalid Password input</p> }
        </div>
				<div className='form-control'>
					<label htmlFor="password2">Re-password</label>
          <input type="password" id="password2" onChange={ password2ChangeHandler } value={ password2}/>
          { password2Invalid && <p>Invalid confirmed Password</p> }
        </div>
        <div className='form-control'>
          <button type='submit'>Register</button>
        </div>
			</form>
		</div>
	);
}

export default Register