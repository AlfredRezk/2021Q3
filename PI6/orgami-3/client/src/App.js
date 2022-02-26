import './assets/workshop-styles.css';
import Aside from './components/Aside';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom'
import Publications from './pages/Publications';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile'; 
import Share from './pages/Share'; 
import Error from './pages/Error'; 
import PostsContext from './context/Posts'
import AuthContext from './context/AuthContext';
import { getPosts} from './services';

function App() {
  const [posts, setPosts] = useState([]);
  const [isAuth, setIsAuth] = useState(localStorage.getItem('userData'));
  const navigate = useNavigate();

  useEffect(() => { 
   getPosts(setPosts)
  }, [])
 
  const updatePosts = () => { 
    getPosts(setPosts)
  }
  return (
		<AuthContext.Provider value={{ isAuth: isAuth, setIsAuth }}>
			<div className="App">
				<Navigation />
				<div className="Container">
					<Aside />
					<main className="Main">
						<PostsContext.Provider value={{ posts: posts, setPosts, updatePosts }}>
							<Routes>
								{!isAuth ? (
									<>
										<Route path="/" element={<Publications />} />
										<Route path="/login" element={<Login />} />
										<Route path="/register" element={<Register />} />
									</>
								) : (
									<>
										<Route path="/" element={<Publications />} />
										<Route path="/profile" element={<Profile />} />
										<Route path="/post" element={<Share />} />
									</>
								)}

								<Route path="*" element={!isAuth ? <Login /> : <Error />} />
							</Routes>
						</PostsContext.Provider>
					</main>
				</div>
				<Footer />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
