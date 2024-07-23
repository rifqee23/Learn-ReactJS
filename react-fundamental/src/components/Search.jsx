import { useState } from "react";
function Search(props) {
    const [search, setSearch] = useState("");

    const onSearchChange = () => {
        props.onSearchChange(search); // untuk mengirim element child ke parent class
    }

    const searchKeydown = (e) => {
        if(e.key === 'Enter') {
            onSearchChange();
        }
    }
   

    return (
        <>
            <div>
                Cari Artikel : <input type="search" name="search" id="search" onChange={(e) => setSearch(e.target.value)} onKeyDown={searchKeydown} />
                <button onClick={onSearchChange}>Cari</button>
            </div>
            <small>Ditemukan {props.totalPosts} kata dengan pencarian kata {search}</small>
        </>
    )
}


export default Search;