/** @format */

import React, { useState, useRef } from "react";
import "./form.css";

const RefForm = () => {
	const [nameValid, setValid] = useState(true);
  // Create a reference to the input field 
  const inputRef = useRef();

	const formSubmitHandler = (e) => {
		e.preventDefault();
    const name = inputRef.current.value;   // document.querySelector('input').value 

		if (!name) {
			setValid(false);
			return;
		}
		setValid(true);
		console.log(name);
    inputRef.current.value = '';
	};

	return (
		<div className="card">
			<form onSubmit={formSubmitHandler}>
				<input
          type="text"
          placeholder="Enter your name"
          className={ !nameValid && "invalid" }
          ref={inputRef}
				/>
				{!nameValid && <p> Please enter your name</p>}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default RefForm;
