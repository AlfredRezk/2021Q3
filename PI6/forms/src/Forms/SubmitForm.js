import React, { useState} from 'react'; 
import './form.css';

const SubmitForm = () => {
  const [name, setName] = useState('');
  const [nameValid, setValid] = useState(true);
  
  const nameChangeHandler = (e) => { 
    setName(e.target.value)
  }

  const formSubmitHandler = (e) => { 
    e.preventDefault();

    if (!name) { 
      setValid(false)
      return;
    }
    setValid(true);
    console.log(name);
    setName('');
  }

  return (
    <div className="card">
      <form onSubmit={ formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={ nameChangeHandler }
          className={ !nameValid && 'invalid' }
          value={ name}
        />
        { !nameValid&&<p> Please enter your name</p>}
        <button>Submit</button>
      </form>

    </div>
  )
}

export default SubmitForm