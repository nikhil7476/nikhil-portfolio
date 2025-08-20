import React from "react";
import MetaHead from "@/components/MetaHead";
import Banner from "@/components/Banner";
import bannerData from "@/utils/bannerData";

function Contact() {
  return (
    <>
      <MetaHead page="contact" />
      <Banner data={bannerData.contact} />
      <div>Contact</div>
    </>
  );
}

export default Contact;
