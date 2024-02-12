import TravelDetails from "./TravelDetails";

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

        {bodyClassPage === "destinations" && (
          <TravelDetails d={d} bodyClassPage={bodyClassPage} />
        )}
      </div>
    );
  });
};

export default TabsContent;
