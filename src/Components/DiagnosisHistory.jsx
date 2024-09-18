"use client";

import React from "react";
import Diagnosticlist from "./Diagnosticlist";
import Results from "@/Components/Results";
import Chart from "@/Components/Chart";

const DiagnosisHistory = ({ items }) => {
  return (
    <div className="min-w-0  md:w-[500px] lg:w-[770px] ml-10">
      <div className=" bg-white h-fit py-5 rounded-3xl my-10 mx-5  ">
        <h1 className="flex justify-start capitalize font-bold text-[30px] px-10 py-2">
          Diagnosis History
        </h1>
        <div className="">
          <Chart items={items} />
        </div>
        <div className="">
          <div className="">
            <Results result={items} />
          </div>
        </div>
      </div>
      <Diagnosticlist list={items} />
    </div>
  );
};

export default DiagnosisHistory;
