"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import "./HomePage.css";

gsap.registerPlugin(ScrollTrigger);
const email = "infobytewings@gmail.com"; // Put your email here
const subject = "ByteWings Technology";
const body = "Hello ByteWings Team,\n\nI am interested in your services...\n";
const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
const imageArray = [

  'https://images.unsplash.com/photo-1724765623733-68ef3080a5c3?q=80&w=2470&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1726715245558-69afa5ded798?q=80&w=2525&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1682251024316-fcd478b8ad15?q=80&w=2532&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1702318262405-091b2519df01?q=80&w=2532&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1723924995430-b74c76bbcdfd?q=80&w=2680&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1718305340842-f9c16d9d7031?q=80&w=2532&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1722619452740-1b6d0c33627a?q=80&w=2532&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1720546973026-7011fa500f9d?q=80&w=2532&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1716574207415-6252b5fc6f17?q=80&w=2564&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1723391962110-299d412ca046?q=80&w=2564&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1723347130196-8d31b6ac01fd?q=80&w=2532&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1679669693237-74d556d6b5ba?q=80&w=2598&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

];

function page() {
  useEffect(() => {
    
    // 1. Lenis Smooth Scroll
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. GSAP Animations (DONE)
    gsap.to('.about', {
      gap: "20vh",
      ease: 'none',
      scrollTrigger: {
        trigger: '.about',
        start: 'top bottom',
        end: '50% 0%',
        scrub: true,
      }
    });
    gsap.to('.footer', {
      gap: "9vh",
      ease: 'none',
      scrollTrigger: {
        trigger: '.footer',
        start: 'top 50%',
        end: '50% 0%',
        scrub: true,
      }
    });
    const heroHeadings = document.querySelectorAll('.hero-section h1');
    gsap.to(heroHeadings[0], {
      x: '10%',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to(heroHeadings[1], {
      x: '-10%',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true }
    });
    gsap.to(heroHeadings[2], {
      x: '10%',
      scrollTrigger: { trigger: '.hero-section', start: 'top top', end: 'bottom top', scrub: true }
   });

    // 3. Image Hover Effect (DONE)
    const imgDiv = document.querySelector('.img-div-sec');
    const imgContainer = document.querySelector('.img-container');
    const h2Elements = document.querySelectorAll('.right-section h2');
    
    // Create named listener functions so we can remove them later
    const h2EnterListeners = [];
    const h2LeaveListeners = [];

    h2Elements.forEach((h2, index) => {
      const enterFunc = () => {
        const imagePath = imageArray[index % imageArray.length];
        imgContainer.style.backgroundImage = `url(${imagePath})`;
        imgDiv.style.display = 'block';
      };
      const leaveFunc = () => {
        imgDiv.style.display = 'none';
      };

      h2EnterListeners[index] = enterFunc;
      h2LeaveListeners[index] = leaveFunc;

      h2.addEventListener('mouseenter', enterFunc);
      h2.addEventListener('mouseleave', leaveFunc);
    });

    // 4. Image Parallax Mouse Move (DONE)
    const handleImgParallax = (dets) => {
      const reductionFactor = 0.3;
      const windowHeight = window.innerHeight;
      const centerY = windowHeight / 2;
      const mouseOffsetFromCenter = dets.clientY - centerY;
      const reducedOffset = mouseOffsetFromCenter * reductionFactor;
      const newY = centerY + reducedOffset;
      
      // Ensure imgDiv exists before updating
      if (imgDiv) {
        imgDiv.style.top = `${newY}px`;
      }
    };
    document.body.addEventListener('mousemove', handleImgParallax);

    // 5. Infinite Scroll Text (DONE)
    function setupInfiniteScroll() {
      const scrollContent = document.querySelector('.scroll-content');
      if (scrollContent) {
        const scrollWidth = scrollContent.offsetWidth;
        const clone = scrollContent.cloneNode(true);
        scrollContent.parentNode.appendChild(clone);

        gsap.to([scrollContent, clone], {
          x: -scrollWidth,
          ease: 'none',
          duration: 30,
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize(x => parseFloat(x) % scrollWidth)
          }
        });
      }
    }
    setupInfiniteScroll();

    // 6. Mouse Flow Text Effect (NEW)
    const flowTexts = document.querySelectorAll(".mouse-flow h6");
    const quickToTopFns = [];
    const quickToLeftFns = [];

    flowTexts.forEach((text, index) => {
      const duration = 0.5 + (index * 0.1); 
      quickToTopFns[index] = gsap.quickTo(text, "top", { 
        duration: duration, 
        ease: "power3.out"
      });
      quickToLeftFns[index] = gsap.quickTo(text, "left", { 
        duration: duration, 
        ease: "power3.out" 
      });
    });

    const handleMouseFlow = (dets) => {
      flowTexts.forEach((text, index) => {
        quickToTopFns[index](dets.clientY);
        quickToLeftFns[index](dets.clientX);
      });
    };
    document.body.addEventListener('mousemove', handleMouseFlow);
    
    
    // --- React Cleanup Function (DONE) ---
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.killTweensOf('.scroll-content'); // Also kill infinite scroll
      document.body.removeEventListener('mousemove', handleImgParallax);
      document.body.removeEventListener('mousemove', handleMouseFlow);
      
      // Remove h2 event listeners as well
      h2Elements.forEach((h2, index) => {
        h2.removeEventListener('mouseenter', h2EnterListeners[index]);
        h2.removeEventListener('mouseleave', h2LeaveListeners[index]);
      });
    };

  }, []); // Empty array [] means this effect runs only once // JSX (HTML) - (No changes)

  return (
    <>
      <nav className="navbar">
        <a href="#" className="nav-link left">
          Work
        </a>

        <a href="#" className="nav-link center logo">
          Logo
        </a>

        <a href="#" className="nav-link right">
          About
        </a>
      </nav>

      <main>
        <div className="hero-section ">
          <h1>BYTEWINGS</h1>

          <h1 className="tech ">TECH</h1>

          <h1>NOLOGY</h1>

          <div className="mouse-flow">
            <h6>Hello!</h6>

            <h6>We are a creative website</h6>

            <h6> development Agency</h6>

            <h6>based in India</h6>
          </div>
        </div>

        <div className="split-section">
          <div className="left-section">
            <div className="img-div-sec">
              <div className="img-container"></div>
            </div>
          </div>

          <div className="right-section">
            <h2>
              WEBSITE<sup>DEVELOPMENT</sup>
            </h2>

            <h2>
              APPLICATION<sup>DEVELOPMENT</sup>
            </h2>

            <h2>
              VIDEOS<sup>EDITING</sup>
            </h2>

            <h2>
              REEL<sup>EDITING</sup>
            </h2>

            <h2>
              META<sup>ADS</sup>
            </h2>

            <h2>
              GOOGLE<sup>ADS</sup>
            </h2>

            <h2>
              AI<sup>AGENTS</sup>
            </h2>

            <h2>
              CHATBOT<sup>DEVELOPMENT</sup>
            </h2>

            <h2>
              CLOUD<sup>SERVICES</sup>
            </h2>
          </div>
        </div>

        <div className="new-section about">
          <h1 className="big-hello">HELLO!</h1>

          <h1 className="big-hello">WELCOME!</h1>

          <h4 className="intro-text">
            ByteWings
            <br />
            Technology
            <br />
            BASED IN INDIA
          </h4>

          <p>
            ByteWings Technologies is a creative digital agency that helps
            brands grow through design, technology, and strategy. We specialize
            in web design, web development, branding, and digital marketing,
            delivering solutions that combine aesthetics with performance.
            <br />
            <br />
            Our process is built around collaboration, innovation, and
            transparency. Every project begins with understanding the client’s
            goals, market, and audience — allowing us to create tailor-made
            digital experiences that make a real impact.
            <br />
            <br />
            At ByteWings, we believe in long-term partnerships. Whether it’s
            building a modern website, a scalable web app, or a full digital
            brand identity, we work closely with every client to ensure every
            detail aligns with their vision.
            <br />
            <br />
            Our team values creativity, clear communication, and timely delivery
            — ensuring each project is handled with precision, purpose, and
            passion. We don’t just build websites; we build brands that inspire
            trust and drive results.
          </p>
        </div>

        <div className="scroll-section">
          <div className="scroll-content">
            <h3>LOCOTYPE</h3>

            <h3>WEBDESIGN</h3>

            <h3>PRINT</h3>

            <h3>SOCIALS</h3>

            <h3>BRANDING</h3>

            {/* Clone handled by JS */}
          </div>
        </div>

        <div className="new-section footer">
          <h1 className="Letstalk text-white text-9xl ">LET'S TALK</h1>

          <h4 className="intro-text">
            <a 
  href="https://mail.google.com/mail/?view=cm&fs=1&to=infobytewings@gmail.com&su=Website_Inquiry&body=Hello_ByteWings_Team,"
  target="_blank" 
  rel="noopener noreferrer"
>EMAIL</a>

            <br />

            <a href="https://www.instagram.com/bytewings_technology/">
              INSTAGRAM
            </a>

            <br />

            <a href="https://www.linkedin.com/company/byte-wings/?viewAsMember=true">
              LINKEDIN
            </a>

            <br />

            <a href="#">YOUTUBE</a>
          </h4>

          {/* <p>&#169;2024 | Created by Gravity Coding</p> */}
        </div>
      </main>
    </>
  );
}

export default page;
