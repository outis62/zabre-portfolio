"use client"

import {FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaNodeJs, FaLaravel, FaPhp, FaPython, FaWordpress, FaJoomla, FaDrupal} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs, SiLivewire, SiOdoo, SiMysql, SiTypescript } from 'react-icons/si'
import {DiDjango} from 'react-icons/di'

const about = {
  title: "About me",
  description: "Passionate about technology and innovation, I specialize in web and mobile development, network systems engineering, and digital marketing. With a strong background in delivering tailored solutions and optimizing digital strategies, I am dedicated to creating seamless user experiences and driving business growth through cutting-edge technologies. Always eager to learn and adapt, I thrive in dynamic environments and aim to continuously improve my skills to meet the challenges of the ever-evolving tech landscape.",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Boureima Zabre"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+226) 74352563-62694878"
    },
    {
      fieldName: "Skype",
      fieldValue: "boureima.01"
    },
    {
      fieldName: "Email",
      fieldValue: "zabreboureima236@gmail.com"
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English"
    },
  ]
}

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: 'Over 2 years of hands-on experience in web & mobile development, network systems engineering, and digital marketing, driving impactful solutions and measurable results.',
  items:[
    {
      company: "Legrand Web Services",
      position: "Full stack developper",
      duration: "2024 - present"
    },
    {
      company: "Switch Maker",
      position: "Web developper stage",
      duration: "November 2023 - february 2024"
    },
    {
      company: "Simplon Burkina faso",
      position: "Full stack developper certification",
      duration: "february 2023 - november 2023"
    },
    {
      company: "Genyx group",
      position: "Web designer",
      duration: "2021 - 2022"
    },
    {
      company: "Datasys",
      position: "Telecom, Vsat, hard & soft maintain",
      duration: "2019 - 2020"
    },
  ]
}

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: 'My education has equipped me with the foundational knowledge and skills in, view my skills. I hold a degree in Licence 3 from Aube Nouvelle University (Ex: ISIG), where I gained a strong understanding of software & hardware development, network systems. My commitment to continuous learning allows me to stay updated with the latest industry trends and advancements',
  items:[
    {
      institution: "Simplon Burkina faso",
      degree: "Full stack developper certification",
      duration: "february 2023 - november 2023"
    },
    {
      institution: "Karay group (IC CANADA)",
      degree: "React native certification",
      duration: "jun 2023 - August 2023"
    },
    {
      institution: "Aube nouvelle university (ISIG)",
      degree: "Licence student",
      duration: "2016-2019"
    },
    {
      institution: "Groupe scolaire sainte colette (GSSC)",
      degree: "Post-university student",
      duration: "2010 - 2015"
    },
    
  ]
}

const skills = {
  title: "My skills",
  description: "Versatile expertise in web & mobile development, network systems engineering, and digital marketing strategies.",
  skilllist: [
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon:<SiLivewire/>,
      name:"livewire",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <FaLaravel/>,
      name: "laravel",
    },
    {
      icon: <FaBootstrap/>,
      name: "bootstrap",
    },
    {
      icon: <FaPhp />,
      name:"php",
    },
    {
      icon: <FaPython />,
      name:"python",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <DiDjango/>,
      name:"django",
    },
    {
      icon: <FaWordpress />,
      name: "wordpress",
    },
    {
      icon: <FaJoomla />,
      name: "joomla",
    },
    {
      icon: <FaDrupal />,
      name: "drupal",
    },
    {
      icon: <SiOdoo />,
      name: "odoo",
    }
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
import { icons } from 'lucide-react'

const Resume = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: {delay:2.4, duration:0.4, ease:"easeIn"}}}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs 
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'
          >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">
              Experience
            </TabsTrigger>

            <TabsTrigger value="education">
              Education
            </TabsTrigger>

            <TabsTrigger value="skills">
              Skills
            </TabsTrigger>
            
            <TabsTrigger value="about">
              About me
            </TabsTrigger>
          </TabsList>
          {/* Content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item, index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>


            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index)=>{
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skilllist.map((skill, index)=>{
                    return (
                      <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index)=>{
                    return (
                      <li key={index} 
                      className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl'>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume