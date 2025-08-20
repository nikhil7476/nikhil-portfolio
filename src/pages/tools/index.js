import React from "react";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";

function Tools() {
  return (
    <>
      <MetaHead page="tools" />
      <Banner data={bannerData.tool} />
      <div>Tools</div>
    </>
  );
}

export default Tools;
