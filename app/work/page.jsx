"use client";

import { motion } from "framer-motion";
import { PROJECTS }        from "/utils/projects.data";
import { useProjectSlider } from "/hooks/useProjectSlider";
import { ProjectInfo, ProjectSlider } from "@/components/Work";
import "/styles/work.css";

export default function Work() {
  const { index, imgReady, handleSlideChange, onImageLoad } =
    useProjectSlider(PROJECTS.length);

  const activeProject = PROJECTS[index];

  return (
    <motion.section
      className="work-root"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
    >
      <div className="work-inner">

        <header className="work-header">
          <p className="work-eyebrow">Portfolio</p>
          <h1 className="work-title">Selected <em>projects</em></h1>
        </header>

        <div className="work-grid">
          <ProjectInfo
            project={activeProject}
            imgReady={imgReady}
          />
          <ProjectSlider
            projects={PROJECTS}
            activeIndex={index}
            onSlideChange={handleSlideChange}
            onImageLoad={onImageLoad}
          />
        </div>

      </div>
    </motion.section>
  );
}