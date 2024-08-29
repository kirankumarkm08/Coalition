import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Chart = ({ items }) => {
  return (
    <div className="bg-[#F4F0FE] mx-5 rounded-xl my-2">
      <div className="px-5 py-2  ">
        <h1 className="text-[20px] font-bold ">Blood Pressure</h1>
        <div className=" py-5">
          {items.map((i, index) => (
            <div className="" key={index}>
              {index === 3 && (
                <div className="flex gap-5">
                  <div className=" w-[450px] flex">
                    <Line
                      data={{
                        labels: i.diagnosis_history
                          .slice(0, 6)
                          .map(
                            (mes) => mes?.month.slice(0, 3) + "  " + mes.year
                          )
                          .reverse(), // Combine all month labels
                        datasets: [
                          {
                            data: i.diagnosis_history
                              .slice(0, 6)
                              .map(
                                (mes) => mes?.blood_pressure?.systolic?.value
                              ), // Adjust this if needed
                            backgroundColor: "#E66FD2",
                            borderColor: "#E66FD2",
                            borderWidth: 3,
                            tension: 0.5,
                          },
                          {
                            data: i.diagnosis_history
                              .slice(0, 6)
                              .map(
                                (mes) => mes?.blood_pressure?.diastolic?.value
                              ), // Adjust this if needed
                            backgroundColor: "#8C6FE6",
                            borderColor: "#8C6FE6",
                            tension: 0.5,
                            borderWidth: 3,
                          },
                        ],
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#E66FD2] w-[14px] h-[14px] rounded-full "></div>
                        <h1 className="font-bold">Systolic</h1>
                      </div>

                      <h1 className="w-[150px]">
                        {
                          i.diagnosis_history[0]?.blood_pressure?.systolic
                            ?.value
                        }
                      </h1>
                      <h1 className="text-[15px] font-extralight">
                        {
                          i.diagnosis_history[0]?.blood_pressure?.systolic
                            ?.levels
                        }
                      </h1>
                    </div>
                    <div className="">
                      <div className="flex gap-2 items-center">
                        <div className="bg-[#8C6FE6] w-[14px] h-[14px] rounded-full"></div>
                        <h1 className="font-bold">Diastolic</h1>
                      </div>

                      <h1 className="w-[150px]">
                        {
                          i.diagnosis_history[0]?.blood_pressure?.diastolic
                            ?.value
                        }
                      </h1>
                      <h1 className="text-[15px] font-extralight">
                        {
                          i.diagnosis_history[0]?.blood_pressure?.diastolic
                            ?.levels
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
