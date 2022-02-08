
import TransactionItem from './components/app/TransactionItem/TransactionItem';
import TransactionItems from './components/app/TransactionItems/TransactionItems';
import Navbar from './components/UI/Navbar/Navbar';

function App() {

  const transactions = [
    {id:'t1', title:'Buy Lunch', amount: 35.99, date: new Date(2022, 0, 12), type:'expense'}, 
    {id:'t2', title:'Pay check', amount: 3500, date: new Date(2022, 2, 12), type:'income'}, 
    {id:'t3', title:'Gap shirt ', amount: 60.00, date: new Date(2022, 3, 12), type:'expense'}, 
  ]
  

  return (
		<div>
			<Navbar title="Transaction Tracker" />
			<div className="container">
        <TransactionItems transactions={ transactions}/>
			</div>
		</div>
	);
}

export default App;
