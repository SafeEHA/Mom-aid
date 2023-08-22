import { Link } from "react-router-dom";
// import LinesEllipsis from 'react-lines-ellipsis';
// import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

const HotTopics = ({ title, text, lists, image }) => {
  // const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis)
  return (
    <>
      <div className="HotTopics" >
        <div className="hotTopic__1" style={{
          width:"65%"
        }}>

          <h4>
            <Link className="CommunityPage__heading1" to="/article">
              {title}
            </Link>
          </h4>

          {/* <p className="CommunityPage__text">
          <ResponsiveEllipsis
              text={text}
              maxLine="3" // Number of lines to display
              ellipsis="..." // Ellipsis character(s)
              trimRight
              basedOn="words"
            />
          </p> */}
          {/* <ul className="HotTopics__list">
            {lists.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul> */}
          <button className="hotTopics__btn">More</button>
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
