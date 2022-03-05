
import './App.css';
import Card from './components/Card/Card';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Filter from './components/Filter';
import UsersList from './components/usersList';
import ErrorBoundry from './components/ErrorBoundry';
import MyComp from './components/MyComp';

const initalUsers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Mike smith' },
  { id: 3, name: 'Sally Doe' },
]

function App() {
  const [show, setShow] = useState(false)
  const [users, setUsers] = useState(initalUsers);
  const [error, setError] = useState('');

  const closeModal = () => { 
    setShow(false);
  }


  return (
		<>
			{show && (
				<Modal onClose={closeModal}>
					<p>My Card</p>{" "}
				</Modal>
			)}
			<button onClick={() => setShow((prev) => !prev)}>
				{show ? "Hide" : "Show "}
			</button>
			<ErrorBoundry>
				{/* <MyComp/> */}
				<Filter users={users} setUsers={setUsers} />
			</ErrorBoundry>
				<UsersList users={users} />
	
		</>
	);
}

export default App;
