export interface Link {
    name: string;
    href: string;
}

export const links: Link[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];


export const ServiceLinks: Link[] = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Software Development", href: "/services/software-development" },
    { name: "Cyber Security & Penetration Testing", href: "/services/cyber-security" },
    { name: "Networking", href: "/services/networking" },
    { name: "Cloud Services", href: "/services/cloud-services" },
    {name: "AI/Data Analytics", href: "/services/ai-data-analytics"},
    {name: "DevOps", href: "/services/devops"},
    {name: "Tech Support", href: "/services/tech-support"},
    {name: "Digital & Creative Services", href: "/services/digital-creative"},
    {name: "Financial Digital Services", href: "/services/financial-digital"},
    
];