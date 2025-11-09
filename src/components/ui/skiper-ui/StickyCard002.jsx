"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

export default function StickyCard002() {
  const container = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      lerp: 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const imageElements = imageRefs.current;
    const totalCards = imageElements.length;

    if (!imageElements[0]) return;

    gsap.set(imageElements[0], { y: "0%", scale: 1, rotation: 0 });
    for (let i = 1; i < totalCards; i++) {
      gsap.set(imageElements[i], { y: "100%", scale: 1, rotation: 0 });
    }

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: `+=${window.innerHeight * (totalCards - 1)}`,
        pin: true,
        scrub: 0.5,
      },
    });

    for (let i = 0; i < totalCards - 1; i++) {
      const currentImage = imageElements[i];
      const nextImage = imageElements[i + 1];

      scrollTimeline.to(
        currentImage,
        { scale: 0.7, rotation: 5, duration: 1, ease: "none" },
        i
      );

      scrollTimeline.to(
        nextImage,
        { y: "0%", duration: 1, ease: "none" },
        i
      );
    }

    // Recompute end on resize so pin length matches new viewport height (keeps desktop behavior same)
    const handleResize = () => {
      if (scrollTimeline && scrollTimeline.scrollTrigger) {
        scrollTimeline.scrollTrigger.end = `+=${window.innerHeight * (totalCards - 1)}`;
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  const cards = [
    { id: 1, image: "/photos/ProjectIMG1.png" },
    { id: 2, image: "/photos/ProjectIMG6.png" },
    { id: 3, image: "/photos/ProjectIMG3.png" },
    { id: 4, image: "/photos/ProjectIMG4.png" },
    { id: 5, image: "/photos/ProjectIMG8.png" },
  ];

  return (
    <div ref={container} className="relative w-full">
      <div className="flex min-h-screen md:h-screen items-center justify-center px-4 md:px-6 lg:p-5">
        <div className="relative w-full max-w-[1200px] h-[70vh] md:h-screen rounded-lg overflow-hidden mx-auto">
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={`Image ${card.id}`}
              // Responsive classes:
              // - mobile: full width, left 0, cover and slightly shorter height to avoid huge vertical overflow
              // - md/lg: keep original desktop offsets and sizing
              className="absolute inset-0 w-full h-full left-0 md:left-[-10%] md:w-[110%] lg:left-[-10%] lg:w-[110%] rounded-2xl object-cover"
              ref={(el) => (imageRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
