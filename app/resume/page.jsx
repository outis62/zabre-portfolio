"use client";

import {
  FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs,
  FaLaravel, FaPhp, FaPython, FaWordpress, FaJoomla, FaDrupal,
} from "react-icons/fa";
import {
  SiTailwindcss, SiNextdotjs, SiLivewire, SiOdoo, SiMysql, SiTypescript,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About me",
  description:
    "Passionate about technology and innovation, I specialize in web and mobile development, network systems engineering, and digital marketing. With a strong background in delivering tailored solutions and optimizing digital strategies, I am dedicated to creating seamless user experiences and driving business growth through cutting-edge technologies.",
  info: [
    { fieldName: "Name",      fieldValue: "Boureima Zabre" },
    { fieldName: "Phone",     fieldValue: "(+226) 74352563 / 62694878" },
    { fieldName: "Skype",     fieldValue: "boureima.01" },
    { fieldName: "Email",     fieldValue: "zabreboureima236@gmail.com" },
    { fieldName: "Languages", fieldValue: "French, English" },
  ],
};

const experience = {
  title: "My experience",
  description:
    "Over 4 years of hands-on experience in web & mobile development, network systems engineering, and digital marketing.",
  items: [
    { company: "Legrand Web Services", position: "Full Stack Developer",                   duration: "2024 – Present" },
    { company: "Switch Maker",         position: "Web Developer Intern",                   duration: "Nov 2023 – Feb 2024" },
    { company: "Simplon Burkina Faso", position: "Full Stack Developer Certification",     duration: "Feb 2023 – Nov 2023" },
    { company: "Genyx Group",          position: "Web Designer",                           duration: "2021 – 2022" },
    { company: "Datasys",              position: "Telecom, VSAT & Hardware Maintenance",   duration: "2019 – 2020" },
  ],
};

const education = {
  title: "My education",
  description:
    "Equipped with a solid foundation in software & hardware development and network systems, with a commitment to continuous learning.",
  items: [
    { institution: "Simplon Burkina Faso",          degree: "Full Stack Developer Certification", duration: "Feb 2023 – Nov 2023" },
    { institution: "Karay Group (IC Canada)",        degree: "React Native Certification",         duration: "Jun 2023 – Aug 2023" },
    { institution: "Aube Nouvelle University (ISIG)",degree: "Licence (Bachelor's)",               duration: "2016 – 2019" },
    { institution: "Groupe Scolaire Sainte Colette", degree: "Secondary Education",                duration: "2010 – 2015" },
  ],
};

const skills = {
  title: "My skills",
  description: "Versatile expertise across the full stack, from frontend frameworks to backend systems and CMS platforms.",
  skilllist: [
    { icon: <FaHtml5 />,      name: "HTML 5" },
    { icon: <FaCss3 />,       name: "CSS 3" },
    { icon: <FaJs />,         name: "JavaScript" },
    { icon: <FaReact />,      name: "React.js" },
    { icon: <SiNextdotjs />,  name: "Next.js" },
    { icon: <SiTailwindcss />,name: "Tailwind CSS" },
    { icon: <SiLivewire />,   name: "Livewire" },
    { icon: <FaNodeJs />,     name: "Node.js" },
    { icon: <SiMysql />,      name: "MySQL" },
    { icon: <FaLaravel />,    name: "Laravel" },
    { icon: <FaBootstrap />,  name: "Bootstrap" },
    { icon: <FaPhp />,        name: "PHP" },
    { icon: <FaPython />,     name: "Python" },
    { icon: <SiTypescript />, name: "TypeScript" },
  
    { icon: <FaWordpress />,  name: "WordPress" },
    { icon: <FaJoomla />,     name: "Joomla" },
    { icon: <FaDrupal />,     name: "Drupal" },
    
  ],
};

const TABS = [
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "skills",     label: "Skills" },
  { id: "about",      label: "About me" },
];

const TimelineCard = ({ top, title, sub, duration }) => (
  <div className="resume-card">
    <span className="resume-card-duration">{duration}</span>
    <h4 className="resume-card-title">{title}</h4>
    <div className="resume-card-sub">
      <span className="resume-card-dot" />
      <span>{sub}</span>
    </div>
  </div>
);

const panelVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit:   { opacity: 0, y: -8,  transition: { duration: 0.2 } },
};

const Resume = () => {
  const [active, setActive] = useState("experience");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        .resume-root {
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

        .resume-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 3.5rem;
          align-items: start;
        }

        @media (max-width: 860px) {
          .resume-inner { grid-template-columns: 1fr; gap: 2rem; }
        }

        /* ── Tab nav ── */
        .tab-nav {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          position: sticky;
          top: 2rem;
        }

        @media (max-width: 860px) {
          .tab-nav { flex-direction: row; flex-wrap: wrap; position: static; }
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          border: none;
          background: transparent;
          color: var(--text-muted);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          text-align: left;
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: var(--text);
          background: var(--surface-2);
        }

        .tab-btn.active {
          color: var(--accent);
          background: var(--accent-dim);
        }

        .tab-btn-indicator {
          width: 3px;
          height: 16px;
          border-radius: 2px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.2s;
          flex-shrink: 0;
        }

        .tab-btn.active .tab-btn-indicator { opacity: 1; }

        /* ── Panel header ── */
        .panel-eyebrow {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 0.5rem;
        }

        .panel-title {
          font-family: 'DM Serif Display', serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 400;
          line-height: 1.15;
          margin: 0 0 0.75rem;
        }

        .panel-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 300;
          max-width: 540px;
          margin-bottom: 2rem;
        }

        /* ── Timeline cards ── */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 620px) { .cards-grid { grid-template-columns: 1fr; } }

        .resume-card {
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 1.4rem 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          transition: border-color 0.2s, background 0.2s;
        }

        .resume-card:hover {
          border-color: var(--accent-border);
          background: var(--surface-3);
        }

        .resume-card-duration {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .resume-card-title {
          font-size: 1rem;
          font-weight: 500;
          color: var(--text);
          line-height: 1.4;
          margin: 0;
          min-height: 2.8rem;
        }

        .resume-card-sub {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 300;
        }

        .resume-card-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent);
          flex-shrink: 0;
        }

        /* ── Skills grid ── */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
          gap: 0.75rem;
        }

        .skill-tile {
          background: var(--surface-2);
          border: 1px solid var(--border);
          border-radius: 10px;
          height: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 1.8rem;
          color: var(--text-muted);
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
          cursor: default;
        }

        .skill-tile:hover {
          color: var(--accent);
          border-color: var(--accent-border);
          background: var(--accent-dim);
          transform: translateY(-2px);
        }

        .skill-tile-name {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted);
          transition: color 0.2s;
        }

        .skill-tile:hover .skill-tile-name { color: var(--accent); }

        /* ── About info list ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }

        @media (max-width: 540px) { .about-grid { grid-template-columns: 1fr; } }

        .about-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          padding: 1rem 0;
          border-bottom: 1px solid var(--border);
        }

        .about-item:nth-last-child(-n+2) { border-bottom: none; }

        .about-field {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .about-value {
          font-size: 0.95rem;
          color: var(--text-dim);
          font-weight: 300;
        }
      `}</style>

      <motion.div
        className="resume-root"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
      >
        <div className="resume-inner">

          <nav className="tab-nav">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn${active === tab.id ? " active" : ""}`}
                onClick={() => setActive(tab.id)}
              >
                <span className="tab-btn-indicator" />
                {tab.label}
              </button>
            ))}
          </nav>

          <div>
            <AnimatePresence mode="wait">

              {active === "experience" && (
                <motion.div key="experience" variants={panelVariants} initial="hidden" animate="visible" exit="exit">
                  <p className="panel-eyebrow">Work history</p>
                  <h2 className="panel-title">{experience.title}</h2>
                  <p className="panel-desc">{experience.description}</p>
                  <ScrollArea className="h-[460px] pr-2 custom-scroll">
                    <div className="cards-grid">
                      {experience.items.map((item, i) => (
                        <TimelineCard
                          key={i}
                          duration={item.duration}
                          title={item.position}
                          sub={item.company}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              )}

              {active === "education" && (
                <motion.div key="education" variants={panelVariants} initial="hidden" animate="visible" exit="exit">
                  <p className="panel-eyebrow">Academic background</p>
                  <h2 className="panel-title">{education.title}</h2>
                  <p className="panel-desc">{education.description}</p>
                  <ScrollArea className="h-[460px] pr-2">
                    <div className="cards-grid">
                      {education.items.map((item, i) => (
                        <TimelineCard
                          key={i}
                          duration={item.duration}
                          title={item.degree}
                          sub={item.institution}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </motion.div>
              )}

              {active === "skills" && (
                <motion.div key="skills" variants={panelVariants} initial="hidden" animate="visible" exit="exit">
                  <p className="panel-eyebrow">Technical stack</p>
                  <h2 className="panel-title">{skills.title}</h2>
                  <p className="panel-desc">{skills.description}</p>
                  <TooltipProvider delayDuration={80}>
                    <div className="skills-grid">
                      {skills.skilllist.map((skill, i) => (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <div className="skill-tile">
                              {skill.icon}
                              <span className="skill-tile-name">{skill.name.split(" ")[0]}</span>
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      ))}
                    </div>
                  </TooltipProvider>
                </motion.div>
              )}

              {active === "about" && (
                <motion.div key="about" variants={panelVariants} initial="hidden" animate="visible" exit="exit">
                  <p className="panel-eyebrow">Who I am</p>
                  <h2 className="panel-title">{about.title}</h2>
                  <p className="panel-desc">{about.description}</p>
                  <div className="about-grid">
                    {about.info.map((item, i) => (
                      <div key={i} className="about-item">
                        <span className="about-field">{item.fieldName}</span>
                        <span className="about-value">{item.fieldValue}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </motion.div>
    </>
  );
};

export default Resume;