import './assets/workshop-styles.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className='Container'>
      <Aside/>
      <Main/>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
