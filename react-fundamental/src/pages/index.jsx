import { useState } from 'react';
import posts from '../posts.json'
import Article from '../components/Article';

function Homepage() {
    const [search, setSearch] = useState("");
    const changeSearch = event => {
        console.log(event.target.value);
        setSearch(event.target.value);
    };
    return(
        <>
            <h1>Simple Blog</h1>
            <div>Cari Artikel : <input type="search" name="search" id="search" onChange={changeSearch} /></div>
            <small>Ditemukan 0 kata dengan pencarian kata {search}</small>
            {
                posts.map( ({title, tags, date}, index) => (
                    <Article  key={index} {...{title, tags, date}} />

                ))
            }
        </>
    )
}

export default Homepage;