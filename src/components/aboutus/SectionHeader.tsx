import React from "react";

interface ISectionHeader {
  title: string;
  desc: string;
}

export default function SectionHeader({ title, desc }: ISectionHeader) {
  return (
    <div className="text-center  py-4 w-full">
      <p className="  text-base text-2xl md:text-5xl ">{title}</p>
      <p className=" text-medium font-lato text-description">{desc}</p>
    </div>
  );
}
