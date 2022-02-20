import React, { useContext} from 'react';
import Posts from '../components/Posts'
import PostsContext from "../context/Posts";
const Profile = () => {

  const { posts } = useContext(PostsContext);
  const latestThree = posts.slice(-3)
  return (
		<div className="Profile">
			<img
				src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
				alt="User pic"
      />
      <div className="personal-info">
        <p> <span>Email:</span> someone@someday.gg </p>
        <p> <span>Posts: </span> 9 </p>
      </div>
      <div>
        <h2>3 of your recent posts</h2>
        <Posts posts={ latestThree.reverse()}/>
      </div>
		</div>
	);
}

export default Profile