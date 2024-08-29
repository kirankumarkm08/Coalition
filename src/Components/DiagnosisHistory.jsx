"use client";

import React from "react";
import Diagnosticlist from "./Diagnosticlist";
import { useState, useEffect } from "react";
import Results from "@/Components/Results";
import Chart from "@/Components/Chart";

const DiagnosisHistory = () => {
  const [items, setItems] = useState([]);
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
      .then((data) => setItems(data))
      .catch((error) => console.error("Error:", error));
  }, []);
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
