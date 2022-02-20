import React from 'react'
import '../assets/workshop-styles.css';

const Register = () => {
  return (
    <div className="Register">
      <h1>Register Page</h1>
			<form>
				<div className='form-control'>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div className='form-control'>
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>
				<div className='form-control'>
					<label htmlFor="password2">Re-password</label>
					<input type="password" id="password2" />
        </div>
        <div className='form-control'>
          <button type='submit'>Register</button>
        </div>
			</form>
		</div>
	);
}

export default Register