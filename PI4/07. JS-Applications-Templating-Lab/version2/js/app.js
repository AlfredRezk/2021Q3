const partials = [new Partial('./views/header.hbs', 'appTitle', { title: 'My Contacts' })]

const mainTemp = new Template("./views/main.hbs", { usersContacts: contacts }, '#contacts', partials);

mainTemp.render();

function toggleDetails(id) { 
  document.getElementById(id).classList.toggle('show')
}