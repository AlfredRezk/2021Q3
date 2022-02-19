import './assets/workshop-styles.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Main from './components/Main';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';


function App() {
  
  const [posts, setPosts] = useState([])
  
  const fetchPosts = async () => { 
    const res = await fetch('http://localhost:8080/api/origami');
    let result = await res.json();
    //result =  result.map(p => ({...p, author: p.author.username}))
    setPosts(result);
    console.log(result)
  }

  useEffect(() => { 
    fetchPosts();
  }, [])
 


  return (
    <div className="App">
      <Navigation />
      <div className='Container'>
      <Aside/>
        <Main posts={ posts}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
