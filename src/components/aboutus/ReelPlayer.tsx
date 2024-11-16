"use client";
import React, { useRef, useState, HTMLProps } from "react";
import { CiPlay1 } from "react-icons/ci";

interface IVideoPlayerProps extends HTMLProps<HTMLVideoElement> {
  src: string;
  poster?: string;
  playIcon?: boolean;
}

const ReelPlayer: React.FC<IVideoPlayerProps> = ({
  src,
  poster,
  className,
  playIcon = false,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current
          .play()
          .then(() => setIsPaused(false))
          .catch((err) => console.error("Play failed:", err));
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current
        .play()
        .then(() => setIsPaused(false))
        .catch((err) => console.error("Play failed:", err));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        poster={poster}
        onPause={() => setIsPaused(true)}
        onPlay={() => setIsPaused(false)}
        {...props}
      >
        <source src={src} type="video/mp4" />
      </video>
      {isPaused && playIcon && (
        <div
          onClick={handlePlayPause}
          className="border-2 hover:cursor-pointer absolute flex items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-24 h-24 border-black bg-opacity-75 bg-black"
        >
          <CiPlay1 className="text-4xl font-semibold text-white" />
        </div>
      )}
    </div>
  );
};

export default ReelPlayer;
