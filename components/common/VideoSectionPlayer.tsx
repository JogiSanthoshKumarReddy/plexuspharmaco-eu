"use client";
import { useState } from "react";
import { PlayCircle, Film } from "lucide-react";
import Image from "next/image";
import VideoModalPlayer from "./VideoModalPlayer";

interface VideoSectionPlayerProps {
  videoUrl: string;
  posterUrl: string;
  title: string;
  subtitle?: string;
  badge?: string;
}

export default function VideoSectionPlayer({
  videoUrl,
  posterUrl,
  title,
  subtitle,
  badge = "Corporate Video Showcase"
}: VideoSectionPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full my-12">
      {/* Container */}
      <div 
        onClick={() => setIsOpen(true)}
        className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 group cursor-pointer bg-slate-900"
      >
        {/* Poster Image */}
        <Image
          src={posterUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-75"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/40 pointer-events-none" />

        {/* Top Badge */}
        <div className="absolute top-6 left-6 z-10 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
          <Film className="w-4 h-4 text-brand-400" />
          <span>{badge}</span>
        </div>

        {/* Center Big Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-brand-900/90 text-white backdrop-blur-md flex items-center justify-center border-2 border-white/30 group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300 shadow-2xl">
            <PlayCircle className="w-12 h-12 md:w-14 md:h-14 fill-white/20" />
          </div>
        </div>

        {/* Bottom Title & Subtitle */}
        <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-brand-300 transition-colors drop-shadow-md">{title}</h3>
          {subtitle && <p className="text-slate-300 text-sm md:text-base font-light drop-shadow line-clamp-2">{subtitle}</p>}
        </div>
      </div>

      {/* Modal Video Player */}
      {isOpen && (
        <VideoModalPlayer
          videoUrl={videoUrl}
          posterUrl={posterUrl}
          title={title}
          description={subtitle}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
