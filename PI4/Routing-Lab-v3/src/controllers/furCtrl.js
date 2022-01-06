import { clearStates, isAuth } from "../utilites";
import { createValidation } from "../validation";

export function getHome() {

  if (allFurnitures.length !== 0) {
    // No need to fetch from the server
    const viewData = {allFurnitures:allFurnitures, isLoading:false,  loggedIn: isAuth(), homeActive:true}
    this.loadPartials({
      navbar: "../views/partials/navbar.hbs",
      notifications: "../views/partials/notifications.hbs",
    }).then(function () { 
      this.render("../views/app/home.hbs", viewData).swap();
      clearStates(viewData)
    })
  } else { 
    const viewData = { msgs, homeActive: true, loggedIn: isAuth() };
    this.loadPartials({
      navbar: "../views/partials/navbar.hbs",
      notifications: "../views/partials/notifications.hbs",
    }).then(function () {
      // show the loading image
      viewData.isLoading = true;
      this.render("../views/app/home.hbs", viewData).swap();
      // fetch furniture's from db
      db.get("furniture", null, { username: "guest", password: "guest" }).then(
        (res) => {
          allFurnitures = res;
          viewData.allFurnitures = allFurnitures;
          viewData.isLoading = false;
          this.render("../views/app/home.hbs", viewData).swap();
          clearStates(viewData);
        }
      );
      clearStates(viewData);
    });

  }
}

export function getCreate() {
  const viewData = { msgs, loggedIn: isAuth(), createActive: true, ...sharedData }
  if (formData && msgs.length !== 0) { 
    viewData.maker ? viewData.maker.input = formData.maker : ''; 
    viewData.model ? viewData.model.input = formData.model : ''; 
    viewData.year ? viewData.year.input = formData.year : ''; 
    viewData.desc ? viewData.desc.input = formData.desc : ''; 
    viewData.imageUrl ? viewData.imageUrl.input = formData.imageUrl : ''; 
    viewData.material ? viewData.material.input = formData.material : ''; 
    viewData.price ? viewData.price.input = formData.price : ''; 
  }
  
	this.loadPartials({
		navbar: "../views/partials/navbar.hbs",
		notifications: "../views/partials/notifications.hbs",
	}).then(function () {
    this.render("../views/app/create.hbs", viewData).swap();
     clearStates(viewData);
	});
}

export function postCreate() { 
  let { maker, model, year, desc, price, imageUrl, material } = this.params;
  formData = { maker, model, year, desc, price, imageUrl, material }
  let isValid = createValidation(formData);

  if (isValid) {
    let serverData = { ...formData, user: sessionStorage.getItem('user') }
    db.post('furniture', serverData, sessionStorage.getItem('loggedIn')).then(res => { 
      msgs.push({ msg: 'Furniture created !', class: 'alert-success' })
      allFurnitures.push({...serverData, _id:res._id})
      this.redirect('/')
      
    })
    
  } else { 
    this.redirect('/create');
  }
}

export function getProfile() {

	const viewData = { msgs , profileActive:true, loggedIn:isAuth()};
  let myFurnitures = allFurnitures.filter(fur => fur.user === sessionStorage.getItem('user'))
  viewData.myFurnitures = myFurnitures;

  this.loadPartials({
		navbar: "../views/partials/navbar.hbs",
		notifications: "../views/partials/notifications.hbs",
	}).then(function () {
    this.render("../views/app/profile.hbs", viewData).swap();
     clearStates(viewData);
	});
}

export function getDetails() { 

  const furniture = allFurnitures.find(item => item._id.toString() === this.params.id);

  if (furniture) { 
    let viewData = { ...furniture, loggedIn: isAuth(), msgs }
     this.loadPartials({
				navbar: "../views/partials/navbar.hbs",
				notifications: "../views/partials/notifications.hbs",
			}).then(function () {
				this.render("../views/app/details.hbs", viewData).swap();
				clearStates(viewData);
			});
  }
}


export function getDelete(){ 

  let id = this.params.id;
  db.delete('furniture', id, sessionStorage.getItem('loggedIn')).then(() => { 
    allFurnitures = allFurnitures.filter(fur => fur._id !== id);
    this.redirect('/profile')
  })

}

export function getEdit() {
  let id = this.params.id; 
  let furniture = allFurnitures.find(fur => fur._id === id)
  let viewData = { loggedIn: isAuth(), msgs, id: furniture._id, editMode:true , ...sharedData}

  if (Object.keys(sharedData).length > 1) { 
    viewData.maker.input = formData.maker;
    viewData.model.input = formData.model;
    viewData.year.input = formData.year;
    viewData.imageUrl.input = formData.imageUrl;
    viewData.desc.input = formData.desc;
    viewData.price.input = formData.price;
  } else { 
    viewData.maker = {input: furniture.maker}
    viewData.model = {input: furniture.model}
    viewData.year = {input: furniture.year}
    viewData.imageUrl = {input: furniture.imageUrl}
    viewData.desc = {input: furniture.desc}
    viewData.price = {input: furniture.price}
  }
  

   this.loadPartials({
			navbar: "../views/partials/navbar.hbs",
			notifications: "../views/partials/notifications.hbs",
		}).then(function () {
			this.render("../views/app/create.hbs", viewData).swap();
			clearStates(viewData);
		});
}

export function postEdit() {
  let { maker, model, year, desc, price, imageUrl, material, id } = this.params;
  formData = { maker, model, year, desc, price, imageUrl, material }
  
  let isValid = createValidation(formData)

  if (isValid) {
    let serverData = { ...formData, user: sessionStorage.getItem('user') }
    db.edit('furniture', id, serverData, sessionStorage.getItem('loggedIn')).then(res => {
      msgs.push({ msg: 'Furniture Updated!', class: 'alert-success' })
      
      let index = allFurnitures.findIndex(fur => fur._id === id)
      allFurnitures[index] = { ...serverData, _id: id }
      
      // allFurnitures = allFurnitures.filter(fur=> fur._id !==id)
      // allFurnitures.push({ ...serverData, _id: res._id })

      this.redirect('/profile')
      
    })
  } else { 
    this.redirect(`/edit/${id}`)
  }
}