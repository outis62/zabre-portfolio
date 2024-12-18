"use client"

import { motion } from "framer-motion"
import React, {useState} from "react"

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"

import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects = [
  {
    num: "01",
    category: "frontend",
    title:"project 1",
    Description: "Site web Legrand Web Services.",
    stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
    image: "/assets/work/main-web-lws.png",
    live: "https://legrandwebservices.com/",
    github:"https://legrandwebservices.com",
  },
  {
    num: "02",
    category: "fullstack",
    title:"project 2",
    Description: "Site de financements participatif",
    stack:[{name:"Laravel"}, {name:"Bootstrap.css"}, {name:"MySql"}],
    image: "/assets/work/thumb6.png",
    live: "https://gsh.switch-maker.net/",
    github:"https://gsh.switch-maker.net/",
  },
  {
    num: "03",
    category: "fullstack",
    title:"project 3",
    Description: "Portfolio",
    stack:[{name:"Next.js"}, {name:"Tailwind.css"}, {name:"Node.js"}],
    image: "/assets/work/thumb7.png",
    live: "https://zabre-portfolio.vercel.app",
    github:"https://github.com/outis62/zabre-portfolio",
  },
  {
    num: "04",
    category: "fullstack",
    title:"project 4",
    Description: "Plateforme de gestion scolaire et universitaire",
    stack:[{name:"Laravel"}, {name:"Livewire"}, {name:"MySql"}, {name:"Bootstrap"}],
    image: "/assets/work/thumb5.png",
    live: "",
    github:"https://github.com/outis62/Gestion-univ-livewire",
  },
  {
    num: "05",
    category: "fullstack",
    title:"project 5",
    Description: "Site web de la fondation Y2MA",
    stack:[{name:"Wordpress"}, {name:"MySql"},],
    image: "/assets/work/thumb8.png",
    live: "https://fondationy2ma.com/",
    github:"https://fondationy2ma.com/",
  },
  {
    num: "06",
    category: "fullstack",
    title:"project 56",
    Description: "Site web de SAD Architecture",
    stack:[{name:"Wordpress"}, {name:"MySql"},],
    image: "/assets/work/thumb9.png",
    live: "https://sadarchitecture.com/",
    github:"https://sadarchitecture.com/",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);

const handleSlideChange = (swiper) =>{
  // get current slide index
  const currentIndex = swiper.activeIndex;
  // update project state based on current slide index
  setProject(projects[currentIndex]);
}

  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                {/* projet description */}
                <p className="text-white/60">{project.Description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name} 
                      {/* remove the last comma */}
                      {index !== project.stack.length -1 && ","}
                    </li>
                  )
                })}
                </ul>
                {/* bodrder */}
                <div className="border border-white/20"></div>
                {/* button */}
                <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                  </TooltipProvider>
                </Link>
                </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
              >
              {projects.map((project, index)=>{
                return (
                  <SwiperSlide 
                    key={index}
                    className="w-full"
                    >
                    <div className="h-[460px] relative flex group justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work