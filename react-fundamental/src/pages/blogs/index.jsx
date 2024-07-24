import { useEffect, useState } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>My Blog Post</h2>
      {posts.slice(0, 10).map((item, index) => (
        <ul key={index}>
          <li>{item.title}</li>
        </ul>
      ))}
    </>
  );
}

export default Blog;
