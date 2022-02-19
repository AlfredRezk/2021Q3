import { Link, Routes, Route, Outlet} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Products from './Products';
import Navbar from './Navbar';
import Product from './Product';

function App() {
  return (
	
			<div className="App">
			<h1>My App </h1>
      <Navbar />
      <Routes>
    
        <Route path="/home" element={ <Home/>}/>
        <Route path="/about" element={ <About />}/>
        <Route path="/products" element={ <Products /> }>  
          <Route path=":product" element={ <Product/>}/>
        </Route>
      </Routes>

			</div>
	);
}

export default App;
