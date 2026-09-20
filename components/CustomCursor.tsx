"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const ring = useRef({
    x: 0,
    y: 0,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${event.clientX}px`;
        dotRef.current.style.top = `${event.clientY}px`;
      }
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const clickable = target.closest("a, button, input, textarea, select");

      setHovering(Boolean(clickable));
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    let animationFrame: number;

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* Small center dot */}
      <div ref={dotRef} className="custom-cursor-dot" />

      {/* Smooth outer circle */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${
          hovering ? "custom-cursor-ring-hover" : ""
        }`}
      />
    </>
  );
}
