import React from "react";
import Fetch from "@/Components/fetchedData";
import DiagnosisHistory from "@/Components/DiagnosisHistory";
import PatientDetails from "@/Components/ParientDetails";

const Home = () => {
  return (
    <div className="flex  mx-auto   justify-center overflow-hidden py-20  ">
      <Fetch />
      <DiagnosisHistory />
      <PatientDetails />
    </div>
  );
};

export default Home;
