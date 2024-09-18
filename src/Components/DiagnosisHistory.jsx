"use client";

import React from "react";
import Diagnosticlist from "./Diagnosticlist";
import Results from "@/Components/Results";
import Chart from "@/Components/Chart";

const DiagnosisHistory = ({ items }) => {
  return (
    <div className="w-[770px]">
      <div className="max-w-[766px] bg-white h-fit py-5 rounded-3xl my-10 mx-5  overflow-hidden">
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
