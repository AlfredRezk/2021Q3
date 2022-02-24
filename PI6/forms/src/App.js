import './App.css';
import Video from './videoPlayer/Video';
import { collection, doc, getDocs} from 'firebase/firestore'; 
import db from './firebase';
import { useEffect , useState} from 'react';

function App() {

  const [videos, setVideos] = useState([])
  const colRef = collection(db, 'videos')

  useEffect(() => { 
    fetchVideos()
  }, [])

  const fetchVideos = async() => { 
    const result = await getDocs(colRef);
    const data = result.docs.map(item => item.data())
    
    setVideos([...data]);
  }

  return (
    <div className="App">
    <img src={ videos[0].background}/>
     <Video video={videos[0]}/>
    </div>
  );
}

export default App;
