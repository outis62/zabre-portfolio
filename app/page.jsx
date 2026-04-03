import Photo  from "@/components/Photo";
import Stats  from "@/components/Stats";
import { HeroText } from "@/components/Home";
import { HERO, STYLES } from "/config/home.config";

const Home = () => (
  <section className="container mx-auto h-full">

    <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
      <HeroText
        role={HERO.role}
        name={HERO.name}
        tagline={HERO.tagline}
        cvHref={HERO.cvUrl}
        cvButtonClass={STYLES.cvButton}
        socialIconClass={STYLES.socialIcon}
      />

      <div className="order-1 xl:order-none mb-8 xl:mb-0">
        <Photo />
      </div>
    </div>

    <Stats />

  </section>
);

export default Home;