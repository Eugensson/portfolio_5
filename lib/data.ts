import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import UpworkBrandIcon from "@/public/assets/brands/upwork.png";
import FiverBrandIcon from "@/public/assets/brands/fiverr.png";
import BehanceBrandIcon from "@/public/assets/brands/behance.png";
import DribbbleBrandIcon from "@/public/assets/brands/dribbble.png";
import FreelancerBrandIcon from "@/public/assets/brands/freelancer.png";

import Project1 from "@/public/assets/projects/p1.webp";
import Project2 from "@/public/assets/projects/p2.webp";
import Project3 from "@/public/assets/projects/p3.webp";
import Project4 from "@/public/assets/projects/p4.webp";
import Project5 from "@/public/assets/projects/p5.webp";
import Project6 from "@/public/assets/projects/p6.webp";

import SkillImg1 from "@/public/assets/skills/html5.png";
import SkillImg2 from "@/public/assets/skills/css3.png";
import SkillImg3 from "@/public/assets/skills/js.png";
import SkillImg4 from "@/public/assets/skills/reactjs.png";
import SkillImg5 from "@/public/assets/skills/nextjs.png";
import SkillImg6 from "@/public/assets/skills/nodejs.png";
import SkillImg7 from "@/public/assets/skills/git.png";
import SkillImg8 from "@/public/assets/skills/figma.png";

import TestiImage1 from "@/public/assets/testimonials/testimonial-1.webp";
import TestiImage2 from "@/public/assets/testimonials/testimonial-2.webp";
import TestiImage3 from "@/public/assets/testimonials/testimonial-3.webp";

export const navLinks = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "portfolio", path: "portfolio" },
  { name: "services", path: "services" },
  { name: "testimonials", path: "testimonials" },
  { name: "contact", path: "contact" },
];

export const socialList = [
  { icon: FiYoutube, label: "Youtube", href: "https://youtube.com" },
  { icon: FiInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: FiGithub, label: "Github", href: "https://github.com" },
  { icon: FiDribbble, label: "Dribbble", href: "https://dribbble.com" },
];

export const brandList = [
  { img: FreelancerBrandIcon, label: "Freelancer", href: "" },
  { img: UpworkBrandIcon, label: "Upwork", href: "" },
  { img: FiverBrandIcon, label: "Fiverr", href: "" },
  { img: BehanceBrandIcon, label: "Behance", href: "" },
  { img: DribbbleBrandIcon, label: "Dribbble", href: "" },
];

export const projectsNav = [
  { name: "all" },
  { name: "UI/UX Design" },
  { name: "web development" },
  { name: "branding" },
];

export const projectList = [
  {
    id: "1",
    image: Project1,
    name: "Minimalist App Dashboard",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    name: "Next.js E-Commerce Platform",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "Creative Portfolio Landing Page",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "Modern Brand Identity Kit",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "Responsive Business Website",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "Music Streaming Web App",
    category: "web development",
  },
];

export const skillsList = [
  { image: SkillImg1, label: "HTML5" },
  { image: SkillImg2, label: "CSS3" },
  { image: SkillImg3, label: "JavaScript" },
  { image: SkillImg4, label: "ReactJS" },
  { image: SkillImg5, label: "NextJS" },
  { image: SkillImg6, label: "NodeJS" },
  { image: SkillImg7, label: "Git" },
  { image: SkillImg8, label: "Figma" },
];

export const serviceList = [
  {
    icon: FiLayout,
    name: "Web Design",
    description:
      "Custom website designs with modern layouts, intuitive navigation, and responsive interfaces that enhance user experience across all devices.",
  },
  {
    icon: FiSettings,
    name: "Web Development",
    description:
      "Scalable, fast, and secure websites built with the latest technologies to deliver high performance and seamless functionality for your business.",
  },
  {
    icon: FiPenTool,
    name: "Branding",
    description:
      "Unique brand identities with memorable logos, consistent visuals, and creative guidelines that help businesses stand out and connect with audiences.",
  },
  {
    icon: FiTag,
    name: "SEO",
    description:
      "Effective SEO strategies with keyword research, technical optimization, and content improvements that increase visibility and boost organic traffic.",
  },
];

export const testimonialList = [
  {
    id: "1",
    authorImg: TestiImage1,
    authorText:
      "Working with Jane was seamless from start to finish. Her web design expertise gave our platform a modern and engaging look while improving navigation and enhancing the overall user experience for our global audience.",
    authorName: "Olivia Carter",
    authorPosition: "Head of Design, Google",
  },
  {
    id: "2",
    authorImg: TestiImage2,
    authorText:
      "Jane’s development skills transformed our outdated website into a fast, scalable, and SEO-friendly solution. Her attention to detail and technical knowledge helped increase our visibility and attract new customers online effectively.",
    authorName: "VictoriaThompson",
    authorPosition: "Project Manager, Amazon",
  },
  {
    id: "3",
    authorImg: TestiImage3,
    authorText:
      "Our brand identity has never been stronger. Jane delivered creative visuals, consistent UI/UX, and branding materials that reflect our values. Her approach strengthened our digital presence and built trust with our customer base.",
    authorName: "Sophia Lee",
    authorPosition: "Marketing Director, Spotify",
  },
];

export const contactList = [
  {
    icon: FiMail,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at info@example.com",
  },
  {
    icon: FiMapPin,
    title: "Current Location",
    subtitle: "Berlin, Germany",
    description: "Serving clients worldwide",
  },
];
