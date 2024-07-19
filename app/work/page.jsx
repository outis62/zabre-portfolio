"use client"

import { motion } from "framer-motion"
import React, {useState} from "react"

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"

import {BsArrowUpRight, BsGithub} from 'react-icons/bs'
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import { Description } from "@radix-ui/react-dialog"


const projects = [
  {
    num: "01",
    category: "frontend",
    title:"project 1",
    Description: "venenatis ipsum dolor, risus. massa vel vestibulum adipiscing adipiscing luctus.",
    stack:[{name:"Html 5"}, {name:"Css 3"}, {name:"Javascript"}],
    image: "/assets/work/thumb1.png",
    live: "",
    github:"",
  },
  {
    num: "02",
    category: "fullstack",
    title:"project 2",
    Description: "venenatis ipsum dolor, risus. massa vel vestibulum adipiscing adipiscing luctus.",
    stack:[{name:"Laravel"}, {name:"Bootstrap.css"}, {name:"MySql"}],
    image: "/assets/work/thumb2.png",
    live: "",
    github:"",
  },
  {
    num: "03",
    category: "fullstack",
    title:"project 3",
    Description: "venenatis ipsum dolor, risus. massa vel vestibulum adipiscing adipiscing luctus.",
    stack:[{name:"Next.js"}, {name:"Tailwind.css"}, {name:"Node.js"}],
    image: "/assets/work/thumb3.png",
    live: "",
    github:"",
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full">
            text
          </div>
          <div className="w-full">
            slider
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work