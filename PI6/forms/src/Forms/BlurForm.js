/** @format */

import React, { useState } from "react";
import "./form.css";

const BlurForm = () => {
	const [name, setName] = useState("");
  const [nameValid, setValid] = useState(false);
  const [nameTouched, setTouched] = useState(false)

  const nameInvalid = !nameValid && nameTouched;

	const nameChangeHandler = (e) => {
		setName(e.target.value);
  };
  
  const nameBlurHandler = (e) => {
		setTouched(true);
		// validation
		if (!name) {
      setValid(false);
      return;
    }
    setValid(true)    
	}

	const formSubmitHandler = (e) => {
		e.preventDefault();
    setTouched(true);
    // validation 
		if (!name) {
			setValid(false);
			return;
		}
		setValid(true);
		console.log(name);
		setName("");
	};

	return (
		<div className="card">
			<form onSubmit={formSubmitHandler}>
				<input
          type="text"
          placeholder="Enter your name"
          onChange={ nameChangeHandler }
          className={ nameInvalid && "invalid" }
          value={ name }
          onBlur={ nameBlurHandler}
				/>
				{nameInvalid && <p> Please enter your name</p>}
				<button>Submit</button>
			</form>
		</div>
	);
};

export default BlurForm;
