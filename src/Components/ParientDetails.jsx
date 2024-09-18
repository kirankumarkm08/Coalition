"use client";

import React from "react";
import Image from "next/image";
import DOB from "/public/ProfileIcons/BirthIcon@2x.png";
import Gender from "/public/ProfileIcons/FemaleIcon@2x.png";
import Phn from "/public/ProfileIcons/PhoneIcon@2x.png";
import Insurance from "/public/ProfileIcons/InsuranceIcon@2x.png";
import Lab from "@/Components/Lab-results";

const ParientDetails = ({ items }) => {
  return (
    <div>
      <div className=" max-w-[376px] min-w-[376px] min-h-[740px] bg-white my-10 rounded-3xl flex flex-col items-center py-5 inset-0 ">
        <div className="">
          {Array.isArray(items) &&
            items.map((i, index) => (
              <div className="flex flex-col gap-5" key={index}>
                {index === 3 && (
                  <div className="flex flex-col items-center gap-x-5">
                    <Image
                      src={i.profile_picture}
                      width={200}
                      height={200}
                      className="mx-10 my-10"
                      alt={i.name}
                    />
                    <h1 className="font-bold text-[30px]">{i.name}</h1>

                    <div className="flex items-center justify-start h-[40px] gap-5 w-full my-5">
                      <Image src={DOB} width={40} height={40} alt="DOB" />
                      <div className=" flex flex-col items-start">
                        <h2>Date of Birth</h2>
                        <h2>{i.date_of_birth}</h2>
                      </div>
                    </div>
                    <div className="flex items-center justify-start h-[40px] gap-5 w-full my-5">
                      <Image src={Gender} width={40} height={40} alt="Gender" />
                      <div className=" flex flex-col items-start">
                        <h2>Gender</h2>
                        <h2>{i.gender}</h2>
                      </div>
                    </div>
                    <div className="flex items-center justify-start h-[40px] gap-5 w-full my-5">
                      <Image src={Phn} width={40} height={40} alt="Phone No." />
                      <div className=" flex flex-col items-start">
                        <h2>Contect info</h2>
                        <h2>{i.phone_number}</h2>
                      </div>
                    </div>
                    <div className="flex items-center justify-start h-[40px] gap-5 w-full my-5">
                      <Image src={Phn} width={40} height={40} alt="Phn No2" />
                      <div className=" flex flex-col items-start">
                        <h2>Emergency contact info</h2>
                        <h2>{i.emergency_contact}</h2>
                      </div>
                    </div>
                    <div className="flex items-center justify-start h-[40px] gap-5 w-full my-5">
                      <Image
                        src={Insurance}
                        width={40}
                        height={40}
                        alt="insurance"
                      />
                      <div className=" flex flex-col items-start">
                        <h2>Insurance provider</h2>
                        <h2>{i.insurance_type}</h2>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      <Lab labresults={items} />
    </div>
  );
};

export default ParientDetails;
