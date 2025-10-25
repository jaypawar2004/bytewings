"use client";
import React, { useRef } from 'react';

const ProjectCard = ({ videoSrc, poster, title, desc }) => {
  const vidRef = useRef(null);

  const handleEnter = () => {
    if (vidRef.current) {
      // play; ensure muted so browser allows autoplay
      vidRef.current.muted = true;
      void vidRef.current.play();
    }
  };

  const handleLeave = () => {
    if (vidRef.current) {
      vidRef.current.pause();
      vidRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="w-full h-[50vh] rounded-[10px] relative overflow-hidden group bg-black"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* video sits beneath the overlay */}
      <video
        ref={vidRef}
        src={videoSrc}
        poster={poster}
        playsInline
        muted
        loop
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      />

      {/* overlay is hidden by translating it down; on parent hover it translates up */}
      <div className="absolute inset-0 rounded-[10px] bg-gradient-to-t from-black to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex flex-col justify-end p-5">
        <h2 className="text-white text-3xl font-bold">{title}</h2>
        <p className="text-white mt-2">{desc}</p>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className=" w-full">
      <h1 className="text-8xl font-black py-16 text-center font-primary">PROJECTS</h1>
      <div className="cards w-full p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <ProjectCard
          videoSrc="https://cdn.prod.website-files.com/679cb8f2875d404c7de22f8a%2F67e4f53561d1b2ebf4d1850a_Atlantiser_showreel_website_home-transcode.mp4"
          poster="https://assets.awwwards.com/awards/images/2024/04/galleries-slideshows_collection.jpg"
          title="Project 1"
          desc="Lorem ipsum dolor sit amet."
        />
        <ProjectCard
          videoSrc="https://assets.awwwards.com/awards/element/2025/09/68d80a2e1242f932931997.mp4"
          poster="https://assets.awwwards.com/awards/images/2024/04/handy-tools-apps_collection.jpg"
          title="Project 2"
          desc="Lorem ipsum dolor sit amet."
        />
        <ProjectCard
          videoSrc="https://assets.awwwards.com/awards/element/2025/06/6853daa602cfe058018368.mp4"
          poster="https://assets.awwwards.com/awards/images/2024/04/adit.jpg"
          title="Project 3"
          desc="Lorem ipsum dolor sit amet."
        />
        <ProjectCard
          videoSrc="https://assets.awwwards.com/awards/element/2024/02/65dbb374a048d927192718.mp4"
          poster="https://assets.awwwards.com/awards/images/2024/04/tta.jpg"
          title="Project 4"
          desc="Lorem ipsum dolor sit amet."
        />
      </div>
    </div>
  );
};

export default page;