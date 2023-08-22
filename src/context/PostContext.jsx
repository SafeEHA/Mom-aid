import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const PostContext = createContext();
export default function PostProvider({ children }) {

    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()

    function handleSubmit(handlePost){
        fetch("http://localhost:3000/posts", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(handlePost)
        }).then((res) => {
            if(res.ok){
                setPosts([...posts, handlePost])
                navigate("/community")
            }
            console.log(res)
        })
    }
    useEffect(() => {
        fetch("http://localhost:3000/posts").then(
            (res) => res.json()
        ).then((data) => setPosts(data))
    }, []);
    // console.log(posts)
    return <PostContext.Provider value={{ posts, handleSubmit }}>{ children }</PostContext.Provider>;
}