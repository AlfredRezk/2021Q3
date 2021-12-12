const kinvey = new Kinvey("kid_ryNwWsM9F", "8a4311885b5c4715a2cee67476f70458");

let auth = {username:'guest', password:'guest'}
// kinvey.test(auth)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
  
// kinvey
//   .login(auth)
//   .then(token => {
//     console.log(token);
//     return kinvey.logout(token)
//   }).then(data => console.log(data))
//   .catch(err => console.log(err))

let user = {
  username: 'guest',
  password:'guest'
}

// kinvey.get('Posts', null, user)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

let post = {
  title: 'Best Post ever',
  body: 'There is nothing here'
}
// kinvey
//   .post('Posts', post, null, user)
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

// kinvey.signup(user)
// .then(token=> console.log(token)).catch(err=> console.log(err))

// kinvey.delete("Posts", "61b5462880d24200131906aa", null, user)
//   .then(res => console.log(res))
// .catch(err=> console.log(err))

kinvey
	.edit("Posts", "61b5466824c7390017e4b4e9", post, null, user)
	.then((res) => console.log(res))
	.catch((err) => console.log(err));