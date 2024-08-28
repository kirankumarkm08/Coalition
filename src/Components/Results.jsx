import React from "react";
import Respiratory from "/public/Results/respiratory.svg";
import Temp from "/public/Results/temperature.svg";
import HeartBPM from "/public/Results/HeartBPM.svg";
import Image from "next/image";

const Results = ({ result }) => {
  const images = [Respiratory, Temp, HeartBPM];
  const colors = ["#E0F3FA", "#FFE6E9", "#FFE6F1"];
  const units = ["Respiratory Rate", "Temperature", "Heart Rate"];

  return (
    <div className="flex gap-5 mx-5">
      <div className="w-[228px] h-[242px] rounded-md flex flex-col  bg-[#E0F3FA] px-3 py-5 ">
        <Image src={Respiratory} />
        {Array.isArray() &&
          result.map((res, index) => (
            <>
              {index === 3 && (
                <div className="flex flex-col gap-2 text-2xl">
                  <div className="flex gap-3">
                    {res?.diagnosis_history?.respiratory_rate.value}
                    {res.name}
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
      <div className="w-[228px] h-[242px] rounded-md flex flex-col  bg-[#E0F3FA] px-3 py-5 ">
        <Image src={Temp} />
        {Array.isArray() &&
          result.map((res, index) => (
            <>
              {index === 3 && (
                <div className="flex flex-col gap-2 text-2xl">
                  <div className="flex gap-3">
                    {/* {res?.diagnosis_history?.respiratory_rate.value} */}
                    {res.name}
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
      <div className="w-[228px] h-[242px] rounded-md flex flex-col  bg-[#E0F3FA] px-3 py-5 ">
        <Image src={HeartBPM} />
        {Array.isArray() &&
          result.map((res, index) => (
            <>
              {index === 3 && (
                <div className="flex flex-col gap-2 text-2xl">
                  <div className="flex gap-3">
                    {/* {res?.diagnosis_history?.respiratory_rate.value} */}
                    {res.name}
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
};

export default Results;
