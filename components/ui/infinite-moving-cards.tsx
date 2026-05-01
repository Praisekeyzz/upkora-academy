"use client";

import { Pause, Play } from "lucide-react";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

function getInitials(name: string): string {
  const parts = name.split(/[\s.]+/).filter(Boolean);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  showControls = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title?: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  showControls?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "140s");
      }
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) setIsPaused(false);
  };

  return (
    <div
      className={cn("relative w-full", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="scroller relative z-20 w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      >
        <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 md:gap-6 py-4",
          start && "animate-scroll"
        )}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[340px] md:w-[400px] min-h-[200px] shrink-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-5"
            key={`${item.name}-${idx}`}
          >
            <Quote className="w-6 h-6 text-white/30 shrink-0" />
            <blockquote className="flex-1 flex flex-col">
              <p className="text-white/90 text-[15px] md:text-base leading-[1.6]">
                {item.quote}
              </p>
              <div className="mt-auto pt-5 flex items-center gap-3 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 text-xs font-semibold shrink-0">
                  {getInitials(item.name)}
                </div>
                <span className="text-white/70 text-sm font-medium">
                  {item.name}
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
      </div>
      {showControls && (
        <button
          type="button"
          onClick={() => setIsPaused((p) => !p)}
          className="absolute bottom-4 right-4 md:right-8 z-30 w-11 h-11 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/90 hover:bg-white/20 transition-colors"
          aria-label={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? (
            <Play className="w-5 h-5 ml-0.5" />
          ) : (
            <Pause className="w-5 h-5" />
          )}
        </button>
      )}
    </div>
  );
};