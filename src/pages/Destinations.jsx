import { useEffect } from "react";
import data from "../../data/data.json";
import MediaText from "../components/MediaText/MediaText";

import PropTypes from "prop-types";

const Destinations = ({ bodyClassPage }) => {
  const { destinations } = data;

  useEffect(() => {
    document.body.dataset.page = bodyClassPage;
  }, [bodyClassPage]);

  return (
    <main>
      <section className="main-container">
        <h1 className="inner-page-heading" data-index="01">
          Pick Your Destination
        </h1>
        <MediaText bodyClassPage={bodyClassPage} data={destinations} />
      </section>
    </main>
  );
};

Destinations.propTypes = {
  bodyClassPage: PropTypes.string,
};

export default Destinations;
