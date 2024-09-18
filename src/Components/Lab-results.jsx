import React from "react";
import Download from "/public/ProfileIcons/Download.png";
import Image from "next/image";
import Button from "@/Components/Button";

const Lab = ({ labresults }) => {
  return (
    <div className="">
      <div className="   h-[296px] bg-white my-10 rounded-3xl flex flex-col pl-3 py-5 ">
        <div className="">
          <h1 className="font-bold  md:text-[30px] border-b-2 ">Lab Results</h1>
          <div className=" h-[220px]  ">
            {Array.isArray(labresults) &&
              labresults?.map((items, index) => (
                <div className="  " key={index}>
                  <div className="flex      p-1 md:full min-w-0  ">
                    {index === 3 ? (
                      <div className=" ">
                        <div className="flex flex-col ">
                          {items.lab_results.map((i, index) => (
                            <div
                              className=" flex justify-between items-center md:w-[250px] lg:w-[340px] min-w-0  hover:bg-black/20 px-4 gap-4 py-2 "
                              key={index}
                            >
                              <ul>
                                <li>{i}</li>
                              </ul>
                              <div className="">
                                <button
                                  onClick={() => {
                                    print();
                                  }}
                                >
                                  <Image
                                    src={Download}
                                    alt="download"
                                    width={20}
                                  />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lab;

{
  /* <li>{index === 3 && i.lab_results[1]}</li> */
}
