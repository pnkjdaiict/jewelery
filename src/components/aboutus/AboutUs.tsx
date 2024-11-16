"use client";

import Discover from "./Discover";
import SectionHeader from "./SectionHeader";
import Whyus from "./Whyus";

function About() {
  return (
    <div className="mt-24   bg-pink-50 md:px-40 ">
      <SectionHeader
        title={"JeweleryHub.com"}
        desc={"continue shoppping to end"}
      />
      <Whyus />
      <Discover />
    </div>
  );
}

export default About;
