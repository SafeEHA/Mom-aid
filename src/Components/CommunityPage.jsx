
import feedingBaby from "../assets/feeding-baby.png";
import CommunityNav from "./CommunityNav";
import CommunitySearch from "./CommunitySearch";
import CommunitySideTab from "./CommunitySideTab";

function CommunityPage() {
  return (
    <div className="CommunityPage">
      <div className="CommunityPage__container">
        <CommunityNav/>
        <div className="searchButton">
          <CommunitySearch/>
        </div>

        <p>
          Discover posts from popular topics and other topics from our community
          members. You can also start a new topic.
        </p>
      </div>
      <h1 className="CommunityPage__title1">Hot Topics</h1>
      <div className="CommunityPage__Content">
        <div className="HotTopics">
          <div className="hotTopic__1">
            <h2 className="CommunityPage__heading1">
              Post about Breastfeeding
            </h2>
            <p className="CommunityPage__text1">
              Everything you need to know about breastfeeding, from tips,
              <br />
              best positions and benefits to how to trouble-shoot problems,
              <br />
              breastfeed in public, pump and wean your babies.
            </p>
            <ul className="HotTopics__list">
              <li>Pumping</li>
              <li>Hurting Nipples!!!</li>
              <li>Supplementary Feeding at 2 Weeks</li>
              <li>Lactation Cookies</li>
              <li>Blood in Breastmilk</li>
            </ul>
            <button>More</button>
          </div>
          <div className="hotTopic__1__image">
            <img src={feedingBaby} alt="feeding baby" />
          </div>
        </div>
        <div className="CommunityPage__SideTab">
          <CommunitySideTab />
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
