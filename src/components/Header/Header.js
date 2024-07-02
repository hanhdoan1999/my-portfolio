// import Logo from "../../assets/images/logo-new.png";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";

const Header = ({isOn,toggleSwitch}) => {
  const menus = [
    { name: "Home", link: "./" },
    { name: "Product", link: "Prouct" },
  ];
  return (
    <header className="header-content">
      <div className="Logo">
        {/* <img src={Logo} alt="Logo" className="LogoImage"/> */}
      </div>
      <nav className="navbar">
        {menus.map((item, index) => (
          <a href="/">{item?.name}</a>
        ))}
      </nav>
      <ToggleSwitch isOn={isOn} toggleSwitch={toggleSwitch}/>
    </header>
  );
};

export default Header;
