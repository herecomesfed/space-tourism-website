import { useEffect } from "react";
import data from "../../data/data.json";
import MediaText from "../components/MediaText/MediaText";

import PropTypes from "prop-types";

const Crew = ({ bodyClassPage }) => {
  const { crew } = data;

  useEffect(() => {
    document.body.dataset.page = bodyClassPage;
  }, [bodyClassPage]);

  return (
    <main>
      <section className="main-container">
        <h1 className="inner-page-heading" data-index="02">
          Meet Your Crew
        </h1>
        <MediaText bodyClassPage={bodyClassPage} data={crew} />
      </section>
    </main>
  );
};

Crew.propTypes = {
  bodyClassPage: PropTypes.string,
};

export default Crew;
