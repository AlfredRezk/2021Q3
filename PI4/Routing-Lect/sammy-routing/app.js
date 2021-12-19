
const app = Sammy('#root', function () { 
// Tell sammy to use hbs and what is extension of hbs files
  this.use('Handlebars', 'hbs');

  // Home page  
  this.get('/', function () { 
    // load any partials => this.loadPartials()  <-async
    // render the template => this.render()
    // Change the DOM content => swap()

    this.loadPartials({ navbar: './views/navbar.hbs' })
      .then(function (res) {
        this.render('./views/template.hbs', {title:'Home Page'}).swap()
       })
  })

  // About Page 
  this.get('/about', function () {
        this.loadPartials({ navbar: './views/navbar.hbs' })
					.then(function () {
						this.render("./views/template.hbs", { title: "About Page" }).swap();
					})
					.catch((err) => console.log(err));
   })

  // Contact Page 
  this.get('/contact', function () { 
        this.loadPartials({ navbar: "views/navbar.hbs" }).then(function () {
					this.render("./views/template.hbs", { title: "Contact Page" }).swap();
				});
  })

  // products
  this.get('/product/:prodId', function () { 
    console.log(this.params.prodId)
    this.loadPartials({ navbar: './views/navbar.hbs' }).then(function () { 
      this.render('./views/template.hbs', {title:'Product Page'}).swap()
    })
  })
})


app.run('/')