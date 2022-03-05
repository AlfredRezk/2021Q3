import React, { useState} from 'react'

const Filter = (props) => {
  const [text, setText] = useState('');

  const filterHandler = (e) => {
  
		const filteredUsers = props.users.filter((user) =>
				user.name.toLowerCase().includes(e.target.value.toLowerCase())
		);

      if (filteredUsers.length === 0) {
        props.setUsers(props.users)
      } else {
        props.setUsers(filteredUsers);
      }
      setText(e.target.value);

   
        
  }

  return (
		<div>
			<input type="text" onChange={filterHandler} value={text} />
		</div>
	);
}

export default Filter