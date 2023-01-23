const HotTopics = ({ title, text, lists, image }) => {
  return (
    <>
      <div className="HotTopics">
        <div className="hotTopic__1">
          <h4 className="CommunityPage__heading1"> Post about {title}</h4>
          <p className="CommunityPage__text">{text}</p>
          <ul className="HotTopics__list">
            {lists.map((list) => (
              <li key={list}>{list}</li>
            ))}
          </ul>
          <button className="hotTopics__btn">More</button>
        </div>
        <div className="hotTopic__image">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default HotTopics;
