import FooterTabsItem from "./FooterTabsItem";

const Footertabs = () => {
  return (
    <div className="footer-tabs-wrapper">
      <FooterTabsItem value="privacy" />
      <FooterTabsItem value="terms" />
      <FooterTabsItem value="contact" />
    </div>
  );
};

export default Footertabs;
