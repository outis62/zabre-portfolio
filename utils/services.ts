export const services = [
{
num: "01",
slug: "web-mobile-developer",
title: "Web & Mobile Developer",
description:
"Creative and tech-driven web & mobile developer focused on building powerful, user-centered digital solutions.",
tagline: "Powerful, user-centered digital experiences.",
longDescription: `From pixel-perfect landing pages to full-stack mobile apps, I design and build
digital products that are fast, accessible, and built to scale. Every project starts
with understanding your users and ends with clean, maintainable code.`,
stack: [
"React",
"Next.js",
"React Native",
"TypeScript",
"Tailwind CSS",
"Node.js",
],
deliverables: [
"Responsive web applications",
"Cross-platform mobile apps (iOS & Android)",
"REST & GraphQL API integration",
"Performance audits & optimizations",
],
},
{
num: "02",
slug: "network-system-engineer",
title: "Network & System Engineer",
description:
"Innovative Network System Engineer specializing in secure, high-performance network design and management.",
tagline: "Secure, high-performance infrastructure at any scale.",
longDescription: `I design, implement, and maintain network architectures that keep businesses
running without interruption. From on-premise setups to hybrid cloud environments,
security and reliability are always front and center.`,
stack: ["Cisco", "Linux", "Fortinet", "AWS", "Docker", "Wireshark"],
deliverables: [
"Network architecture design",
"Firewall & security hardening",
"VPN & remote-access solutions",
"Server deployment & monitoring",
],
},
{
num: "03",
slug: "digital-marketing",
title: "Digital Marketing",
description:
"Creative digital marketer driving growth through data-driven strategies and impactful online campaigns.",
tagline: "Data-driven growth. Measurable results.",
longDescription: `Great products deserve great visibility. I craft full-funnel digital marketing
strategies — from SEO and paid ads to social content and email sequences — that
attract the right audience and convert them into loyal customers.`,
stack: [
"Google Ads",
"Meta Ads",
"SEO",
"Mailchimp",
"Google Analytics",
"Figma",
],
deliverables: [
"Search & social ad campaigns",
"SEO audits & content strategy",
"Email marketing sequences",
"Monthly performance reporting",
],
},
{
num: "04",
slug: "web-developer",
title: "Web Developer",
description:
"Experienced web developer delivering responsive, high-quality websites and applications tailored to business needs.",
tagline: "Responsive, high-quality websites tailored to your business.",
longDescription: `Whether you need a corporate website, an e-commerce store, or a custom CMS,
I build web solutions that look great on every device and load in a flash. Clean
code, smooth animations, and a focus on conversion are my standard.`,
stack: [
"HTML/CSS",
"JavaScript",
"WordPress",
"Shopify",
"Webflow",
"PostgreSQL",
],
deliverables: [
"Custom website design & development",
"E-commerce stores",
"CMS integration & training",
"Ongoing maintenance & support",
],
},
];

export const getServiceBySlug = (slug) =>
services.find((s) => s.slug === slug);