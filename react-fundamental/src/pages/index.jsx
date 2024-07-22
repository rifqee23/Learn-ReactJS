import postsData from '../posts.json'
import Article from '../components/Article';
import Search from '../components/Search';
import { useState } from 'react';

function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const onSearchChange = (value) => {
        const filterPosts = postsData.filter(item => item.title.toLocaleLowerCase().includes(value));
        setPosts(filterPosts);
    }
    
    return(
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange}/>
            {
                posts.map( (props, index) => (
                    <Article  key={index} {...props} />

                ))
            }
        </>
    )
}

export default Homepage;