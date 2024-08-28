"use client";

import React from "react";
import Image from "next/image";
import Logo from "/public/TestLogo.svg";
import Home from "/public/Home.svg";
import Group from "/public/group.svg";
import Calender from "/public/calender.svg";
import Chat from "/public/chat.svg";
import Card from "/public/card.svg";
import Link from "next/link";
import doctor from "/public/doctor.png";
import settings from "/public/settings.png";
import verticleMore from "/public/moreverticle.png";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const nav = [
    {
      label: "Overview",
      icon: Home,
      url: "/",
    },
    {
      label: "Group",
      icon: Group,
      url: "/group",
    },
    {
      label: "Calendar",
      icon: Calender,
      url: "/calendar",
    },
    {
      label: "Chat",
      icon: Chat,
      url: "/chat",
    },
    {
      label: "Card",
      icon: Card,
      url: "/card",
    },
  ];
  const params = usePathname();
  return (
    <div className="bg-white rounded-full my-5 py-2 mx-4 px-10 text-black fixed w-full overflow-hidden">
      <div className=" flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} width={200} height={100} alt="logo" />
        </Link>

        <div className=" flex items-center justify-evenly  gap-10 ">
          {nav.map((navs) => (
            <Link
              href={navs.url}
              key={navs.label}
              className={
                params === navs.url
                  ? " bg-green-500 px-4 py-2 rounded-full font-bold transition-colors   duration-500"
                  : ""
              }
            >
              <div className="flex items-center gap-2">
                <Image src={navs.icon} alt="icons" />
                <p>{navs.label}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex gap-2  px-5 items-center hidden lg:inline-flex">
          <Image src={doctor} className="w-[44px]" alt="doctor" />
          <div className="border-r-2 flex flex-col px-5 ">
            <p className="text-sm">Dr. Jose Simmons</p>
            <p className="text-sm">General Practitioner</p>
          </div>
          <div className=" flex gap-5">
            <Image
              src={settings}
              className="h-[20px] w-[20px]"
              alt="navicons"
            />
            <Image
              src={verticleMore}
              className="w-[4px] h-[20px]"
              alt="navicons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
