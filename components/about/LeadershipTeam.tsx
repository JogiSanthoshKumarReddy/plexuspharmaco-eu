"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LeadershipTeam() {
  const team = [
    {
      name: "Dr. Avinash J. Aher",
      role: "Founder and CEO",
      image: "/pharma/assets/images/6960c9043c7cf.jpeg",
      bio: "Dr. Avinash holds a PhD in Neuroscience from Friedrich-Alexander-Universität (FAU), Germany, and is the author of 25 peer-reviewed scientific publications. With a rare blend of deep scientific expertise and entrepreneurial acumen, Dr. Avinash founded Plexuspharmaco GmbH in 2018 with a clear vision to advance innovation-driven, evidence-based healthcare solutions."
    },
    {
      name: "Mr. Arvind M. Ambre",
      role: "Managing Director",
      image: "/pharma/assets/images/6960c97dc04c3.jpeg",
      bio: "Mr. Arvind Ambre brings over 25+ years of extensive international business leadership to the Board, with deep expertise in cross-border strategy, mergers and acquisitions, joint ventures, and global partnerships. He holds a bachelor’s degree and an MBA in International Business from a reputed premier institution."
    }
  ];

  return (
    <section className="py-24 bg-brand-50" id="team">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-brand-700" />
            <span className="text-sm font-bold text-brand-700 uppercase tracking-widest">Our Leadership</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-brand-900 mb-6"
          >
            Guided by Vision, Driven by Science
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-brand-100"
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <a href="/business-enquiry" aria-label={`Connect with ${member.name}`} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white text-brand-900 hover:bg-accent-500 hover:text-white transition-colors shadow-lg">
                    <svg className="w-5 h-5 fill-current" aria-hidden="true" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-brand-900 mb-1">{member.name}</h3>
                <h4 className="text-accent-500 font-medium mb-6 uppercase tracking-wide text-sm">{member.role}</h4>
                <p className="text-brand-600 leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
