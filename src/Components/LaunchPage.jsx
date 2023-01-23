import { Link } from "react-router-dom";

function LaunchPage() {
  return (
    <div className="launchPage">
      <div>
        <h1 className="launchPage__title">MOMAID</h1>
        <p className="launchPage__catchphrase">
          Let’s hold your hands through this life changing journey called
          <span className="launchPage__motherhood"> Motherhood.</span>{" "}
        </p>
        <Link to="/login" className="launchPage__link">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default LaunchPage;
