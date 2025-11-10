// import React from "react";
// import CircularGallery from "../../components/CircularGallery";
// import "./page.css";
// import Magnet from "@/components/Magnet";

// const page = () => {
//   return (
//     <div className="w-full h-screen relative sm:overflow-hidden ">
//       <div className="absolute text-center z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <h1
//           className="lg:text-6xl text-3xl lg:font-extrabold font-bold
//   bg-gradient-to-br from-green-400 via-pink-500 to-indigo-600 relative z-50
//   bg-clip-text text-transparent"
//         >
//           Empowering Businesses with Next-Gen Digital Solutions
//         </h1>
//         <Magnet padding={50} disabled={false} magnetStrength={5}>
//           <button className="text-center text-white border-2 bg-gradient-to-r from-blue-500 to-purple-600 px-7 rounded-[7px] mt-5 py-3">
//             Get Start
//           </button>
//         </Magnet>

//         <h4 className="scroll spin text-black
//          absolute lg:-bottom-[100%] -bottom-[70%]
//           sm:-bottom-52 inset-x-0 mx-auto
//            -translate-y-1/2 text-center h-[80px]
//             flex items-center justify-center
//              rounded-full border w-[80px]
//               font-semibold border-black">
//           Scroll
//         </h4>
//       </div>
//       <div className="w-full flex relative ">
//         <div
//           className="float lg:w-[30vw] lg:h-[50vh] animate-floatY blur-3xl rounded-full absolute z-0"
//           style={{
//             width: "30vw",
//             height: "50vh",
//             backgroundColor: "#6366f1",
//             borderRadius: "50%",
//           }}
//         ></div>
//         <div
//           className=" float1 animate-floatX w-[30vw] h-[50vh] bg-oren-400 blur-3xl absolute rounded-full z-0 lg:right-0 right-24"
//           style={{
//             width: "30vw",
//             height: "50vh",
//             backgroundColor: "#f94e10",
//             borderRadius: "50%",
//           }}
//         ></div>
//       </div>

      

//       <div className="frontGallery" style={{ height: "700px", position: "relative" }}>
//         <CircularGallery
//           bend={3}
//           textColor="#00000"
//           borderRadius={0.05}
//           scrollEase={0.02}
//         />
//       </div>
//     </div>
//   );
// };

// export default page;


"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const floatingVariants = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Home() {
  const floatingItems = [
    { src: "", top: "10%", left: "15%", emoji: "👍", count: 20 },
    { src: "/user2.png", top: "50%", left: "10%", emoji: "💬", count: 32 },
    { src: "/user3.png", top: "80%", left: "45%", emoji: "🔥", count: 41 },
    { src: "/user4.png", top: "20%", left: "75%", emoji: "🎉", count: 22 },
    { src: "/user5.png", top: "65%", left: "85%", emoji: "💬", count: 10 },
    { src: "/user6.png", top: "35%", left: "40%", emoji: "😍", count: 42 },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#d7e8e3] to-[#e3f0ef] overflow-hidden text-center px-6">
      {/* Rotating Circles */}
      <div className="absolute w-[130%] h-[130%] border border-gray-300 rounded-full opacity-30 animate-spin-slow"></div>
      <div className="absolute w-[160%] h-[160%] border border-gray-200 rounded-full opacity-20 animate-spin-slower"></div>
      <div className="absolute w-[190%] h-[190%] border border-gray-100 rounded-full opacity-10 animate-spin-slowest"></div>

      {/* Content */}
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 leading-tight">
        Empowering Businesses Through<br /> Creativity and Technology🚀
      </h1>
      <p className="text-gray-600 max-w-xl mb-6">
        Connect with talented developers, designers, and creators. Share
        knowledge, build projects together, and level up your skills every day.
      </p>
      <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition">
        Join Now
      </button>

      {/* Floating Avatars */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          variants={floatingVariants}
          animate="float"
          className="absolute flex flex-col items-center text-sm font-medium group"
          style={{ top: item.top, left: item.left }}
        >
          <motion.img
            src={item.src}
            alt="user"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_#60a5fa]"
          />
          <div className="flex items-center gap-1 mt-1 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full shadow-sm text-xs">
            <span>{item.emoji}</span>
            <span>{item.count}</span>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
