import { useState } from "react";

const Accordion = ({ title, name, comment, time }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="icon__display">
        <li className="topicTitle">{title} </li>{" "}
        <div className="expand" onClick={() => setActive((a) => !a)}></div>
      </div>
      <div className="nameTag">
        <div className="nameLogo">{name[0].toUpperCase()}</div>
        <h6 className="posterName">By {name}</h6>
      </div>
      <div
        className="collapsible__content"
        style={active ? { display: "block" } : { display: "none" }}
      >
        <p className="topicComment">{comment}</p>
        <i>{time} minutes ago by {name}</i>
        <div className="icons__div">
          <div className="activity__icons">
            <div className="reply__icon"></div>
            <div className="like__icon"></div>
          </div>
          <aside>Open thread</aside>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Accordion;


