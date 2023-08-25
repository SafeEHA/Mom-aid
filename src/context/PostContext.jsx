import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const PostContext = createContext();
export default function PostProvider({ children }) {

    const [posts, setPosts] = useState([]);
    const [likes, setLikes] = useState(1)
    const navigate = useNavigate()

    function handleLikes(id, post){
        setLikes(likes + 1)
        console.log(likes)
        fetch(`http://localhost:3000/posts/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(post)
        });
        console.log(post)
    }
    function handleSubmit(handlePost){
        fetch("http://localhost:3000/posts", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(handlePost)
        }).then((res) => {
            if(res.ok){
                setPosts((prevPost) => [...prevPost, handlePost])
                navigate("/community")
                window.location.reload
            }
        });
    }
    useEffect(() => {
        fetch("http://localhost:3000/posts").then(
            (res) => res.json()
        ).then((data) => setPosts(data))
    }, [setPosts]);
    // console.log(posts)
    return <PostContext.Provider value={{ posts, handleSubmit, handleLikes, likes }}>{ children }</PostContext.Provider>;
}