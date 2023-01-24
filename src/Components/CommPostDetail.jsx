
import { accordion } from "../data/accordion";
import Accordion from "./Accordion";
import CommunityNav from "./CommunityNav";
import CommunitySearch from "./CommunitySearch";

function CommPostDetail() {
  
  return (
    <div className="CommPostDetail">
      <CommunityNav />
      <div className="searchButton">
        <CommunitySearch />
      </div>
      <div>
        <h3>Post About Breastfeeding</h3>
        <hr />
        <ul>
          {accordion.map(post=>{
            const {title, name, comment, time}=post;
            return <Accordion title={title} name={name} comment={comment} time={time}/>
          })}
        </ul>
      </div>
    </div>
  );
}

export default CommPostDetail;
