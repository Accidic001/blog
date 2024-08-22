import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Post from '../Components/Post';
import { UserContext } from '../UserContext'; // Import UserContext
import './IndexPage.css'; // Import the CSS file

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  const [showUserPosts, setShowUserPosts] = useState(false);
  const { userInfo } = useContext(UserContext); // Access userInfo from context

  useEffect(() => {
    fetchPosts(); // Fetch all posts by default when the component mounts
  }, []);

  // Function to fetch all posts
  async function fetchPosts() {
    try {
      const response = await fetch('http://localhost:4000/post', {
        credentials: 'include', // Include cookies for authentication if needed
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Fetched posts:', data); // Confirm data in console
        setPosts(data); // Update state with fetched posts
        setShowUserPosts(false); // Indicate that all posts are shown
      } else {
        console.error('Failed to fetch posts:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  // Function to fetch only the logged-in user's posts
  async function fetchUserPosts() {
    try {
      const token = localStorage.getItem('token'); // Get the stored token

      const response = await fetch('http://localhost:4000/user-posts', {
        credentials: 'include', // Include cookies for authentication
        headers: {
          'Authorization': `Bearer ${token}`, // Send the token with the request
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Fetched user posts:', data); // Confirm data in console
        setPosts(data); // Update state with fetched user posts
        setShowUserPosts(true); // Indicate that user posts are shown
      } else {
        console.error('Failed to fetch user posts:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching user posts:', error);
    }
  }

  // Handler for toggling between showing all posts and user posts
  function handleTogglePosts() {
    if (showUserPosts) {
      fetchPosts();
    } else {
      fetchUserPosts();
    }
  }

  return (
    <div className="index-page">
      <div className='headers'>
        {userInfo?<><Link to="/" className="home-button">Home</Link> {/* Add Home button here */}
        <Link to="/create" className="create-new-post-button">Create new post</Link> {/* Right-aligned button */}</>:
        <div className='anouncer'>Login or Register to upload your post</div>}
      </div>
      <h1>{showUserPosts ? 'Your Posts' : 'Latest Posts'}</h1>
      <div className="button-container">
        <div className="left-buttons">
          <button 
            onClick={handleTogglePosts} 
            className="toggle-posts-button"
            disabled={!userInfo} // Disable button if not logged in
          >
            {showUserPosts ? 'Show All Posts' : 'Show My Posts'}
          </button>
          
        </div>
        
      </div>
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post._id} {...post} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}