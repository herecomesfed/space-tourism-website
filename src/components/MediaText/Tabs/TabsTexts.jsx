import PropTypes from "prop-types";

const TabsTexts = ({ bodyClassPage, children }) => {
  return <div className={`${bodyClassPage}__texts`}>{children}</div>;
};

TabsTexts.propTypes = {
  bodyClassPage: PropTypes.string,
  children: PropTypes.any,
};

export default TabsTexts;
