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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  const cards = [
    { id: 1, image: "https://images.unsplash.com/photo-1756992293716-b843700b5ab0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932" },
    { id: 2, image: "https://plus.unsplash.com/premium_photo-1759492477802-c922c6e16629?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932" },
    { id: 3, image: "https://plus.unsplash.com/premium_photo-1759893044893-0eb689d0ac38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2012" },
    { id: 4, image: "https://plus.unsplash.com/premium_photo-1759773084661-a535bfcedf73?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932" },
    { id: 5, image: "https://plus.unsplash.com/premium_photo-1661881411388-d43a868e52f9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2119" },
  ];

  return (
    <div ref={container} className="relative h-full w-full ">
      <div className="flex h-screen w-full items-center justify-center p-5 ">
        <div className="relative h-[100%] w-full max-w-6xl rounded-lg overflow-hidden">
          {cards.map((card, i) => (
            <img
              key={card.id}
              src={card.image}
              alt={`Image ${card.id}`}
              className="absolute h-full w-[100%] left-[-10%] md:w-[110%] md:left-[-0%] rounded-2xl object-cover"
              ref={(el) => (imageRefs.current[i] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
