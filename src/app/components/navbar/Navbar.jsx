"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../../../public/photos/PNG LOGO.png";
import Magnet from "../../../components/Magnet";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.pageYOffset || 0;
      // hide when scrolling down and after a small threshold; show when scrolling up
      if (current > lastScroll.current && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      // close mobile menu when switching to desktop
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`w-[100vw] h-[70px] z-50 flex items-center px-5 justify-between backdrop-blur-xl bg-white/30 fixed top-0 z-60 transform transition-transform duration-300 ease-in-out shadow-xl
					${hidden ? "-translate-y-full" : "translate-y-0"}`}
      >
        <Link href="/">
          <img src={logo.src} alt="Logo" className="h-16 w-auto" />
        </Link>

        {/* desktop links */}
        <nav className="hidden md:flex gap-10 text-sm items-center">
          <Link href="/">
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <p>Home</p>
            </Magnet>
          </Link>
          <Link href="/projects">
            <Magnet padding={50} disabled={false} magnetStrength={10}>
              <p>Projects</p>
            </Magnet>
          </Link>

          <Link href="/team">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <p>Team</p>
            </Magnet>
          </Link>
          <Link href="/about">
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <p>About</p>
            </Magnet>
          </Link>
          <Link href="/contact"> 
            <Magnet padding={50} disabled={false} magnetStrength={5}>
              <p>Contact Us</p>
            </Magnet>
          </Link>
        </nav>

        {/* mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {/* simple hamburger icon */}
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
          <span className="block w-6 h-0.5 bg-gray-800"></span>
        </button>
      </div>

      {/* mobile menu (slides from top under navbar) */}
      {open && (
        <div className="md:hidden absolute top-[70px] left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg z-50">
          <div className="flex flex-col px-5 py-4 gap-3">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/store" onClick={() => setOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
