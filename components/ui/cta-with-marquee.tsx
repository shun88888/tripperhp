"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  pauseOnHover?: boolean;
  reverse?: boolean;
  className?: string;
  speed?: number;
}

function Marquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 40,
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--gap:0rem] [gap:var(--gap)]",
        className
      )}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 items-center gap-[var(--gap)] animate-marquee",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

const images = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", // 山・自然
  "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400&h=400&fit=crop", // 海・ビーチの景色
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=400&fit=crop", // 山の風景
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=400&fit=crop", // 湖・山の景色
];

const images2 = [
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=400&fit=crop", // 湖・自然
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop", // 海・サンセット
  "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400&h=400&fit=crop", // 緑の山・森
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=400&fit=crop", // 山・雲海
];

function ComingSoonButton() {
  return (
    <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors">
      Coming Soon
    </button>
  );
}

export function HeroWithMarquee() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center overflow-hidden relative">
      <div className="w-full h-full flex flex-col lg:flex-row items-center relative">
        {/* Left Content */}
        <div className="flex-shrink-0 px-6 py-12 lg:pl-12 lg:pr-8 xl:pl-16 xl:pr-12 lg:py-0 lg:w-[40%] z-20 relative w-full lg:w-auto">
          <div className="flex flex-col gap-4 md:gap-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight mb-4 md:mb-8 text-black">
              Tripper
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              旅のアイデアが
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
              見つかる。
            </h1>
          </div>
          <div className="mt-8 md:mt-16">
            <ComingSoonButton />
          </div>
        </div>

        {/* Mobile: Marquee Grid - Visible only on mobile */}
        <div className="block lg:hidden w-full pb-12">
          <div className="relative flex flex-col gap-0">
            {/* Top row - marquee */}
            <div className="h-[180px] flex items-center overflow-hidden">
              <Marquee speed={50} reverse className="[--gap:0rem]">
                {[...images, ...images].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-[180px] h-[180px] overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`Image ${(idx % images.length) + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Bottom row - marquee */}
            <div className="h-[180px] flex items-center overflow-hidden">
              <Marquee speed={50} className="[--gap:0rem]">
                {[...images2, ...images2].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-[180px] h-[180px] overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`Image ${(idx % images2.length) + 5}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Fade Effects for Mobile */}
            <div className="pointer-events-none absolute top-0 left-0 h-[360px] w-16 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-[360px] w-16 bg-gradient-to-l from-background via-background/60 to-transparent z-10"></div>
          </div>
        </div>

        {/* Desktop: Marquee - Hidden on mobile */}
        <div className="hidden lg:flex absolute top-0 right-0 h-full w-[60%] flex-col justify-center z-10">
          {/* Marquee container with fixed height for 2 rows of 360px images */}
          <div className="relative h-[720px] flex flex-col gap-0">
            {/* Top row */}
            <div className="h-[360px] flex items-center overflow-hidden">
              <Marquee speed={50} reverse className="[--gap:0rem]">
                {[...images, ...images].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-[360px] h-[360px] overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`Image ${(idx % images.length) + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Bottom row */}
            <div className="h-[360px] flex items-center overflow-hidden">
              <Marquee speed={50} className="[--gap:0rem]">
                {[...images2, ...images2].map((src, idx) => (
                  <div
                    key={idx}
                    className="relative w-[360px] h-[360px] overflow-hidden flex-shrink-0"
                  >
                    <Image
                      src={src}
                      alt={`Image ${(idx % images2.length) + 5}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Fade Effects - Matching exact image height (720px) */}
            <div className="pointer-events-none absolute top-0 left-0 h-[720px] w-32 lg:w-48 bg-gradient-to-r from-background via-background/60 to-transparent z-10"></div>
            <div className="pointer-events-none absolute top-0 right-0 h-[720px] w-24 lg:w-40 bg-gradient-to-l from-background via-background/60 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
