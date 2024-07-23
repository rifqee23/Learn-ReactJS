import postsData from '../posts.json'
import Article from '../components/Article';
import Search from '../components/Search';
import { useEffect, useState } from 'react';

function Homepage() {
    const [posts, setPosts] = useState(postsData);
    const [totalPosts, setTotalPosts] = useState(postsData.length);
    const [externalPosts, setExternalPosts] = useState([]);

    const onSearchChange = (value) => {
        const filterPosts = postsData.filter(item => item.title.toLocaleLowerCase().includes(value));
        setPosts(filterPosts);
        setTotalPosts(filterPosts.length);
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setExternalPosts(json));
            
    }, [])
    
    return(
        <>
            <h1>Simple Blog</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/> {/* deklarasi komponen dan set elemen yang ingin ditampilkan dari child */}
            {
                posts.map( (props, index) => (
                    <Article  key={index} {...props} />

                ))
            }
            <hr />
            <h2>External Posts</h2>
            {
                externalPosts.slice(0,10).map((item, index) => (
                    <ul key={index}>
                        <li>{item.title}</li>
                    </ul>
                ))
            }
        </>
    )
}

export default Homepage;