import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const posts = useLoaderData();
  return (
    <>
      <h2>{posts?.title}</h2>
      <p>{posts?.body}</p>
    </>
  );
}

export default SinglePost;
