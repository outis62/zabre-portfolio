import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebook} from 'react-icons/fa'


const socials = [
    {icon: <FaGithub />, path:"https://github.com/outis62"},
    {icon: <FaLinkedinIn />, path:""},
    {icon: <FaFacebook />, path:""},
    {icon: <FaTwitter />, path:""},
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index)=>{
        return <Link href={item.path} key={index} className={iconStyles}>{item.icon}</Link>
      })}
    </div>
  )
}

export default Socials