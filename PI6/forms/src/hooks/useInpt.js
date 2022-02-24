import { useState } from 'react'; 

const useInput = (validation) => { 
	const [value, setValue] = useState("");
	const [touched, setTouched] = useState(false);
  const valid = validation(value)
  const hasError = !valid && touched;
	
  const changeHandler = (e) => {
		setTouched(true);
		setValue(e.target.value);
  };
  
  const blurHandler = (e) => {
		setTouched(true);
  };

  const reset = () => { 
    setValue("");
	  setTouched(false);
  }
  
  return {
    value, 
    hasError, 
    valid, 
    changeHandler, 
    blurHandler, 
    reset
  }
}


export default useInput;