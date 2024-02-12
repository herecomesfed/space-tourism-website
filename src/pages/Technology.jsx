import { useEffect } from "react";
import data from "../../data/data.json";
import MediaText from "../components/MediaText/MediaText";

import PropTypes from "prop-types";

const Technology = ({ bodyClassPage }) => {
  const { technology } = data;

  useEffect(() => {
    document.body.dataset.page = bodyClassPage;
  }, [bodyClassPage]);

  return (
    <main>
      <section className="main-container">
        <h1 className="inner-page-heading breakout" data-index="03">
          Space Launch 101
        </h1>
        <MediaText bodyClassPage={bodyClassPage} data={technology} />
      </section>
    </main>
  );
};

Technology.propTypes = {
  bodyClassPage: PropTypes.string,
};

export default Technology;
