import PropTypes from "prop-types";

const MediaTextImg = ({ bodyClassPage, data, activeTab }) => {
  const detectSize = (data, activeTab) => {
    return window.innerWidth < 768
      ? data[activeTab - 1].images.landscape.replace("./", "./src/")
      : data[activeTab - 1].images.portrait.replace("./", "./src/");
  };
  return (
    <div className={`${bodyClassPage}__img img-will-change`}>
      <img
        src={
          bodyClassPage !== "technology"
            ? data[activeTab - 1].images.webp?.replace("./", "./src/")
            : detectSize(data, activeTab)
        }
        alt={data[activeTab - 1].name}
      />
    </div>
  );
};

MediaTextImg.propTypes = {
  bodyClassPage: PropTypes.string,
  data: PropTypes.array,
  activeTab: PropTypes.number,
};

export default MediaTextImg;
