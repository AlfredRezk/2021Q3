const partials = [
  new Partial('./views/header.hbs', 'navbar', {title:' Users List App'})
]



fetch("https://randomuser.me/api/?results=500")
  .then(res => res.json())
  .then(users => { 
      const mainTemp = new Template('./views/template.hbs', { users: users.results}, '#output', partials)
    mainTemp.render()
  })
