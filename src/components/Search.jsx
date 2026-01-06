import { useState } from "react";

function Search(props) {
    const [search, setSearch] = useState("");
    
    const changeSearch = ()=>{
       props.onSearch(search)
    }

    const tapEnter =(e)=>{
        if (e.key === "Enter") {
            //key adalah bawaan dari react untuk melihat input dari pengguna
            changeSearch()
        }
    }

        return (
            <>
            <div>cari article : <input onChange={(e)=>setSearch(e.target.value)} onKeyDown={tapEnter}></input><button onClick={changeSearch}>cari</button></div>
            <small>ditemukan {props.jumlah} data dari kata {search}</small>
            </>
        )
}

export default Search;