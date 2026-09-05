import customName from "../../public/custom-name.svg";

import {
  Home as HomeIcon,
  InfoCircle as AboutIcon,
  Document as ProjectsIcon,
  Sms as ContactIcon,
  Icon,
  Whatsapp,
} from "iconsax-reactjs";


export interface NavLinks {
  title: string;
  href: string;
  icon: Icon;
}


export const ASSETS = {
  customName,
};

export const infoData = {
  name: 'Onuorah Chukwudi Ndubisi',
  instagram: "https://www.instagram.com/negroworldgram/",
  gbp: 'https://share.google/XFqx7ZNlM0bgakbDD',
  businessWebsite: 'https://share.google/XFqx7ZNlM0bgakbDD',
  phone: '+2347066535558',
  WhatsappMessageLink: 'https://wa.me/2347066535558?text=Hi%20I%20saw%20your%20profile',
  ownerPotrait: 'https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/fake-potrait.jpg',
  ownerOnTransparentBg: 'https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/1e6170b4-2138-4f88-9ce1-c3bec2f4284e%20(2).png'
}

export const navLinks: NavLinks[] = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "About",
    href: "/about",
    icon: AboutIcon,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: ProjectsIcon,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: ContactIcon,
  },
];