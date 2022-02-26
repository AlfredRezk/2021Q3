import React, { useContext, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useInput from '../hooks/useInput';
import { login } from '../services';


const Login = () => {
  const { setIsAuth, isAuth } = useContext(AuthContext);
  const navigate = useNavigate()

  
   const {
			value: email,
			hasError: emailInvalid,
			valid: emailValid,
			changeHandler: emailChangeHandler,
			blurHandler: emailBlurHandler,
			reset: emailReset,
		} = useInput((email) => email.trim().length !== "" && email.includes("@"));

		const {
			value: password,
			hasError: passwordInvalid,
			valid: passwordValid,
			changeHandler: passwordChangeHandler,
			blurHandler: passwordBlurHandler,
			reset: passwordReset,
  } = useInput((password) => password.trim().length > 5);
  
  const formValid = emailInvalid && passwordValid

  const submitHandler = (e) => {
    e.preventDefault()
    login(email, password, setIsAuth);
    navigate('/');
 
  };


  return (
		<div className="Login">
			<h1>Login Page</h1>
			<form onSubmit={submitHandler}>
				<div className="form-control">
					<label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={ emailChangeHandler } onBlur={ emailBlurHandler } value={ email } />
          { emailInvalid&& <p>please enter valid email</p>}
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={ passwordChangeHandler } onBlur={ passwordBlurHandler } value={ password}/>
				  { passwordInvalid&& <p>please enter valid password</p>}
        </div>

				<div className="form-control">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}

export default Login