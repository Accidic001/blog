import { formatISO9075 } from 'date-fns';
import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/IndexPage.css';

function Post({ title, summary, content, cover, author, createdAt, _id }) {
  console.log('Post data received:', { title, summary, content, cover, author, _id });

  // Determine the file extension
  const fileExtension = cover ? cover.split('.').pop().toLowerCase() : null;
  const isImage = fileExtension && ['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension);

  return (
    <div className='cards'>
      <div  className="post-card">
        <Link to={`/post/${_id}`}>
          <div className="post-card-header">
            <h2>{title}</h2>
            <p id='author' className="author">By {author?.username || 'Unknown author'}</p>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </div>
          {cover && isImage && <img src={`http://localhost:4000/${cover}`} alt={title} className="post-image" />}
        </Link>

        {cover && !isImage && (
          <a href={`http://localhost:4000/${cover}`} download className="file-link">
            Download {fileExtension.toUpperCase()} File
          </a>
        )}

        <div className="post-card-body">
          <p>{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
