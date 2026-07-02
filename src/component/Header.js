import logo from "url:../../resources/app-logo.png";
const Header = () => {
  console.log(logo);
  return (
    <div className="header">
      <div className="brand">
        <img className="logo" alt="logo" src={logo}></img>
        <h1 className="Title">Habit Tracker</h1>
      </div>
      <div className="navigation-bar">
        <ul className="nav-items">
          <li>Home</li>
          <li>Week</li>
          <li>Month</li>
          <li>Analytics</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
