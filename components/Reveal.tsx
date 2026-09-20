"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: RevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transition-all
        duration-700
        ease-out
        motion-reduce:transform-none
        motion-reduce:opacity-100
        motion-reduce:transition-none
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
