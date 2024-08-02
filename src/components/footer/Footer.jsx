import Footertabs from "./FooterTabs";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container container d-flex align-items-center justify-content-between">
        <span>© 2024 E-Shop</span>
        <div className="footer-tabs">
          <Footertabs />
        </div>
      </div>
    </div>
  );
};

export default Footer;
