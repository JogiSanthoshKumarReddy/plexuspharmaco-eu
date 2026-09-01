"use client";
import { useState } from "react";
import BreadcrumbHero from "@/components/common/BreadcrumbHero";
import { Download, PlayCircle, Film } from "lucide-react";
import Image from "next/image";
import VideoModalPlayer from "@/components/common/VideoModalPlayer";

export default function BRollPage() {
  const [selectedVideo, setSelectedVideo] = useState<{ videoUrl: string; posterUrl: string; title: string; description: string } | null>(null);

  const videos = [
    {
      title: "Manufacturing Facility Tour",
      description: "High-definition footage of our high-speed automated packaging, cleanrooms, and production lines.",
      duration: "03:45",
      resolution: "4K UHD",
      videoUrl: "/assets/videos/plexus_manufacturing_tour.mp4",
      filename: "Plexuspharmaco_Manufacturing_Tour_4K.mp4",
      thumbnail: "/assets/images/pharma_hero_mfg.png"
    },
    {
      title: "Laboratory & R&D Operations",
      description: "Analytical chemistry laboratories, formulation science, and cleanroom testing.",
      duration: "02:20",
      resolution: "1080p HD",
      videoUrl: "/assets/videos/plexus_rd_laboratory.mp4",
      filename: "Plexuspharmaco_RD_Laboratory_1080p.mp4",
      thumbnail: "/assets/images/pharma_hero_lab.png"
    },
    {
      title: "Logistics & Global Distribution",
      description: "Footage of GDP cold-chain warehouses, packaging automation, and shipping.",
      duration: "01:55",
      resolution: "4K UHD",
      videoUrl: "/assets/videos/plexus_global_logistics.mp4",
      filename: "Plexuspharmaco_Global_Logistics_4K.mp4",
      thumbnail: "/assets/images/pharma_hero_corporate.png"
    },
    {
      title: "Corporate Leadership Overview",
      description: "European headquarters, executive boardrooms, and strategic management operations.",
      duration: "04:10",
      resolution: "4K UHD",
      videoUrl: "/assets/videos/plexus_corporate_overview.mp4",
      filename: "Plexuspharmaco_Corporate_Overview_4K.mp4",
      thumbnail: "/assets/images/pharma_hero_corporate.png"
    },
    {
      title: "Quality Assurance & Testing",
      description: "HPLC testing, analytical batch release, and quality control procedures.",
      duration: "02:45",
      resolution: "1080p HD",
      videoUrl: "/assets/videos/plexus_quality_control.mp4",
      filename: "Plexuspharmaco_Quality_Control_1080p.mp4",
      thumbnail: "/assets/images/pharma_quality_control.png"
    },
    {
      title: "Sustainability & Green Manufacturing",
      description: "Solar installations, zero-liquid discharge water treatment, and eco packaging.",
      duration: "03:15",
      resolution: "4K UHD",
      videoUrl: "/assets/videos/plexus_sustainability_esg.mp4",
      filename: "Plexuspharmaco_Sustainability_ESG_4K.mp4",
      thumbnail: "/assets/images/pharma_hero_lab.png"
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
                onClick={() => setSelectedVideo({
                  videoUrl: video.videoUrl,
                  posterUrl: video.thumbnail,
                  title: video.title,
                  description: video.description
                })}
              >
                <div className="absolute inset-0 opacity-70 group-hover:opacity-50 transition-opacity">
                  <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-900/80 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-brand-600 transition-all border border-white/30 shadow-xl">
                    <PlayCircle className="w-8 h-8" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 px-2.5 py-1 bg-black/80 backdrop-blur-sm text-white text-xs font-bold rounded-lg border border-white/10">
                  {video.duration} • {video.resolution}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-brand-700 mb-3">
                  <Film className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Raw Broadcast Asset</span>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{video.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow font-light">{video.description}</p>
                
                <a 
                  href={video.videoUrl}
                  download={video.filename}
                  className="w-full py-3 flex items-center justify-center gap-2 bg-brand-50 hover:bg-brand-900 text-brand-700 hover:text-white font-bold rounded-xl transition-colors border border-brand-100 cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Download Raw File (.mp4)
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <VideoModalPlayer 
          videoUrl={selectedVideo.videoUrl}
          posterUrl={selectedVideo.posterUrl}
          title={selectedVideo.title}
          description={selectedVideo.description}
          onClose={() => setSelectedVideo(null)} 
        />
      )}
    </div>
  );
}
