import {
  FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs,
  FaLaravel, FaPhp, FaPython, FaWordpress, FaJoomla, FaDrupal,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiLivewire, SiMysql, SiTypescript } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import {
  Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ICON_MAP = {
  html5:      <FaHtml5 />,
  css3:       <FaCss3 />,
  javascript: <FaJs />,
  typescript: <SiTypescript />,
  react:      <FaReact />,
  nextjs:     <SiNextdotjs />,
  tailwind:   <SiTailwindcss />,
  bootstrap:  <FaBootstrap />,
  nodejs:     <FaNodeJs />,
  php:        <FaPhp />,
  laravel:    <FaLaravel />,
  livewire:   <SiLivewire />,
  python:     <FaPython />,
  django:     <DiDjango />,
  mysql:      <SiMysql />,
  wordpress:  <FaWordpress />,
  joomla:     <FaJoomla />,
  drupal:     <FaDrupal />,
};

export function TabNav({ tabs, active, onSelect }) {
  return (
    <nav className="tab-nav" aria-label="Resume sections">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`tab-btn${active === tab.id ? " active" : ""}`}
          onClick={() => onSelect(tab.id)}
          aria-current={active === tab.id ? "page" : undefined}
        >
          <span className="tab-btn-indicator" aria-hidden="true" />
          {tab.label}
        </button>
      ))}
    </nav>
  );
}

export function PanelHeader({ eyebrow, title, description }) {
  return (
    <>
      <p className="panel-eyebrow">{eyebrow}</p>
      <h2 className="panel-title">{title}</h2>
      <p className="panel-desc">{description}</p>
    </>
  );
}

export function TimelineCard({ duration, title, sub }) {
  return (
    <div className="resume-card">
      <span className="resume-card-duration">{duration}</span>
      <h4 className="resume-card-title">{title}</h4>
      <div className="resume-card-sub">
        <span className="resume-card-dot" aria-hidden="true" />
        <span>{sub}</span>
      </div>
    </div>
  );
}

export function CardScrollGrid({ items, renderCard }) {
  return (
    <ScrollArea className="h-[460px] pr-2">
      <div className="cards-grid">
        {items.map((item, i) => renderCard(item, i))}
      </div>
    </ScrollArea>
  );
}

export function SkillsGrid({ items }) {
  return (
    <TooltipProvider delayDuration={80}>
      <div className="skills-grid">
        {items.map((skill) => (
          <Tooltip key={skill.iconKey}>
            <TooltipTrigger asChild>
              <div className="skill-tile" role="img" aria-label={skill.name}>
                {ICON_MAP[skill.iconKey]}
                <span className="skill-tile-name">{skill.name.split(" ")[0]}</span>
              </div>
            </TooltipTrigger>
            <TooltipContent><p>{skill.name}</p></TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
export function AboutGrid({ info }) {
  return (
    <dl className="about-grid">
      {info.map((item) => (
        <div key={item.label} className="about-item">
          <dt className="about-field">{item.label}</dt>
          <dd className="about-value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}