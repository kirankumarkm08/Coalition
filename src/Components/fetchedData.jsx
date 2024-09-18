"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import ParientDetails from "./ParientDetails";
import Diagnosticlist from "@/Components/Diagnosticlist";

const FetchedData = ({ state }) => {
  return (
    <div className="w-[350px] h-[1054px] overflow-auto bg-white rounded-2xl  my-10  px-2 py-5 hidden xl:inline-block">
      <input
        type="search"
        placeholder="Search ...."
        className="w-full py-2 px-2"
      />
      <div className="my-5   flex flex-col gap-2  h-[40px] text-sm ">
        {}
        {Array.isArray(state) &&
          state?.map((state, key) => (
            <div className="">
              <div className="flex items-center gap-2 hover:bg-black/5">
                <Image
                  src={state?.profile_picture}
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                  alt={state.name}
                />
                <div
                  key={key}
                  className="flex  flex-col  items-start w-full h-full   "
                >
                  <h2 className="">{state.name}</h2>
                  <div className="flex">
                    <h2>{state.gender}</h2>,<h2>{state.age}</h2>
                  </div>
                </div>
              </div>
            </div>
          ))}{" "}
      </div>
    </div>
  );
};

export default FetchedData;
