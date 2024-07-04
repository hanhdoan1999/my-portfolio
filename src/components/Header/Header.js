// import Logo from "../../assets/images/logo-new.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";
import { Link } from 'react-router-dom';

const Header = ({isOn,toggleSwitch}) => {
  const menus = [
    { name: "Home", link: "./" },
    { name: "Project", link: "/projects" },
    { name: "Blog", link: "/blog" },
    // { name: "Add Blog", link: "/add-blog" },
  ];
  return (
    <header className="header-content">
      <div className="Logo">
        {/* <img src={Logo} alt="Logo" className="LogoImage"/> */}
      </div>
      <nav className="navbar">
        {menus.map((item, index) => (
          <Link to={`${item.link}`} key={index}>{item?.name}</Link>
        ))}
      </nav>
      <ToggleSwitch isOn={isOn} toggleSwitch={toggleSwitch}/>
    </header>
  );
};

export default Header;
