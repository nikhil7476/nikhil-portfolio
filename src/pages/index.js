import React from "react";
import MetaHead from "@/components/MetaHead";
import HomeBanner from "@/components/HomeBanner";

function Home() {
  return (
    <>
      <MetaHead page="home" />
      <section>
        <HomeBanner />
      </section>
      <div>Home</div>
    </>
  );
}

export default Home;
