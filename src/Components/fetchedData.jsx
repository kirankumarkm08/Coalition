"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import Image from "next/image";
import ParientDetails from "./ParientDetails";
import Diagnosticlist from "@/Components/Diagnosticlist";

const FetchedData = () => {
  const [state, setState] = useState([]);
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";
  const username = "coalition";
  const password = "skills-test";

  // Encode credentials
  const credentials = btoa(`${username}:${password}`);
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setState(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // console.log(state);

  return (
    <div className="w-[350px] h-[1054px] overflow-auto bg-white rounded-2xl  my-10  px-2 py-5 hidden xl:inline-block">
      {/* <Patients results={JSON.stringify(state)} /> */}

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
              <div className="hidden">
                <ParientDetails results={state} />
                <Diagnosticlist list={state} />
              </div>
            </div>
          ))}{" "}
      </div>
    </div>
  );
};

export default FetchedData;
