import React from "react";

interface ISectionHeader {
  title: string;
  desc: string;
}

export default function SectionHeader({ title, desc }: ISectionHeader) {
  return (
    <div className="text-center  py-4 w-full">
      <p className="font-jost text-base text-lg md:text-4xl ">{title}</p>
      <p className=" text-medium font-lato text-description">{desc}</p>
    </div>
  );
}
