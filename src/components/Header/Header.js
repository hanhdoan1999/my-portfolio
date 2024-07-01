import Logo from "../../assets/images/hanhdth.png"; // Corrected path
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./Header.scss";

const Header = () => {
  const menus = [
    { name: "Home", link: "./" },
    { name: "Product", link: "Prouct" },
  ];
  return (
    <header className="header-content">
      <div className="Logo">
        <img src={Logo} alt="Logo" className="LogoImage"/>
      </div>
      <nav>
        {menus.map((item, index) => (
          <a href="/">{item?.name}</a>
        ))}
      </nav>
      <ToggleSwitch />
    </header>
  );
};

export default Header;
