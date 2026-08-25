"use client";
import { useState } from "react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { Download, PlayCircle, Film, X } from "lucide-react";

export default function BRollPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Manufacturing Facility Overview",
      description: "High-definition aerial and interior shots of our Munich and Hyderabad production sites.",
      duration: "03:45",
      resolution: "4K UHD",
      videoUrl: "/assets/videos/flower.mp4"
    },
    {
      title: "Laboratory & R&D Operations",
      description: "Close-up b-roll of scientists, clean rooms, and automated testing equipment.",
      duration: "02:20",
      resolution: "1080p HD",
      videoUrl: "/assets/videos/friday.mp4"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Footage of global distribution centers, automated packaging, and shipping.",
      duration: "01:55",
      resolution: "4K UHD",
      videoUrl: "/assets/videos/Big_Buck_Bunny_1080_10s_1MB.mp4"
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Corporate B-Roll"
        paths={[{ name: "Media Center", href: "/media" }, { name: "B-Roll" }]}
        bgImage="/assets/images/pharma_hero_lab.png"
      />
      
      <div className="container mx-auto px-6 lg:px-12 mt-16 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">Broadcast-Quality Footage</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Unbranded, raw video assets for news broadcasting, documentaries, and editorial use. 
            Usage rights are cleared for editorial contexts only.
          </p>
        </div>

        <div className="space-y-6">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 aspect-video bg-slate-900 rounded-xl relative flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 opacity-40 bg-[url('/assets/images/pharma_hero_mfg.png')] bg-cover bg-center"></div>
                <PlayCircle 
                  onClick={() => setActiveVideo(video.videoUrl)}
                  className="w-12 h-12 text-white/80 group-hover:text-white transition-colors relative z-10 cursor-pointer hover:scale-110" 
                />
                <span className="absolute bottom-2 right-2 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
                  {video.duration}
                </span>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-3 mb-2">
                  <Film className="w-4 h-4 text-brand-500" />
                  <span className="text-xs font-bold text-slate-500 tracking-wider">{video.resolution}</span>
                </div>
                <h3 className="text-2xl font-bold text-brand-900 mb-3">{video.title}</h3>
                <p className="text-slate-600 mb-6">{video.description}</p>
                
                <button onClick={() => alert('Downloading video file...')} className="flex items-center gap-2 px-6 py-3 bg-brand-50 text-brand-700 font-bold rounded-xl hover:bg-brand-100 transition-colors">
                  <Download className="w-4 h-4" /> Download Raw File (.mp4)
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-sm">
          <div className="bg-black w-full max-w-5xl aspect-video rounded-2xl relative overflow-hidden shadow-2xl border border-slate-700">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <video 
              key={activeVideo}
              controls 
              autoPlay 
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
