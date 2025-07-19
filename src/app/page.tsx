"use client";
import React from "react";
import ViewOne from "./components/ViewOne";
import ViewTwo from "./components/ViewTwo";

const Page = () => {
  return (
    <div className="relative bg-amber-50">
      <ViewOne />
      <ViewTwo />
    </div>
  );
};

export default Page;
