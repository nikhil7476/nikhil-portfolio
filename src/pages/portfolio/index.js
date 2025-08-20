import React from "react";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";

function Portfolio() {
  return (
    <>
      <MetaHead page="portfolio" />
      <Banner data={bannerData.portfolio} />
      <div>Portfolio</div>
    </>
  );
}

export default Portfolio;
