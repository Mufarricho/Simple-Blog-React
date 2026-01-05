import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");
    const changeSearch = (e)=>{
        setSearch(e.target.value)
        props.onSearch(e.target.value)    
    }
        return (
            <>
            <div>cari article : <input onChange={changeSearch}></input></div>
            <small>ditemukan {props.count} data dari kata {search}</small>
            </>
        )
}

export default Search;