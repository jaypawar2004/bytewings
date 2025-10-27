import React from "react";
import CircularGallery from "../../components/CircularGallery";
import "./page.css";
import Magnet from "@/components/Magnet";

const page = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute text-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1
          className="text-6xl font-extrabold 
  bg-gradient-to-br from-green-400 via-pink-500 to-indigo-600 relative z-50
  bg-clip-text text-transparent"
        >
          Empowering Businesses with Next-Gen Digital Solutions
        </h1>
        <Magnet padding={50} disabled={false} magnetStrength={5}>
          <button className="text-center text-white border-2 bg-gradient-to-r from-blue-500 to-purple-600 px-7 rounded-[7px] mt-5 py-3">
            Get Start
          </button>
        </Magnet>

        <h4 className="scroll spin text-black absolute -bottom-[100%] inset-x-0 mx-auto -translate-y-1/2 text-center h-[80px] flex items-center justify-center rounded-full border w-[80px] font-semibold border-black">
          Scroll
        </h4>
      </div>
      <div className="w-full flex relative">
        <div
          className="float w-[30vw] h-[50vh] animate-floatY blur-3xl rounded-full absolute z-0"
          style={{
            width: "30vw",
            height: "50vh",
            backgroundColor: "#6366f1",
            borderRadius: "50%",
          }}
        ></div>
        <div
          className=" float1 animate-floatX w-[30vw] h-[50vh] bg-oren-400 blur-3xl absolute rounded-full z-0 right-0"
          style={{
            width: "30vw",
            height: "50vh",
            backgroundColor: "#f94e10",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <div style={{ height: "700px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#00000"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </div>
  );
};

export default page;
