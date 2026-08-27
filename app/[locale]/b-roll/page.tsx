"use client";
import { useState, useEffect } from "react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { Download, PlayCircle, Film, X } from "lucide-react";
import Image from "next/image";

// Sub-component for the Video Slideshow
function SlideShowModal({ images, onClose }: { images: string[], onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500); // 3.5 seconds per slide
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
      <div className="bg-black w-full max-w-5xl aspect-video rounded-2xl relative overflow-hidden shadow-2xl border border-slate-700">
        
        {images.map((img, idx) => (
          <div 
            key={img}
            className={`absolute inset-0 transition-all ease-in-out ${idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100 z-[-1]'}`}
            style={{ transitionDuration: '1.5s' }}
          >
            <Image 
              src={img}
              alt="B-Roll Slide"
              fill
              className="object-cover"
              priority={idx === 0}
            />
          </div>
        ))}
        
        {/* Subtle Overlay to make it look like a video player */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />
        
        <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <Film className="w-5 h-5 text-red-500 animate-pulse" />
              <div className="text-white/90 font-mono text-sm font-bold tracking-widest uppercase">
                RAW_B-ROLL_SEQ_{currentIndex + 1}
              </div>
            </div>
            <div className="text-white/50 text-xs font-mono ml-8">Simulated Video Feed • RAW 4K</div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default function BRollPage() {
  const [activeVideoImages, setActiveVideoImages] = useState<string[] | null>(null);

  const videos = [
    {
      title: "Manufacturing Facility Overview",
      description: "High-definition aerial and interior shots of our Munich and Hyderabad production sites.",
      duration: "03:45",
      resolution: "4K UHD",
      thumbnail: "/assets/images/pharma_hero_mfg.png",
      images: [
        "/assets/images/pharma_hero_mfg.png",
        "/assets/images/mfg_2.jpg",
        "/assets/images/mfg_3.jpg"
      ]
    },
    {
      title: "Laboratory & R&D Operations",
      description: "Close-up b-roll of scientists, clean rooms, and automated testing equipment.",
      duration: "02:20",
      resolution: "1080p HD",
      thumbnail: "/assets/images/pharma_hero_lab.png",
      images: [
        "/assets/images/pharma_hero_lab.png",
        "/assets/images/lab_2.jpg",
        "/assets/images/lab_3.jpg"
      ]
    },
    {
      title: "Logistics & Supply Chain",
      description: "Footage of global distribution centers, automated packaging, and shipping.",
      duration: "01:55",
      resolution: "4K UHD",
      thumbnail: "/assets/images/pharma_hero_corporate.png",
      images: [
        "/assets/images/pharma_hero_corporate.png",
        "/assets/images/logistics_2.jpg",
        "/assets/images/logistics_3.jpg"
      ]
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
                onClick={() => setActiveVideoImages(video.images)}
              >
                <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
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

      {/* Video Modal (Simulated Video via Slideshow) */}
      {activeVideoImages && (
        <SlideShowModal 
          images={activeVideoImages} 
          onClose={() => setActiveVideoImages(null)} 
        />
      )}
    </div>
  );
}
