"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TABS, ABOUT, EXPERIENCE, EDUCATION, SKILLS, DEFAULT_TAB } from "/config/resume.config";
import { TabNav, PanelHeader, TimelineCard, CardScrollGrid, SkillsGrid, AboutGrid } from "@/components/Resume";
import "/styles/resume.css";

const panelVariants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] } },
  exit:    { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

function renderPanel(activeId) {
  const tab = TABS.find((t) => t.id === activeId);

  const panels = {
    experience: (
      <>
        <PanelHeader eyebrow={tab.eyebrow} title={EXPERIENCE.title} description={EXPERIENCE.description} />
        <CardScrollGrid
          items={EXPERIENCE.items}
          renderCard={(item, i) => (
            <TimelineCard key={i} duration={item.duration} title={item.position} sub={item.company} />
          )}
        />
      </>
    ),
    education: (
      <>
        <PanelHeader eyebrow={tab.eyebrow} title={EDUCATION.title} description={EDUCATION.description} />
        <CardScrollGrid
          items={EDUCATION.items}
          renderCard={(item, i) => (
            <TimelineCard key={i} duration={item.duration} title={item.degree} sub={item.institution} />
          )}
        />
      </>
    ),
    skills: (
      <>
        <PanelHeader eyebrow={tab.eyebrow} title={SKILLS.title} description={SKILLS.description} />
        <SkillsGrid items={SKILLS.items} />
      </>
    ),
    about: (
      <>
        <PanelHeader eyebrow={tab.eyebrow} title={ABOUT.title} description={ABOUT.description} />
        <AboutGrid info={ABOUT.info} />
      </>
    ),
  };

  return panels[activeId] ?? null;
}

export default function Resume() {
  const [active, setActive] = useState(DEFAULT_TAB);

  return (
    <motion.div
      className="resume-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, ease: "easeIn" } }}
    >
      <div className="resume-inner">

        <TabNav tabs={TABS} active={active} onSelect={setActive} />

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {renderPanel(active)}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}