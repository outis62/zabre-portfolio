"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Legrand Web Services",
    description: "Site web vitrine de l'agence Legrand Web Services.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/main-web-lws.png",
    live: "https://legrandwebservices.com/",
    github: "https://legrandwebservices.com",
  },
  {
    num: "02",
    category: "Web App",
    title: "GSH Financement",
    description: "Plateforme de financement participatif.",
    stack: [{ name: "Laravel" }, { name: "Bootstrap" }, { name: "MySQL" }],
    image: "/assets/work/thumb6.png",
    live: "https://gsh.switch-maker.net/",
    github: "https://gsh.switch-maker.net/",
  },
  {
    num: "03",
    category: "Portfolio",
    title: "Zabre Portfolio",
    description: "Portfolio personnel Next.js.",
    stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
    image: "/assets/work/thumb7.png",
    live: "https://zabre-portfolio.vercel.app",
    github: "https://github.com/outis62/zabre-portfolio",
  },
  {
    num: "04",
    category: "Web App",
    title: "Gestion Universitaire",
    description: "Plateforme de gestion scolaire et universitaire.",
    stack: [{ name: "Laravel" }, { name: "Livewire" }, { name: "MySQL" }, { name: "Bootstrap" }],
    image: "/assets/work/thumb11.png",
    live: "",
    github: "https://github.com/outis62/Gestion-univ-livewire",
  },
  {
    num: "05",
    category: "WordPress",
    title: "Fondation Y2MA",
    description: "Site web de la fondation Y2MA.",
    stack: [{ name: "WordPress" }, { name: "MySQL" }],
    image: "/assets/work/thumb8.png",
    live: "https://fondationy2ma.com/",
    github: "https://fondationy2ma.com/",
  },
  {
    num: "06",
    category: "WordPress",
    title: "SAD Architecture",
    description: "Site web de SAD Architecture.",
    stack: [{ name: "WordPress" }, { name: "MySQL" }],
    image: "/assets/work/thumb9.png",
    live: "https://sadarchitecture.com/",
    github: "https://sadarchitecture.com/",
  },
  {
    num: "07",
    category: "Fullstack",
    title: "JVO Global Investments",
    description: "Site web de JVO Global Investments.",
    stack: [{ name: "WordPress" }, { name: "MySQL" }],
    image: "/assets/work/thumb11.png",
    live: "https://jvoglobal.com/",
    github: "https://jvoglobal.com/",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "Verduxe",
    description: "Site web de Verduxe.",
    stack: [{ name: "WordPress" }, { name: "MySQL" }],
    image: "/assets/work/thumb11.png",
    live: "https://verduxe.com/",
    github: "https://verduxe.com/",
  },
  {
    num: "09",
    category: "Fullstack",
    title: "Westago",
    description: "Site web de Westago.",
    stack: [{ name: "WordPress" }, { name: "Next.js" }, { name: "Laravel" }],
    image: "/assets/work/thumb11.png",
    live: "https://westago.com/",
    github: "https://westago.com/",
  },
  {
    num: "10",
    category: "Mobile App",
    title: "Manitese PFNL",
    description: "Application mobile de suivi PFNL-PUBW.",
    stack: [{ name: "React Native" }, { name: "Laravel" }],
    image: "/assets/work/thumb10.png",
    live: "https://play.google.com/store/apps/details?id=com.legrand_web_services.manitese&hl=en-US",
    github: "https://play.google.com/store/apps/details?id=com.legrand_web_services.manitese&hl=en-US",
  },
  {
    num: "11",
    category: "Mobile App",
    title: "YESIFAN",
    description: "Application mobile de rencontres YESIFAN.",
    stack: [{ name: "React Native" }],
    image: "/assets/work/thumb10.png",
    live: "#",
    github: "#",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleSlideChange = (swiper) => {
    setImgLoaded(false);
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .work-root {
          --accent: #e8c97e;
          --accent-dim: rgba(232,201,126,0.10);
          --accent-border: rgba(232,201,126,0.28);
          --surface: #1c1c20;
          --surface-2: #232328;
          --surface-3: #2a2a30;
          --border: rgba(255,255,255,0.07);
          --text: #f0ede8;
          --text-muted: rgba(240,237,232,0.45);
          --text-dim: rgba(240,237,232,0.65);
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          background: var(--surface);
          min-height: 100vh;
          padding: 4rem 1.5rem;
        }

        .work-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── Header ── */
        .work-header {
          margin-bottom: 3rem;
        }

        .work-eyebrow {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .work-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 400;
          line-height: 1.1;
          margin: 0 0 0.75rem;
        }

        .work-title em { font-style: italic; color: var(--accent); }

        /* ── Layout ── */
        .work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3.5rem;
          align-items: center;
        }

        @media (max-width: 860px) {
          .work-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .work-info-col { order: 2; }
          .work-slider-col { order: 1; width: 100%; }
        }

        /* ── Info column ── */
        .work-info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .work-num {
          font-family: 'DM Serif Display', serif;
          font-size: 5rem;
          line-height: 1;
          font-weight: 400;
          color: transparent;
          -webkit-text-stroke: 1px rgba(240,237,232,0.15);
          transition: -webkit-text-stroke-color 0.4s;
        }

        .work-num.accent-stroke {
          -webkit-text-stroke-color: rgba(232,201,126,0.4);
        }

        .work-category {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--accent);
          background: var(--accent-dim);
          border: 1px solid var(--accent-border);
          border-radius: 100px;
          padding: 0.3rem 0.85rem;
          width: fit-content;
        }

        .work-project-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 400;
          line-height: 1.2;
          margin: 0;
        }

        .work-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 300;
        }

        /* Stack tags */
        .work-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .work-tag {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-dim);
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 6px;
          padding: 0.3rem 0.7rem;
          transition: color 0.2s, border-color 0.2s;
        }

        .work-tag:hover {
          color: var(--accent);
          border-color: var(--accent-border);
        }

        /* Divider */
        .work-divider {
          height: 1px;
          background: var(--border);
        }

        /* Action buttons */
        .work-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .work-action-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: var(--surface-2);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          font-size: 1.1rem;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: pointer;
          text-decoration: none;
        }

        .work-action-btn:hover {
          color: var(--accent);
          border-color: var(--accent-border);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }

        .work-action-btn.disabled {
          opacity: 0.3;
          pointer-events: none;
        }

        /* ── Slider column ── */
        .work-slider-col {
          position: relative;
          width: 100%;
          min-width: 0;
        }

        .work-swiper {
          width: 100%;
        }

        .work-slide-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 14px;
          overflow: hidden;
          background: var(--surface-2);
          border: 1px solid var(--border);
        }

        @media (max-width: 860px) {
          .work-slide-wrap {
            aspect-ratio: 16 / 9;
          }
        }

        .work-slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(28,28,32,0.5) 0%, transparent 50%);
          z-index: 2;
          pointer-events: none;
        }

        .work-slide-img {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .work-slide-wrap:hover .work-slide-img {
          transform: scale(1.03);
        }

        /* Counter badge */
        .work-counter {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          z-index: 10;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: var(--text-muted);
          background: rgba(28,28,32,0.7);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border);
          border-radius: 100px;
          padding: 0.3rem 0.75rem;
        }

        .work-counter span { color: var(--accent); }
      `}</style>

      <motion.section
        className="work-root"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      >
        <div className="work-inner">

          {/* Header */}
          <div className="work-header">
            <p className="work-eyebrow">Portfolio</p>
            <h1 className="work-title">
              Selected <em>projects</em>
            </h1>
          </div>

          <div className="work-grid">

            {/* ── Info column ── */}
            <div className="work-info-col">
              <div className={`work-num ${imgLoaded ? "accent-stroke" : ""}`}>
                {project.num}
              </div>

              <div>
                <span className="work-category">{project.category}</span>
              </div>

              <h2 className="work-project-title">{project.title}</h2>
              <p className="work-desc">{project.description}</p>

              <div className="work-stack">
                {project.stack.map((item, i) => (
                  <span key={i} className="work-tag">{item.name}</span>
                ))}
              </div>

              <div className="work-divider" />

              <div className="work-actions">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.live || "#"}
                        target="_blank"
                        className={`work-action-btn${!project.live || project.live === "#" ? " disabled" : ""}`}
                      >
                        <BsArrowUpRight />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent><p>Live project</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={project.github || "#"}
                        target="_blank"
                        className={`work-action-btn${!project.github || project.github === "#" ? " disabled" : ""}`}
                      >
                        <BsGithub />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent><p>GitHub repository</p></TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            {/* ── Slider column ── */}
            <div className="work-slider-col">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                className="work-swiper"
              >
                {projects.map((p, index) => (
                  <SwiperSlide key={index}>
                    <div className="work-slide-wrap">
                      <div className="work-slide-overlay" />
                      <Image
                        src={p.image}
                        fill
                        className="work-slide-img"
                        alt={p.title}
                        onLoad={() => setImgLoaded(true)}
                      />
                    </div>
                  </SwiperSlide>
                ))}

               
                <div className="work-counter">
                  <span>{projects.indexOf(project) + 1}</span>
                  {" / "}
                  {projects.length}
                </div>

                <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-3 bottom-3 z-20"
                  btnStyles="bg-[#e8c97e] hover:opacity-80 text-primary text-[18px] w-[38px] h-[38px] rounded-lg flex justify-center items-center transition-all"
                />
              </Swiper>
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Work;