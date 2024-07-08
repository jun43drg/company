"use client";
import React, { useState } from "react";
import Image from "next/image";
export default function Industries() {
  const [activeDiv, setActiveDiv] = useState(1);
  const handleDivClick = (divNumber) => {
    setActiveDiv(activeDiv === divNumber ? null : divNumber); // Toggle hiển thị
  };

  return (
    <div className="mt-16">
      <div className="text-3xl font-bold text-center mb-10">
        Industries we’ve excelled in
      </div>
      <div className="flex justify-center gap-8">
        <button
          onClick={() => handleDivClick(1)}
          className="bg-slate-200 hover:bg-slate-300 font-bold rounded-full py-3 px-8"
        >
          Telemedicine
        </button>
        <button
          onClick={() => handleDivClick(2)}
          className="bg-slate-200 hover:bg-slate-300 font-bold rounded-full py-3 px-8"
        >
          Dating Apps
        </button>
        <button
          onClick={() => handleDivClick(3)}
          className="bg-slate-200 hover:bg-slate-300 font-bold rounded-full py-3 px-8"
        >
          Fintech
        </button>
      </div>
      <div className="flex justify-center">
        {activeDiv === 1 && (
          <div className="bg-[#F6F6FF] mt-6 w-[1120px] h-[500px] px-[80px] py-[65px] rounded-[38px] ">
            <div className="flex">
              <div className="mt-16">
                <p className="text-[8px] mb-6">INDUSTRIES WE SERVE</p>
                <h1 className="text-3xl font-bold">Dating Apps</h1>
                <p className="text-[14px] mt-4 w-[200px]">
                  It is hard to find your second half but building a dating app
                  shouldn’t be
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                  Get Started
                </button>
              </div>
              <div className="ml-80">
                <Image
                  src="/industries-1.png"
                  alt="industries"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        )}
        {activeDiv === 2 && (
          <div className="bg-[#ECEEFF] mt-6 w-[1120px] h-[500px] px-[80px] py-[65px] rounded-[38px]">
            <div className="flex">
              <div className="mt-16">
                <p className="text-[8px] mb-6">INDUSTRIES WE SERVE</p>
                <h1 className="text-3xl font-bold">Telemedicine</h1>
                <p className="text-[14px] mt-4 w-[200px]">
                  Healthcare is broken. Fix it by building a better virtual
                  solution with a telehealth app or a web platform
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                  Get Started
                </button>
              </div>
              <div className="ml-80">
                <Image
                  src="/industries-2.png"
                  alt="industries"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        )}
        {activeDiv === 3 && (
          <div className="bg-[#DEE0FF] mt-6 w-[1120px] h-[500px] px-[80px] py-[65px] rounded-[38px]">
            <div className="flex">
              <div className="mt-16">
                <p className="text-[8px] mb-6">INDUSTRIES WE SERVE</p>
                <h1 className="text-3xl font-bold">Fintech</h1>
                <p className="text-[14px] mt-4 w-[200px]">
                  Fintech projects are strict. We bring our innovative approach
                  to it.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
                  Get Started
                </button>
              </div>
              <div className="ml-80">
                <Image
                  src="/industries-3.png"
                  alt="industries"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
