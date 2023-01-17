import { NavLink } from "react-router-dom";

function CommunityPage() {
  return (
    <div className="CommunityPage">
      <div className="CommunityPage__container">
        <nav>
          <NavLink>Community</NavLink>
          <NavLink>Log In</NavLink>
          <NavLink>posts</NavLink>
          <NavLink>Article</NavLink>
        </nav>
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
              best positions and benefits to how to trouble-shoot problems,{" "}
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
            <img src="./assets/feeding-baby.png" alt="feeding baby" />
          </div>
        </div>
        <div className="CommunityPage__SideTab">
          <h2 className="SideTab__title">PREGNANCY</h2>

          <ul className="SideTab__list">
            <li>Pregnancy Due Date Calculator</li>
            <li>Labor and Delivery</li>
            <li>Pregnancy Week by Week</li>
            <li>Pregnancy Symptoms</li>
            <li>Morning Sickness</li>
            <li>Pregnancy Weight Gain Calculator</li>
            <li>Fetal Development</li>
            <li>Pregnancy Complications</li>
            <li>Screenings and Tests</li>
            <li>Preparing for Baby</li>
            <li>Baby Names</li>
            <li>Top Baby Names for Boys</li>
            <li>Top baby Names for girls</li>
            <li>Best Gender Neutral Names</li>
            <li>Chinese Gender Predictor</li>
            <li>Signs of Labor</li>
            <li>Braxton Hicks and False Labor</li>
            <li>Welcoming Your New Born</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CommunityPage;
