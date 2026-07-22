import { FileText, Home, Plane, ShieldCheck, Smartphone, Wrench } from "lucide-react";
import type { IconType } from "../../types/icons";

export type BusinessItem = {
  title: string;
  description: string;
  to: string;
  icon: IconType;
  tag: string;
};

export const businesses: BusinessItem[] = [
  {
    title: "AARIS Online Services",
    description: "Government, certificates, registrations and digital document support.",
    to: "/online-services",
    icon: FileText,
    tag: "55+ Services",
  },
  {
    title: "AARIS Mobiles",
    description: "Mobiles, accessories, recharge, SIM services and repair guidance.",
    to: "/mobiles",
    icon: Smartphone,
    tag: "Sales & Support",
  },
  {
    title: "AARIS Home Appliances",
    description: "TV, AC, fridge, washing machine and household appliance support.",
    to: "/home-appliances",
    icon: Home,
    tag: "Home Essentials",
  },
  {
    title: "AARIS Tours & Travels",
    description: "Bus, train, flight ticket booking and holiday travel assistance.",
    to: "/tours-travels",
    icon: Plane,
    tag: "Booking Desk",
  },
];

export const trustStats = [
  { value: 10, suffix: "+", label: "Years Active" },
  { value: 10000, suffix: "+", label: "Customers Served" },
  { value: 4, suffix: "", label: "Business Branches" },
  { value: 55, suffix: "+", label: "Online Services" },
];

export const trustPoints = [
  { icon: ShieldCheck, title: "Verified Guidance", description: "Document checklist and process support before submission." },
  { icon: Wrench, title: "Practical Local Help", description: "Phone, WhatsApp and office support for everyday service needs." },
];
