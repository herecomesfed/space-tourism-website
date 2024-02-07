import PropTypes from "prop-types";

const Tabs = ({ bodyClassPage, data, activeTab, handleToggleTabs }) => {
  return (
    <div className={`${bodyClassPage}__tabs tabs`} onClick={handleToggleTabs}>
      {data.map((d, i) => {
        return (
          <button
            key={i}
            className={`${bodyClassPage}__tab tab ${
              activeTab === i + 1 ? "active" : ""
            }`}
            data-tab={i + 1}
            data-name={d.name}
          >
            {d.name}
          </button>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  bodyClassPage: PropTypes.string,
  data: PropTypes.array,
  activeTab: PropTypes.number,
  handleToggleTabs: PropTypes.func,
};

export default Tabs;
