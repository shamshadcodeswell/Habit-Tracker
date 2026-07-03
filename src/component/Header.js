import { Link } from "react-router-dom";
import logo from "url:../../resources/app-logo.png";
const Header = () => {
  console.log(logo);
  return (
    <div className="header">
      <div className="brand">
        <img className="logo" alt="logo" src={logo}></img>
        <h2 className="Title">Habit Tracker</h2>
      </div>
      <div className="navigation-bar">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/week">Week</Link>
          </li>
          <li>
            <Link to="/month">Month</Link>
          </li>
          <li>
            <Link to="Analytics">Analytics</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
