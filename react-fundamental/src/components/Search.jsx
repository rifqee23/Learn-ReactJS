import { useState } from "react";
function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = (event) => {
        setSearch(event.target.value);
        props.onSearchChange(event.target.value); // untuk mengirim element child ke parent class
    }

    return (
        <>
            <div>Cari Artikel : <input type="search" name="search" id="search" onChange={onSearchChange} /></div>
            <small>Ditemukan {props.totalPosts} kata dengan pencarian kata {search}</small>
        </>
    )
}


export default Search;