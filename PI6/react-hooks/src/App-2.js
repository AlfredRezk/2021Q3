import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';

function App() {
	const [show, setShow] = useState(false);

	//   componentDidUpdate
	useEffect(() => {
		console.log("App did update");
	});

	// componentDidMount
	useEffect(() => {
		console.log("App did mount");
	}, []);

	// componentWillUnmount
	useEffect(() => {
		return () => {
			console.log("App un-mounted ");
		};
	}, []);

	return (
		<div className="App">
			<button onClick={() => setShow((prev) => !prev)}> Toggle</button>
			{show && (
				<Card className="bgBlue">
					<p>My Card</p>
				</Card>
			)}
		</div>
	);
}

export default App;
