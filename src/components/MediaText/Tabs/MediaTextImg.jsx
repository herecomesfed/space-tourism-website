import PropTypes from "prop-types";

const MediaTextImg = ({ bodyClassPage, data, activeTab }) => {
  return (
    <div className={`${bodyClassPage}__img img-will-change`}>
      <picture>
        {bodyClassPage === "technology" && (
          <>
            <source
              srcSet={data[activeTab - 1].images.portrait.replace(
                "./",
                "./src/"
              )}
              media="(min-width:768px)"
            />
            <source
              srcSet={data[activeTab - 1].images.landscape.replace(
                "./",
                "./src/"
              )}
            />
          </>
        )}
        <img
          src={data[activeTab - 1].images.webp?.replace("./", "./src/")}
          alt={data[activeTab - 1].name}
        />
      </picture>
    </div>
  );
};

MediaTextImg.propTypes = {
  bodyClassPage: PropTypes.string,
  data: PropTypes.array,
  activeTab: PropTypes.number,
};

export default MediaTextImg;
