"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+226) 74352563 / 62694878",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zabreboureima236@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Karpala, Ouagadougou, Burkina Faso",
  },
]

import { motion } from "framer-motion"

const Contact = () => {
  return (
    <motion.section initial={{opacity: 0}} 
    animate={{opacity: 1, transition:{delay: 2.4, duration: 0.4, ease:"easeIn"}}}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let is work together</h3>
              <p className="text-white/60">Let&apos;s work together to bring your ideas to life. Whether you&apos;re looking to build a powerful website, optimize your digital strategy, or implement innovative solutions, I&apos;m here to collaborate and help you achieve your goals. Let&apos;s create something amazing together!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" name="firstname" placeholder="First name"/>
                <Input type="lastname" name="lastname" placeholder="Last name"/>
                <Input type="email" name="email" placeholder="Email address"/>
                <Input type="phone" name="phone" placeholder="Phone number"/>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">Network system ingeneer</SelectItem>
                    <SelectItem value="mst">Digital marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className="h-[200px]" placeholder="Tape your message here."/>
              <Button size="md" className="max-w-45 hover:text-white/80">Send message &#10230;</Button>
            </form>
          </div>
          {/* info */}
          
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact