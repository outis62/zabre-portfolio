import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {FiDownload} from 'react-icons/fi'

const Home = () => {
  return (
    <section className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Developper</span>
          <h1 className="h1 mb-6">
            Hello I am <br/> <span className="text-accent">Boureima Zabre</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">I excel at creafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
          <Link href="https://mega.nz/file/1MlG3bpT#w5rc-HrqtHIrXSZ84E185VwuB3AWfXo515DBZt6t6vE" target="_blank">
            <Button type="button" variant="outline" size="lg" className="uppercase flex items-center gap-2"
            onClick={() =>
              alert(
                "Vous verrez maintenant un lien Mega.nz. Cliquez sur télécharger pour télécharger le CV au format PDF. Merci pour la visite !!",
              )
            }
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
          </Link>
            <div className="mb-8 xl:mb-0">
              <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
      <Stats /> 
    </section>
  )
}
export default Home