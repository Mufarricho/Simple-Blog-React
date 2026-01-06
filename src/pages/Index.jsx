import { useState,useEffect } from "react";
import postsData from "../posts.json"
import Article from "../components/Article";
import Serch from "../components/Search"

function Homepage(){
    const [posts,setPosts] = useState(postsData)
    const [totalPosts,setTotalPosts]= useState(0)
    const [externalPosts,setExternalPosts]=useState([])

    const onSearch = (value)=>{
        const postsFilter = postsData.filter((item)=>{
            return item.title.includes(value)
        });
        setPosts(postsFilter)
        setTotalPosts(postsFilter.length)
    }

    useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL)
      .then(response => response.json())
      .then(json => setExternalPosts(json))
    },[])

    return(
        <>
        <div>
            <h1>Simple Blog</h1>
        <Serch onSearch={onSearch} jumlah={totalPosts}/>
        {posts.map(({title,tags,date,isNew},index)=>(
            <Article {...{title,tags,date,isNew}} key={index}/>
        ))}
        </div>
        <div>
        {externalPosts.map((data, index )=>{
            return (
                <div key={index}>
                    <span>{data.id}. -{data.title}</span>
                    <br/>
                </div>
            )
        })}
        </div>        
        </>
    )
}
export default Homepage;