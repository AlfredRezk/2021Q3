import React from 'react'

const Login = () => {
  return (
		<div className="Login">
			<h1>Login Page</h1>
			<form>
				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" />
				</div>
				<div className="form-control">
					<label htmlFor="password">Password</label>
					<input type="password" id="password" />
				</div>

				<div className="form-control">
					<button type="submit">Login</button>
				</div>
			</form>
		</div>
	);
}

export default Login