import { isAuth, sendMsg } from "../helper";

export function getHome() {

  const viewData = { loggedIn: isAuth() }

  if (allTeams.length !== 0) { 
    let team = allTeams.find(team => team.members._id === sessionStorage.getItem('user'))
    if (team) { 
      viewData.hasTeam = true;
      viewData.teamId = team._id;

    }
  }
  
  this.loadPartials({
    header: '../templates/common/header.hbs', 
    footer:'../templates/common/footer.hbs'
  }).then(function () { 
    this.render('../templates/home/home.hbs', viewData).swap();
  })
}

export function getAbout() { 
  const viewData = { loggedIn: isAuth() };
  this.loadPartials({
		header: "../templates/common/header.hbs",
		footer: "../templates/common/footer.hbs",
	}).then(function () {
		this.render("../templates/about/about.hbs", viewData).swap();
	});
}

export function getCatalogs() { 
  const viewData = { loggedIn: isAuth(), teams: allTeams }

  let teamMember; 
  if (allTeams.length >= 1) {
    let allMembers = [];
    allTeams.forEach(team => allMembers = allMembers.concat(team.members))

    teamMember = allMembers.find(member => member._id === sessionStorage.getItem('user'));
    if (teamMember) {
      viewData.hasNoTeam = false;
    } else {
      viewData.hasNoTeam = true;
    }

  } else { 
    viewData.hasNoTeam = true;
  }
  
  this.loadPartials({
		header: "../templates/common/header.hbs",
    footer: "../templates/common/footer.hbs",
    team: '../templates/catalog/team.hbs'
  }).then(function () { 
    this.render('../templates/catalog/teamCatalog.hbs', viewData).swap()
  })
}

export function getCreate() { 
  const viewData = { loggedIn: isAuth() };
   this.loadPartials({
			header: "../templates/common/header.hbs",
			footer: "../templates/common/footer.hbs",
			createForm: "../templates/create/createForm.hbs",
		}).then(function () {
			this.render("../templates/create/createPage.hbs", viewData).swap();
		});
}

export function postCreate() {
  let { name, comment } = this.params;
  if (!name) {
    sendMsg('error', 'Team name is required', 2);
    return
  }


  const teamData = {
    members: [{
      _id: sessionStorage.getItem('user'), 
      username: sessionStorage.getItem('username')
    }], 
    name, 
    comment, 
    creator: sessionStorage.getItem('user')
  }

  db.post('teams', teamData, null, { username: 'guest', password: 'guest' }).then(res => { 
    sendMsg('info', 'Team created Successfully !', 2);
    allTeams.push(res);
    this.redirect('/catalog')
  })

}

export function getDetails() { 
  let id = this.params.id; 
  const viewData = { loggedIn: isAuth() };
  let team = allTeams.find(team => team._id === id);

  if (team) { 
    viewData.members = team.members;
    viewData.name = team.name;
    viewData.comment = team.comment;
    viewData.isAuthor = team.creator === sessionStorage.getItem('user');
    viewData.isOnTeam = team.members.find(member => member.username === sessionStorage.getItem('username'))
    viewData.teamId = team._id
  }

   this.loadPartials({
			header: "../templates/common/header.hbs",
			footer: "../templates/common/footer.hbs",
			teamMember: "../templates/catalog/teamMember.hbs",
			teamControls: "../templates/catalog/teamControls.hbs",
		}).then(function () {
			this.render("../templates/catalog/details.hbs", viewData).swap();
		});

}

export function getEdit() { 
  let id = this.params.id;
  const viewData = { loggedIn: isAuth() };
  let team = allTeams.find((team) => team._id === id);
   if (team) {
			viewData.name = team.name;
			viewData.comment = team.comment;
			viewData.teamId = team._id;
		}

   this.loadPartials({
			header: "../templates/common/header.hbs",
			footer: "../templates/common/footer.hbs",
      editForm:'../templates/edit/editForm.hbs'
		}).then(function () {
			this.render("../templates/edit/editPage.hbs", viewData).swap();
		});
}

export function postEdit() { 
  let { name, comment, id } = this.params; 
  if (!name) { 
    sendMsg('error', 'Team name is required', 2)
    return 
  }

  // update the team
  let team = allTeams.find((team) => team._id === id);
  team.name = name; 
  team.comment = comment; 
  db.edit('teams', id, team, null, { username: 'guest', password: 'guest' }).then(res => { 
    sendMsg('info', 'Team updated Successfully !', 2);
    let teamIndex = allTeams.findIndex(t => t._id == id)
    allTeams[teamIndex] = team; 
    this.redirect('/catalog')
  })
}