import feedingBaby from "../assets/feeding-baby.png";

const HotTopics = ({ title, text, lists }) => {
  return (
    <>
      <div className="HotTopics">
        <div className="hotTopic__1">
          <h4 className="CommunityPage__heading1">{title}</h4>
          <p className="CommunityPage__text">
            {text}
          </p>
          <ul className="HotTopics__list">
        {lists.map(list=><li key={list}>{list}</li>)}
           
          </ul>
          <button>More</button>
        </div>
        <div className="hotTopic__1__image">
          <img src={feedingBaby} alt="feeding baby" />
        </div>
      </div>
    </>
  );
};

export default HotTopics;
