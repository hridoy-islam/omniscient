import React from "react";
import Settings from "../../_components/Settings/Settings";
import getSettings from "@/app/actions/getSettings";

const page = async () => {
  const settingsData = await getSettings();
  // console.log("settings data", settingsData?.data);
  return (
    <div>
      <Settings settingsData={settingsData?.data} />
    </div>
  );
};

export default page;
