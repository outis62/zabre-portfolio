export const TABS = [
  { id: "experience", label: "Experience",  eyebrow: "Work history" },
  { id: "education",  label: "Education",   eyebrow: "Academic background" },
  { id: "skills",     label: "Skills",      eyebrow: "Technical stack" },
  { id: "about",      label: "About me",    eyebrow: "Who I am" },
];

export const ABOUT = {
  title: "About me",
  description:
    "Passionate about technology and innovation, I specialize in web and mobile development, network systems engineering, and digital marketing. With a strong background in delivering tailored solutions and optimizing digital strategies, I am dedicated to creating seamless user experiences and driving business growth through cutting-edge technologies.",
  info: [
    { label: "Name",      value: "Boureima Zabre" },
    { label: "Phone",     value: "(+226) 74352563 / 62694878" },
    { label: "Skype",     value: "boureima.01" },
    { label: "Email",     value: "zabreboureima236@gmail.com" },
    { label: "Languages", value: "French, English" },
  ],
};

export const EXPERIENCE = {
  title: "My experience",
  description:
    "Over 4 years of hands-on experience in web & mobile development, network systems engineering, and digital marketing.",
  items: [
    { company: "Legrand Web Services", position: "Full Stack Developer",                 duration: "2024 – Present" },
    { company: "Switch Maker",         position: "Web Developer Intern",                 duration: "Nov 2023 – Feb 2024" },
    { company: "Simplon Burkina Faso", position: "Full Stack Developer Certification",   duration: "Feb 2023 – Nov 2023" },
    { company: "Genyx Group",          position: "Web Designer",                         duration: "2021 – 2022" },
    { company: "Datasys",              position: "Telecom, VSAT & Hardware Maintenance", duration: "2019 – 2020" },
  ],
};

export const EDUCATION = {
  title: "My education",
  description:
    "Equipped with a solid foundation in software & hardware development and network systems, with a commitment to continuous learning.",
  items: [
    { institution: "Simplon Burkina Faso",           degree: "Full Stack Developer Certification", duration: "Feb 2023 – Nov 2023" },
    { institution: "Karay Group (IC Canada)",         degree: "React Native Certification",         duration: "Jun 2023 – Aug 2023" },
    { institution: "Aube Nouvelle University (ISIG)", degree: "Licence (Bachelor's)",               duration: "2016 – 2019" },
    { institution: "Groupe Scolaire Sainte Colette",  degree: "Secondary Education",                duration: "2010 – 2015" },
  ],
};

export const SKILLS = {
  title: "My skills",
  description: "Versatile expertise across the full stack, from frontend frameworks to backend systems and CMS platforms.",
  items: [
    { iconKey: "html5",      name: "HTML 5" },
    { iconKey: "css3",       name: "CSS 3" },
    { iconKey: "javascript", name: "JavaScript" },
    { iconKey: "typescript", name: "TypeScript" },
    { iconKey: "react",      name: "React.js" },
    { iconKey: "nextjs",     name: "Next.js" },
    { iconKey: "tailwind",   name: "Tailwind CSS" },
    { iconKey: "bootstrap",  name: "Bootstrap" },
    { iconKey: "nodejs",     name: "Node.js" },
    { iconKey: "php",        name: "PHP" },
    { iconKey: "laravel",    name: "Laravel" },
    { iconKey: "livewire",   name: "Livewire" },
    { iconKey: "python",     name: "Python" },
    { iconKey: "django",     name: "Django" },
    { iconKey: "mysql",      name: "MySQL" },
    { iconKey: "wordpress",  name: "WordPress" },
    { iconKey: "joomla",     name: "Joomla" },
    { iconKey: "drupal",     name: "Drupal" },
  ],
};

export const DEFAULT_TAB = "experience";