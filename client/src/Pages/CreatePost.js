import '../App.css';
import 'react-quill/dist/quill.snow.css';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../Components/Editor";
import './createPost.css';

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState(null);  // Set to null initially
  const [textContent] = useState('');  // For text-only posts
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState(null);  // For displaying errors

  async function createNewPost(ev) {
    ev.preventDefault();
    console.log('createNewPost triggered'); // Debugging
    
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);

    // Prioritize rich content if available
    if (content) {
      data.set('content', content);
    } else {
      data.set('content', textContent);
    }

    if (files && files.length > 0) {  // File is optional
      console.log('File selected:', files[0]); // Debugging
      data.set('file', files[0]);
    } 

    try {
      const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Post created successfully');
        setRedirect(true);
      } else {
        const errorText = await response.text();
        console.error('Failed to create post:', response.statusText, errorText);
        setError(`Failed to create post: ${response.statusText}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div id="createPost">
      <form  onSubmit={createNewPost}>
        <input 
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={ev => setTitle(ev.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Summary" 
          value={summary} 
          onChange={ev => setSummary(ev.target.value)} 
        />
        <input 
          type="file" 
          onChange={ev => setFiles(ev.target.files)} 
        />
        <Editor value={content} onChange={setContent} />
        {/* <textarea 
          placeholder="Or type your post here..." 
          value={textContent} 
          onChange={ev => setTextContent(ev.target.value)} 
          style={{ width: '100%', height: '100px', marginTop: '5px' }}
        /> */}
        <button type="submit" style={{ marginTop: '5px' }}>Create post</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}
