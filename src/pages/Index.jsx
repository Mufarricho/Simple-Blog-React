import { useState } from "react";
import postsData from "../posts.json"
import Article from "../components/Article";
import Serch from "../components/Search"

function Homepage(){
    const [posts,setPosts] = useState(postsData)
    const [totalPosts,setTotalPosts]= useState(0)

    const onSearch = (value)=>{
        const postsFilter = postsData.filter((item)=>{
            return item.title.includes(value)
        });
        setPosts(postsFilter)
        setTotalPosts(postsFilter.length)
    }
    return(
        <>
        <h1>Simple Blog</h1>
        <Serch onSearch={onSearch} jumlah={totalPosts}/>
        {posts.map(({title,tags,date,isNew},index)=>(
            <Article {...{title,tags,date,isNew}} key={index}/>
        ))}
        </>
    )
}
export default Homepage;