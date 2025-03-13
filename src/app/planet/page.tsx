import EarthCanvas from "@/components/earth";
import StarsCanvas from "@/components/stars";
import React from "react";

const page = () => {
  return (
    <>
      <div className="h-svh w-full">
        <EarthCanvas />
      </div>
      <div className="w-full h-auto absolute inset-0 -z-10">
        <StarsCanvas />
      </div>
    </>
  );
};

export default page;
