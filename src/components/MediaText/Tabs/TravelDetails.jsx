import PropTypes from "prop-types";

const TravelDetails = ({ d, bodyClassPage }) => {
  return (
    <>
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
    </>
  );
};

TravelDetails.propTypes = {
  bodyClassPage: PropTypes.string,
  d: PropTypes.any,
};

export default TravelDetails;
