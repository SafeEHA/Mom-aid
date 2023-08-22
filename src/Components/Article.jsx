import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../context/PostContext";


function Article() {
 const { id } = useParams()
 const { posts } = useContext(PostContext);
 const post = posts.filter((post) => post.id == id);
 console.log(post);
return (
    <div className="CommunityPage__container">
        <h1>Article</h1>
    {post.map((thePost) => {
        return (
            <div key ={id}>
                <h1>{thePost.title}</h1>
                <img src={thePost.image} style={{width:"100%", height: "500px",objectFit: "cover", borderRadius:"30px" }} alt=""/>
                <p>{thePost.content}</p>
                </div>
        );
    })}
    </div>
  );
}

export default Article;