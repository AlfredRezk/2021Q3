import logo from './logo.svg';
import './App.css';
import CompA from './components/CompA';
import AuthContext  from './components/AuthContext';

function App() {
  const auth = {auth:"Logged In"}

  const theme = {auth: 'theme auth'}
  return (
		<AuthContext.Provider value={auth}>
	    <CompA />
				
		</AuthContext.Provider>
	);
}

export default App;
