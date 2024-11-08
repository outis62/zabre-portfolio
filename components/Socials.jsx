import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebook} from 'react-icons/fa'


const socials = [
    {icon: <FaGithub />, path:"https://github.com/outis62"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/boureima-zabre-932aa71b0/"},
    {icon: <FaFacebook />, path:"https://www.facebook.com/share/19beRUG8fo/"},
    {icon: <FaTwitter />, path:"https://x.com/boureima_zabre"},
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