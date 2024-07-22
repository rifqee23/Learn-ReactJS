import { useState } from "react";
function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = (event) => {
        setSearch(event.target.value);
        props.onSearchChange(event.target.value);
    }

    return (
        <>
            <div>Cari Artikel : <input type="search" name="search" id="search" onChange={onSearchChange} /></div>
            <small>Ditemukan 0 kata dengan pencarian kata {search}</small>
        </>
    )
}


export default Search;