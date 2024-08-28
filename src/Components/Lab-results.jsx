import React from "react";
import Download from "/public/ProfileIcons/Download.png";
import Image from "next/image";
import Button from "@/Components/Button";

const Lab = ({ labresults }) => {
  return (
    <div>
      <div className="w-[376px]  h-[296px] bg-white my-10 rounded-3xl flex flex-col pl-3 py-5 ">
        <div className="">
          <h1 className="font-bold  text-[30px] border-b-2">Lab Results</h1>
          <div className="overflow-y-auto h-[220px]  ">
            {Array.isArray(labresults) &&
              labresults?.map((items, index) => (
                <div className="  " key={index}>
                  <div className="flex   px-10   p-1 w-[376px]  ">
                    {index === 3 ? (
                      <div className=" ">
                        <div className="">
                          {items.lab_results.map((i) => (
                            <div className=" flex justify-between w-[300px]  hover:bg-black/20 px-4 gap-4 py-2 ">
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
