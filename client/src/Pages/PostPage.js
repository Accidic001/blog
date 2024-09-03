import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import "./PostPage.css";

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();  // Hook to get the navigate function

  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => response.json())
      .then(postInfo => setPostInfo(postInfo));
  }, [id]);

  function handleGoBack() {
    navigate(-1);  // Navigate back to the previous page
  }

  if (!postInfo) return '';

  return (
    <div className="post-page">
      <div className="page">
      <button onClick={handleGoBack}>Return to Home Page</button>
      <h1>{postInfo.title}</h1>
      <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
      <div className="author">by @{postInfo.author.username}</div>
      <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
      </div>
      <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </div>
    </div>
  );
}
