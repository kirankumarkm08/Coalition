"use client";

import React from "react";
import Fetch from "@/Components/fetchedData";
import DiagnosisHistory from "@/Components/DiagnosisHistory";
import PatientDetails from "@/Components/ParientDetails";
import { useState, useEffect } from "react";

const Home = () => {
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
  }, [credentials]);

  return (
    <div className="flex  mx-auto   justify-center overflow-hidden py-20  ">
      <Fetch state={state} />
      <DiagnosisHistory items={state} />
      <PatientDetails items={state} />
    </div>
  );
};

export default Home;
