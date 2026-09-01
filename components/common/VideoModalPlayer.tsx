"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, X, Film, Loader2 } from "lucide-react";
import Image from "next/image";

interface VideoModalPlayerProps {
  videoUrl: string;
  posterUrl?: string;
  title: string;
  description?: string;
  onClose: () => void;
}

export default function VideoModalPlayer({
  videoUrl,
  posterUrl,
  title,
  description,
  onClose
}: VideoModalPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay unmuted restriction, attempting muted play:", err);
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        }
      });
    }
  }, [videoUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(console.error);
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(console.error);
      setIsFullscreen(false);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      setIsLoading(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = Number(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
      {/* Schema.org VideoObject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: title,
            description: description || title,
            thumbnailUrl: posterUrl || "https://plexuspharmaco.eu/assets/images/pharma_hero_corporate.png",
            contentUrl: videoUrl,
            uploadDate: "2026-01-01T00:00:00+00:00"
          })
        }}
      />

      <div 
        ref={containerRef}
        className="bg-black w-full max-w-5xl aspect-video rounded-3xl relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col group"
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20">
            <Loader2 className="w-12 h-12 text-brand-500 animate-spin" />
          </div>
        )}

        {/* Video Element with Direct WebM src and Dual Source Fallback */}
        <video
          ref={videoRef}
          src={videoUrl.replace(/\.mp4$/i, '.webm')}
          poster={posterUrl}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onWaiting={() => setIsLoading(true)}
          onCanPlay={() => setIsLoading(false)}
          onClick={togglePlay}
          className="w-full h-full object-contain cursor-pointer"
        >
          <source src={videoUrl.replace(/\.mp4$/i, '.webm')} type="video/webm" />
          <source src={videoUrl} type="video/mp4" />
        </video>

        {/* Top Header Overlay */}
        <div className="absolute top-0 inset-x-0 p-5 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between z-30 pointer-events-auto backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-900/90 border border-brand-500/30 flex items-center justify-center text-brand-300 shadow-md">
              <Film className="w-5 h-5 text-brand-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base md:text-lg line-clamp-1 drop-shadow-md">{title}</h3>
              {description && <p className="text-slate-300 text-xs line-clamp-1 font-light drop-shadow">{description}</p>}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close video player"
            className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-lg border border-white/20"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Control Bar */}
        <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-30 flex flex-col gap-3 transition-opacity duration-300">
          
          {/* Timeline Scrubber */}
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            aria-label="Video timeline scrubber"
            className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-lg appearance-none cursor-pointer accent-brand-500 transition-all"
          />

          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="w-10 h-10 rounded-xl bg-brand-600 hover:bg-brand-500 flex items-center justify-center transition-colors shadow-lg"
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
              </button>

              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="p-2 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>

              <span className="text-xs font-mono text-slate-300">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest hidden sm:inline-block">© 2026 Plexuspharmaco GmbH • Media Stream</span>
              <button
                onClick={toggleFullscreen}
                aria-label="Toggle fullscreen"
                className="p-2 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors"
              >
                {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
