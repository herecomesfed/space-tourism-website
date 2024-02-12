import Tabs from "./Tabs/Tabs";
import TabsContent from "./Tabs/TabsContent";
import MediaTextImg from "./Tabs/MediaTextImg";
import TabsTexts from "./Tabs/TabsTexts";
import PropTypes from "prop-types";
import { useState } from "react";

const MediaText = ({ bodyClassPage, data }) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleToggleTabs = function (e) {
    const currentTarget = e.target.closest(".tab");

    if (currentTarget) {
      if (activeTab === setActiveTab) return;
      setActiveTab(Number(currentTarget.dataset.tab));
    }
  };

  return (
    <div
      className={`${bodyClassPage} ${
        bodyClassPage === "technology" ? "full-width" : ""
      }`}
    >
      <MediaTextImg
        bodyClassPage={bodyClassPage}
        data={data}
        activeTab={activeTab}
      />
      <TabsTexts bodyClassPage={bodyClassPage}>
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
      </TabsTexts>
    </div>
  );
};

MediaText.propTypes = {
  bodyClassPage: PropTypes.string,
  data: PropTypes.array,
};

export default MediaText;
