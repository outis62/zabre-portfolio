
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Socials from "@/components/Socials";


export function HeroRole({ label }) {
  return <span className="text-xl">{label}</span>;
}

export function HeroHeadline({ name }) {
  return (
    <h1 className="h1 mb-6">
      Hello I&apos;m <br />
      <span className="text-[#e8c97e]">{name}</span>
    </h1>
  );
}

export function HeroTagline({ text }) {
  return (
    <p className="max-w-[500px] mb-9 text-white/80">{text}</p>
  );
}

export function CvButton({ href, className }) {
  return (
    <Link href={href} target="_blank">
      <Button variant="outline" size="lg" className={className}>
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </Link>
  );
}

export function HeroSocials({ iconStyles }) {
  return (
    <div className="mb-8 xl:mb-0">
      <Socials containerStyles="flex gap-6" iconStyles={iconStyles} />
    </div>
  );
}

export function HeroCta({ cvHref, cvButtonClass, socialIconClass }) {
  return (
    <div className="flex flex-col xl:flex-row items-center gap-8">
      <CvButton href={cvHref} className={cvButtonClass} />
      <HeroSocials iconStyles={socialIconClass} />
    </div>
  );
}

export function HeroText({ role, name, tagline, cvHref, cvButtonClass, socialIconClass }) {
  return (
    <div className="text-center xl:text-left order-2 xl:order-none">
      <HeroRole     label={role} />
      <HeroHeadline name={name} />
      <HeroTagline  text={tagline} />
      <HeroCta
        cvHref={cvHref}
        cvButtonClass={cvButtonClass}
        socialIconClass={socialIconClass}
      />
    </div>
  );
}