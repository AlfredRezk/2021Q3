import { loginValidation , signupValidation} from '../validation';
import { clearStates, isAuth } from '../utilites';



export function getSignup() {
 const viewData = { msgs, ...sharedData, signupActive:true, loggedIn: isAuth() };
  
  if (formData && msgs.length !== 0) { 
    viewData.email.input = formData.email;
    viewData.password.input = formData.password;
    viewData.password2.input = formData.password2;
  }

		this.loadPartials({
			navbar: "./views/partials/navbar.hbs",
			notifications: "./views/partials/notifications.hbs",
		}).then(function () {
      this.render("./views/auth/signup.hbs", viewData).swap();
      clearStates(viewData)
		});
	}

  export function postSignup() {
    const { email, password, password2 } = this.params;
    formData = { email, password, password2}
    let isValid = signupValidation(formData)
    
    if (!isValid) { 
      this.redirect('/signup');
      return;
    }

    sharedData.isLoading = true;
    this.redirect('/signup')
		db.signup({ username: email, password })
      .then(res => {
        msgs.push({ msg: 'User created Successfully !', class: 'alert-success' })
        sharedData.isLoading = false;
        this.redirect('/login')
        formData = {};
  
			})
			.catch((err) => {
        if (err.status === 409) {
           msgs.push({msg:'User Already exists !', class:'alert-danger'})
          this.redirect("/signup");
          sharedData.email = {}; 
          sharedData.email.invalid = true; 
          sharedData.password = {};
          sharedData.password2 = {}
          sharedData.isLoading = false;
				}
			});
}
  
// Login methods 

export function getLogin() {
  const viewData = { msgs, ...sharedData, loginActive:true, loggedIn: isAuth() };

    if (formData && msgs.length !== 0) {
      viewData.email? viewData.email.input = formData.email :'';
		  viewData.password? viewData.password.input = formData.password :'';
		}

  
	this.loadPartials({
		navbar: "./views/partials/navbar.hbs",
		notifications: "./views/partials/notifications.hbs",
	}).then(function () {
		this.render("./views/auth/login.hbs", viewData).swap();
		clearStates(viewData);
	});
}

export function postLogin() { 
  const { email, password } = this.params;
  formData = {email, password}
  const isValid = loginValidation(formData)
  if (!isValid) { 
    this.redirect('/login');
    return
  }

  sharedData.isLoading = true; 
  this.redirect('/login')
  db.login({ username: email, password }).then(res => { 
    sessionStorage.setItem('user', res._id);
    sessionStorage.setItem('loggedIn', res._kmd.authtoken);
    msgs.push({ msg: 'Logged In successfully !', class: 'alert-success' })
    sharedData.isLoading = false; 
    this.redirect('/profile');
  }).catch(err => { 
    msgs.push({ msg: err.statusText, class: 'alert-danger' });
    sharedData.email = {}
    sharedData.email.invalid = true; 
    sharedData.password = {}
     sharedData.isLoading = false; 
    this.redirect('/login');
  })
}

export function getLogout(){ 
  let token = sessionStorage.getItem('loggedIn');
  db.logout(token).then(res => { 
    msgs.push({ msg: 'Logged out Successfully !', class: 'alert-success' })
    sessionStorage.removeItem('loggedIn');
    sessionStorage.removeItem('user');
    this.redirect('/login');
  }).catch(err => { 
    msgs.push({ msg: err.statusText, class: 'alert-danger' })
    this.redirect('/')
  })
}