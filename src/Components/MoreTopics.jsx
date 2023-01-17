import feedingBaby from "../assets/feeding-baby.png";

const MoreTopics = ({ title, text, lists }) => {
  return (
    <>
      <div className="MoreTopics">
        <div className="moreTopic__1">
          <h4 className="CommunityPage__heading1">{title}</h4>
          <p className="CommunityPage__text">
            {text}
          </p>
          <ul className="MoreTopics__list">
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

export default MoreTopics;
