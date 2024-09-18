import React from "react";
import Respiratory from "/public/Results/respiratory.svg";
import Temp from "/public/Results/temperature.svg";
import HeartBPM from "/public/Results/HeartBPM.svg";
import Image from "next/image";

const Results = ({ result }) => {
  return (
    <div className="flex gap-3 mx-2 ">
      <div className="w-[228px] h-[242px] rounded-md flex flex-col  bg-[#E0F3FA] px-3 py-5 ">
        <Image src={Respiratory} alt="Respiratory" />
        {Array.isArray(result) &&
          result.map((res, index) => (
            <>
              {index === 3 && (
                <div
                  className="flex flex-col gap-2 text-2xl justify-center"
                  key={index}
                >
                  <div className="flex gap-3">
                    {res?.diagnosis_history.map((i, index) => (
                      <div className="my-2" key={index}>
                        {index === 0 && (
                          <div className="">
                            <h1 className="text-[20px]">RespiratoryRate </h1>
                            <div className="flex gap-3 font-bold my-1">
                              {i.respiratory_rate.value} <h1>Bhp</h1>
                            </div>
                            <h1 className="font-normal text-[20px]">
                              {i.respiratory_rate.levels}
                            </h1>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
      <div className="w-[228px] h-[242px] rounded-md flex flex-col  bg-[#FFE6E9] px-3 py-5 ">
        <Image src={Temp} />
        {Array.isArray(result) &&
          result.map((res, index) => (
            <>
              {index === 3 && (
                <div
                  className="flex flex-col gap-2 text-2xl justify-center w-full"
                  key={index}
                >
                  <div className="flex gap-3">
                    {res?.diagnosis_history.map((i, index) => (
                      <div className="my-2" key={index}>
                        {index === 0 && (
                          <div className="">
                            <h1 className="text-[20px]">Temparature </h1>
                            <div className="flex gap-3 font-bold my-1">
                              <div className="">
                                {i.temperature.value} <sup>o</sup> F
                              </div>
                            </div>
                            <h1 className="font-normal text-[20px] w-[200px]">
                              {i.temperature.levels}
                            </h1>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
      <div className="w-[228px] h-[242px] rounded-md flex flex-col  bg-[#FFE6F1] px-3 py-5 ">
        <Image src={HeartBPM} />
        {Array.isArray(result) &&
          result.map((res, index) => (
            <>
              {index === 3 && (
                <div
                  className="flex flex-col gap-2 text-2xl justify-center w-full"
                  key={index}
                >
                  <div className="flex gap-3">
                    {res?.diagnosis_history.map((i, index) => (
                      <div className="my-2" key={index}>
                        {index === 0 && (
                          <div className="">
                            <h1 className="text-[20px]">HeartRate </h1>
                            <div className="flex gap-3 font-bold my-1">
                              <div className="">{i.heart_rate.value}</div>
                            </div>
                            <h1 className="font-normal inline ">
                              <h1 className="text-[20px] w-[200px]">
                                {i.heart_rate.levels}
                              </h1>
                            </h1>
                          </div>
                        )}
                      </div>
                    ))}
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
