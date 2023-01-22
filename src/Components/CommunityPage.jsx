import { useState } from "react";
import { hotTopic } from "../data/hotTopic";
import { moreTopic } from "../data/moreTopic";
import CommunityNav from "./CommunityNav";
import CommunitySearch from "./CommunitySearch";
import CommunitySideTab from "./CommunitySideTab";
import HotTopics from "./HotTopics";
import MoreTopics from "./MoreTopics";

function CommunityPage() {
  const [search, setSearch] = useState("");
  const filteredHotTopics = hotTopic.filter((topic) => {
    return topic.title.toLowerCase().includes(search.toLowerCase());
  });

  const filteredMoreTopics = moreTopic.filter((topic) => {
    return topic.title.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="CommunityPage">
      <CommunityNav />
      <div className="CommunityPage__container">
        <div className="searchButton">
          <CommunitySearch search={search} setSearch={setSearch} />
        </div>

        <h3 className="CommunityPage__description">
          Discover posts from popular topics and other topics from our community
          <br />
          members. You can also start a new topic.
        </h3>

        <h3 className="CommunityPage__title1">Hot Topics</h3>
        <div className="CommunityPage__Content">
          <div className="hotTopics__container">
            {filteredHotTopics.map((topic, i) => (
              <HotTopics
                key={i}
                title={topic.title}
                text={topic.text}
                lists={topic.lists}
                image={topic.image}
              />
            ))}

            <h3 className="CommunityPage__title2">More Topics</h3>
            <div className="moreTopics__container">
              {filteredMoreTopics.map((topic, i) => (
                <MoreTopics key={i} title={topic.title} />
              ))}
            </div>
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
