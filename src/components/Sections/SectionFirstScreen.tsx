import { useState } from "react";
import cn from "classnames";

export function SectionFirstScreen() {
  const [isVideoEnded, setVideoEnded] = useState(false);
  return (
    <section className="z-10 h-screen w-full relative">
      <video
        muted={true}
        loop={false}
        src="/assets/MIUI14_Pure2.mp4"
        autoPlay
        poster="/assets/home-video-poster.webp"
        className="absolute left-0 top-0 bottom-0 w-full h-full right-0 object-cover object-center border-none outline-none"
        onEnded={() => {
          setVideoEnded(true);
        }}
      />
      <img
        src="/assets/home-text-black.svg"
        className={cn(
          "absolute left-[50%] -translate-x-[50%] top-[62%] hidden lg:block lg:w-[16%] transition-[margin,opacity] !duration-300",
          isVideoEnded ? "opacity-100 mt-0" : "opacity-0 mt-[10px]"
        )}
      />
    </section>
  );
}
