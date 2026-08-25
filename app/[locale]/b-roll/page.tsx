"use client";
import { useState } from "react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { Download, PlayCircle, Film, X } from "lucide-react";
import Image from "next/image";

export default function BRollPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      title: "Manufacturing Facility Overview",
      description: "High-definition aerial and interior shots of our Munich and Hyderabad production sites.",
      duration: "03:45",
      resolution: "4K UHD",
      placeholderImage: "/assets/images/pharma_hero_mfg.png"
    },
    {
      title: "Laboratory & R&D Operations",
      description: "Close-up b-roll of scientists, clean rooms, and automated testing equipment.",
      duration: "02:20",
      resolution: "1080p HD",
      placeholderImage: "/assets/images/pharma_hero_lab.png"
    },
    {
      title: "Logistics & Supply Chain",
      description: "Footage of global distribution centers, automated packaging, and shipping.",
      duration: "01:55",
      resolution: "4K UHD",
      placeholderImage: "/assets/images/pharma_hero_corporate.png"
    }
  ];

  return (
    <div className="modern-page-wrapper bg-slate-50 min-h-screen pb-24">
      <BreadcrumbHero 
        title="Corporate B-Roll & Media Assets"
        paths={[{ name: "Media Center", href: "/media" }, { name: "B-Roll" }]}
        bgImage="/assets/images/pharma_hero_mfg.png"
      />

      <div className="container mx-auto px-6 lg:px-12 mt-16">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-900 mb-6">High-Quality Video Assets</h2>
          <p className="text-lg text-slate-600 font-light">
            Access unbranded, high-definition b-roll footage of our manufacturing facilities, R&D labs, and supply chain operations for use in broadcast and digital media.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col">
              
              {/* Thumbnail Area */}
              <div 
                className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden"
                onClick={() => setActiveVideo(video.placeholderImage)}
              >
                <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity">
                  <Image src={video.placeholderImage} alt={video.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-500 transition-all border border-white/30">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded">
                  {video.duration} • {video.resolution}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-brand-500 mb-3">
                  <Film className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Raw Footage</span>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{video.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{video.description}</p>
                
                <button className="w-full py-3 flex items-center justify-center gap-2 bg-slate-50 hover:bg-brand-50 text-brand-900 font-bold rounded-xl transition-colors border border-slate-100">
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
          <div className="bg-slate-900 w-full max-w-5xl aspect-video rounded-2xl relative overflow-hidden shadow-2xl border border-slate-700 flex flex-col items-center justify-center text-center">
            
            <Image 
              src={activeVideo}
              alt="Video Placeholder"
              fill
              className="object-cover opacity-30"
            />
            
            <div className="relative z-10 flex flex-col items-center">
              <Film className="w-16 h-16 text-brand-300 mb-6 opacity-75" />
              <h3 className="text-3xl font-bold text-white mb-3 tracking-wide uppercase">Video Content Pending</h3>
              <p className="text-slate-300 text-lg max-w-md">The final broadcast-quality MP4 file is currently pending client approval and upload.</p>
              <div className="mt-8 px-4 py-2 border border-brand-500/50 bg-brand-900/50 rounded-lg text-brand-200 text-sm font-medium backdrop-blur-md">
                Placeholder Mode Active
              </div>
            </div>

            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
