import React from "react";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";

function Portfolio() {
  return (
    <>
      <Banner data={bannerData.portfolio} />
      <MetaHead page="portfolio" />
      <div>Portfolio</div>
    </>
  );
}

export default Portfolio;
