const TabsContent = ({ bodyClassPage, data, activeTab }) => {
  return data.map((d, i) => {
    return (
      <div
        key={i}
        className={`${bodyClassPage}__content tab-content ${
          activeTab === i + 1 ? "active" : ""
        }`}
        data-tab={i}
      >
        {/* <h3>{d.role}</h3> */}
        {d.role && <h3>{d.role}</h3>}
        <h2>{d.name}</h2>
        <p>{d.description || d.bio}</p>

        <hr className="separator" />
        <div className={`${bodyClassPage}__travel-info`}>
          <div className={`${bodyClassPage}__distance`}>
            <h3>Avg. Distance</h3>
            <h4>{d.distance}</h4>
          </div>
          <div className={`${bodyClassPage}__travel-time`}>
            <h3>Est. Travel Time</h3>
            <h4>{d.travel}</h4>
          </div>
        </div>
      </div>
    );
  });
};

export default TabsContent;
