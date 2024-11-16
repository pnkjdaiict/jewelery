import React from "react";

export const SectionTitle = ({  title, align = "center", children }) => {
  return (
    <div className={`flex w-full flex-col mt-4 ${align === "left" ? "" : "items-center justify-center text-center"}`}>
      {/* {preTitle && (
        <div className="text-sm font-bold tracking-wider text-gold uppercase">
          {preTitle}
        </div>
      )} */}
      {title && (
        <h2 className="max-w-2xl mt-3 text-base font-baskervville text-3xl text-capitalize font-bold leading-snug tracking-tight   lg:leading-tight lg:text-4xl">
          {title}
        </h2>
      )}
      {children && (
        <p className="max-w-2xl py-2 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl">
          {children}
        </p>
      )}
    </div>
  );
};
