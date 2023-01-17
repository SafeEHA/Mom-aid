import { hotTopic } from "../data/hotTopic";
import CommunityNav from "./CommunityNav";
import CommunitySearch from "./CommunitySearch";
import CommunitySideTab from "./CommunitySideTab";
import HotTopics from "./HotTopics";

function CommunityPage() {
  return (
    <div className="CommunityPage">
      <CommunityNav />
      <div className="CommunityPage__container">
        <div className="searchButton">
          <CommunitySearch />
        </div>

        <h3 className="CommunityPage__description">
          Discover posts from popular topics and other topics from our community
          <br />
          members. You can also start a new topic.
        </h3>

        <h3 className="CommunityPage__title1">Hot Topics</h3>
        <div className="CommunityPage__Content">
          <div className="hotTopics__container">
            {hotTopic.map((topic, i) => (
              <HotTopics
                key={i}
                title={topic.title}
                text={topic.text}
                lists={topic.lists}
              />
            ))}
          </div>
          <div className="CommunityPage__SideTab">
            <CommunitySideTab />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
