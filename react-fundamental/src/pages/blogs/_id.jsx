import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>{posts?.title}</h2>
      <p>{posts?.body}</p>
    </>
  );
}

export default SinglePost;
