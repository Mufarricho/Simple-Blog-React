import { useState } from "react";
import postsData from "../posts.json"
import Article from "../components/Article";
import Search from "../components/Search"

function Homepage(){
    const [posts,setPosts] = useState(postsData)
    const onSearch = (value)=>{
        const postsFilter = postsData.filter((item)=>{
            return item.title.includes(value)
        });
        setPosts(postsFilter)
    }
    return(
        <>
        <h1>Simple Blog</h1>
        <Search onSearch={onSearch}/>
        {posts.map(({title,tags,date},index)=>(
            <Article {...{title,tags,date}} key={index}/>
        ))}
        </>
    )
}

export default Homepage;