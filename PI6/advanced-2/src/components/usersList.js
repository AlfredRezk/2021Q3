import React from 'react'

const UsersList = (props) => {

  return (
		<>
			{props.users.map((user) => (
				<li key={user.id}>{user.name}</li>
			))}
		</>
	);
}

export default UsersList