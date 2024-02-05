import PropTypes from "prop-types";

const Tabs = ({
  bodyClassPage,
  destinations,
  activeTab,
  setActiveTab,
  handleToggleTabs,
}) => {
  return (
    <div className={`${bodyClassPage}__tabs tabs`} onClick={handleToggleTabs}>
      {destinations.map((d, i) => {
        return (
          <button
            key={i}
            className={`destinations__tab tab ${
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
  destinations: PropTypes.array,
};

export default Tabs;
