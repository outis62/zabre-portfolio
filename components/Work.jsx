import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";


function ActionButton({ href, icon: Icon, label, disabled }) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={disabled ? "#" : href}
            target="_blank"
            className={`work-action-btn${disabled ? " disabled" : ""}`}
          >
            <Icon />
          </Link>
        </TooltipTrigger>
        <TooltipContent><p>{label}</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}


export function ProjectInfo({ project, imgReady }) {
  const isLiveDisabled   = !project.live   || project.live   === "#";
  const isGithubDisabled = !project.github || project.github === "#";

  return (
    <div className="work-info-col">
      <div className={`work-num ${imgReady ? "accent-stroke" : ""}`}>
        {project.num}
      </div>

      <span className="work-category">{project.category}</span>

      <h2 className="work-project-title">{project.title}</h2>
      <p  className="work-desc">{project.description}</p>

      <div className="work-stack">
        {project.stack.map((name) => (
          <span key={name} className="work-tag">{name}</span>
        ))}
      </div>

      <div className="work-divider" />

      <div className="work-actions">
        <ActionButton href={project.live}   icon={BsArrowUpRight} label="Live project"        disabled={isLiveDisabled}   />
        <ActionButton href={project.github} icon={BsGithub}       label="GitHub repository"   disabled={isGithubDisabled} />
      </div>
    </div>
  );
}


function SlideImage({ project, onLoad }) {
  return (
    <div className="work-slide-wrap">
      <div className="work-slide-overlay" />
      <Image
        src={project.image}
        fill
        className="work-slide-img"
        alt={project.title}
        onLoad={onLoad}
      />
    </div>
  );
}

export function ProjectSlider({ projects, activeIndex, onSlideChange, onImageLoad }) {
  return (
    <div className="work-slider-col">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={onSlideChange}
        className="work-swiper"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={project.num}>
            <SlideImage
              project={project}
              onLoad={i === activeIndex ? onImageLoad : undefined}
            />
          </SwiperSlide>
        ))}

        <div className="work-counter">
          <span>{activeIndex + 1}</span> / {projects.length}
        </div>

        <WorkSliderBtns
          containerStyles="flex gap-2 absolute right-3 bottom-3 z-20"
          btnStyles="bg-[#e8c97e] hover:opacity-80 text-primary text-[18px] w-[38px] h-[38px] rounded-lg flex justify-center items-center transition-all"
        />
      </Swiper>
    </div>
  );
}