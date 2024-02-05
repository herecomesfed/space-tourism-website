const TabsContent = ({ destinations, activeTab }) => {
  return destinations.map((d, i) => {
    return (
      <div
        key={i}
        className={`destinations__content tab-content ${
          activeTab === i + 1 ? "active" : ""
        }`}
        data-tab={i}
      >
        <h2>{d.name}</h2>
        <p>{d.description}</p>

        <hr className="separator" />
        <div className="destinations__travel-info">
          <div className="destinations__distance">
            <h3>Avg. Distance</h3>
            <h4>3{d.distance}</h4>
          </div>
          <div className="destinations__travel-time">
            <h3>Est. Travel Time</h3>
            <h4>{d.travel}</h4>
          </div>
        </div>
      </div>
    );
  });
};

export default TabsContent;
