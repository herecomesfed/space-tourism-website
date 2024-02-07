import Tabs from "./Tabs/Tabs";
import TabsContent from "./Tabs/TabsContent";
import PropTypes from "prop-types";
import { useState } from "react";

const MediaText = ({ bodyClassPage, data }) => {
  const [activeTab, setActiveTab] = useState(1);
  //   console.log(activeTab);
  const handleToggleTabs = function (e) {
    const currentTarget = e.target.closest(".tab");

    if (currentTarget) {
      if (activeTab === setActiveTab) return;
      setActiveTab(Number(currentTarget.dataset.tab));
    }
  };

  return (
    <div className={bodyClassPage}>
      <div className={`${bodyClassPage}__img img-will-change`}>
        <img
          src={data[activeTab - 1].images.webp.replace("./", "./src/")}
          alt="Moon"
        />
      </div>
      <div className={`${bodyClassPage}__texts`}>
        <Tabs
          bodyClassPage={bodyClassPage}
          data={data}
          activeTab={activeTab}
          handleToggleTabs={handleToggleTabs}
        />
        <TabsContent
          bodyClassPage={bodyClassPage}
          data={data}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
};

MediaText.propTypes = {
  bodyClassPage: PropTypes.string,
  data: PropTypes.array,
};

export default MediaText;
