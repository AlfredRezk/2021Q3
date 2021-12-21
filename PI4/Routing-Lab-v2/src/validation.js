import validator from 'validator';

export const loginValidation = ({ email, password }) => { 

  sharedData = { email: {}, password: {} };

  if (!email) {
    msgs.push({ msg: 'Email Field is required', class: 'alert-danger' });
    sharedData.email.invalid = true;

  } else if (!validator.isEmail(email)) {
    msgs.push({ msg: 'Email Format is incorrect', class: 'alert-danger' })
    sharedData.email.invalid = true;
  } else { 
      sharedData.email.valid = true;
  }

  if (!password) {
    msgs.push({ msg: "Password Field is required", class: "alert-danger" });
    sharedData.password.invalid = true;
  } else if (!validator.isLength(password, { min: 6, max: 15 })) {
    msgs.push({ msg: 'Password should be 6-15 characters', class: 'alert-danger' })
    sharedData.password.invalid = true;
  } else { 
    sharedData.password.valid = true;
  }

  return msgs.length === 0
}

export const signupValidation = ({ email, password, password2 }) => { 
  loginValidation({ email, password })
  sharedData.password2 = {}


  if (!password2) {
    msgs.push({ msg: "Confirmed Password Field is required", class: "alert-danger" });
    sharedData.password2.invalid = true;
  } else if (!validator.equals(password, password2)) {
    msgs.push({ msg: "Password not matching", class: "alert-danger" });
    sharedData.password2.invalid = true;
  } else { 
     sharedData.password2.valid = true;
  }
  
 return msgs.length === 0;
}



