import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>My Blog Post</h2>
      {posts.slice(0, 10).map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>- {item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
