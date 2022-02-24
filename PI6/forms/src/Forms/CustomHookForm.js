
import "./form.css";
import useInput from "../hooks/useInpt";

const CustomHookForm = () => {

  const {
    value: nameValue, 
    hasError: nameError, 
    valid: nameValid, 
    changeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler, 
    reset: nameReset,  
  }= useInput((value) => value.trim() !== '')

  const {
    value: emailValue, 
    hasError: emailError, 
    valid: emailValid, 
    changeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler, 
    reset: emailReset,  
  }= useInput((value) => value.includes('@')&&value.trim() !== '')

  const formValid = nameValid && emailValid;
  
	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (!formValid) {
			return;
		}
    console.log({nameValue, emailValue});
    nameReset();
    emailReset()
	};

	return (
		<div className="card">
			<form onSubmit={formSubmitHandler}>
				<input
					type="text"
					placeholder="Enter your name"
					onChange={nameChangeHandler}
					className={nameError && "invalid"}
					value={nameValue}
					onBlur={nameBlurHandler}
				/>
				{nameError && <p> Please enter your name</p>}
				<input
					type="text"
					placeholder="Enter your Email"
					onChange={emailChangeHandler}
					className={emailError && "invalid"}
					value={emailValue}
					onBlur={emailBlurHandler}
				/>
				{emailError && <p> Please enter valid email</p>}
				<button disabled={formValid ? false : true}>Submit</button>
			</form>
		</div>
	);
};

export default CustomHookForm;
