/** @format */

import React, { useState } from "react";
import "./form.css";

const KeyStrokeForm = () => {
	const [name, setName] = useState("");
  const [nameTouched, setTouched] = useState(false);
  const nameInvalid = !name.trim() && nameTouched; 
  const formValid = !nameInvalid;

  const nameChangeHandler = (e) => {
    
    setTouched(true)
		setName(e.target.value);
	};

	const nameBlurHandler = (e) => {
		setTouched(true);
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		
    if (nameInvalid) { 
      return;
    }
		console.log(name);
    setName("");
    setTouched(false)
	};

	return (
		<div className="card">
			<form onSubmit={formSubmitHandler}>
				<input
					type="text"
					placeholder="Enter your name"
					onChange={nameChangeHandler}
					className={nameInvalid && "invalid"}
					value={name}
					onBlur={nameBlurHandler}
				/>
				{nameInvalid && <p> Please enter your name</p>}
        <button
          disabled={ formValid? false: true}
        >Submit</button>
			</form>
		</div>
	);
};

export default KeyStrokeForm;
