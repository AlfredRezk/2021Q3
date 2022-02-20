import './assets/workshop-styles.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import Publications from './pages/Publications';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile'; 
import Share from './pages/Share'; 
import Error from './pages/Error'; 
import PostsContext from './context/Posts'


function App() {
  const [posts, setPosts] = useState([])
  const fetchPosts = async () => { 
    const res = await fetch('http://localhost:8080/api/origami');
    let result = await res.json();
    setPosts(result);
    console.log(result)
  }

  useEffect(() => { 
    fetchPosts();
  }, [])
 
  return (
		<div className="App">
			<Navigation />
			<div className="Container">
				<Aside />
				<main className="Main">
          <PostsContext.Provider value={ { posts: posts } }>
						<Routes>
							<Route path="/" element={<Publications />} />
							<Route path="/login" element={<Login />} />
							<Route path="/register" element={<Register/>} />
							<Route path="/profile" element={<Profile />} />
							<Route path="/post" element={<Share/>} />
							<Route path="*" element={<Error />} />
						</Routes>
					</PostsContext.Provider>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default App;
