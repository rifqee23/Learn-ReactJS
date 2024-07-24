import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(postsData.length);

  const onSearchChange = (value) => {
    const filterPosts = postsData.filter((item) =>
      item.title.toLocaleLowerCase().includes(value)
    );
    setPosts(filterPosts);
    setTotalPosts(filterPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />{" "}
      {/* deklarasi komponen dan set elemen yang ingin ditampilkan dari child */}
      {posts.map((props, index) => (
        <Article key={index} {...props} />
      ))}
    </>
  );
}

export default Homepage;
