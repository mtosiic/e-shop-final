import { Link } from "react-router-dom";

const FooterTabsItem = ({ value }) => {
  return (
    <Link to={value.toLowerCase()} className="footer-link-style">
      {value === "privacy"
        ? "Privacy Policy"
        : value === "terms"
        ? "Terms Of Service"
        : "Contact Us"}
    </Link>
  );
};

export default FooterTabsItem;
