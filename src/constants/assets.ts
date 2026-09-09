import customName from "../../public/custom-name.svg";

import {
  Home as HomeIcon,
  InfoCircle as AboutIcon,
  Document as ProjectsIcon,
  Sms as ContactIcon,
  Icon,
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
  email: 'onuorahchukwudi2@gmail.com',
  name: 'Onuorah Chukwudi Ndubisi',
  instagram: "https://www.instagram.com/negroworldgram/",
  chowdeckLink: 'https://chowdeck.com/store/ibadan-1/restaurants/negroworldibadanz77mjk',
  gbp: 'https://share.google/XFqx7ZNlM0bgakbDD',
  businessWebsite: 'https://negroworldfoods.com.ng',
  phone: '+2347066535558',
  pizzaImages: [
    "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/pizza4.jpg",
    "https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/Negropizza....%20Unveiling%20new%20flavor.jpg"
  ],
  WhatsappMessageLink: 'https://wa.me/2347066535558?text=Hi%20I%20saw%20your%20profile',
  ownerPotrait: 'https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/vertical.jpg',
  ownerImageSmiling: 'https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/negro.jpg',
  ownerOnTransparentBg: 'https://ozsaxqicerbsltduruog.supabase.co/storage/v1/object/public/portfolio-bucket/1e6170b4-2138-4f88-9ce1-c3bec2f4284e%20(2).png',
  quote: `When you truly believe in what you are doing, it shows. And it pays. Winners in life are those who are excited about where they're going.`
}

export const navLinks: NavLinks[] = [
  {
    title: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    title: "About",
    href: "/#about",
    icon: AboutIcon,
  },
  {
    title: "business",
    href: "/#business",
    icon: ProjectsIcon,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: ContactIcon,
  },
];
