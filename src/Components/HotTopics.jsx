import { Link, Navigate, useNavigate } from "react-router-dom";

const HotTopics = ({ title, content, lists, image, id }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="HotTopics" >
        <div className="hotTopic__1" style={{
          width:"65%"
        }}>

          <h4>
            <Link className="CommunityPage__heading1" to={`/article/${id}`}>
              {title}
            </Link>
          </h4>
          <ul className="HotTopics__list">
            {lists?.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
          <button className="hotTopics__btn"
          onClick={() => { navigate(`/article/${id}`)} }
          >More</button>
        </div>
        <div className="hotTopic__image">
          <img src={image} alt="" style={{
            width:"250px",
            objectFit:"cover",
            objectPosition:"center"
          }}/>
        </div>
      </div>
    </>
  );
};

export default HotTopics;
