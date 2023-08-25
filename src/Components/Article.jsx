import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";
 

function Article() {
 const { id } = useParams()
 const { posts, handleLikes, likes } = useContext(PostContext);
 const post = posts.filter((post) => post.id == id);
 

return (
    <div className="CommunityPage__container">
        <h1>Article</h1>
    {post?.map((thePost) => {
        return (
            <div key ={id}>
                <h1>{thePost.title}</h1>
                <button
                style = {{ all: "unset"}}
                onClick={() =>{
                    const updatePost = {...thePost, likes: Number(thePost.likes + likes)};
                     console.log(updatePost)
                    handleLikes(id, updatePost);
                }}           
                >
                 {" "}
                ❤️ {thePost.likes + likes - 1}
                </button>
                <img src={thePost.image} style={{width:"100%", height: "500px",objectFit: "cover", borderRadius:"30px" }} alt=""/>
                <p>{thePost.content}</p>
                </div>
        );
    })}
    </div>
  );
}

export default Article;