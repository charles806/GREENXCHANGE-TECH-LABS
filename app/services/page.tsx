"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import { ServiceLinks, links } from "@/app/libs/constant/link";
import { MoveRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/public/abtPage.png";

// Service Images
import webDevImg from "@/public/webdev.png";
import appDevImg from "@/public/appdev.png";
import softDevImg from "@/public/softwaredev.png";
import cyberSecImg from "@/public/cybersec.png";
import networkingImg from "@/public/networking.png";
import cloudImg from "@/public/cloud.png";
import aiImg from "@/public/ai.png";
import devOpsImg from "@/public/devops.png";
import techSupportImg from "@/public/techsupport.png";
import digitalCreativeImg from "@/public/design&crative.png";
import financeImg from "@/public/finivalservices.png";
import eduMentorImg from "@/public/edumentor.png";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

// Services Data
const servicesData = [
    {
        title: "Web Development",
        description: "High-performance, responsive websites and web applications built with modern frameworks to provide seamless digital experiences.",
        tools: ["React", "Next.js", "Tailwind CSS", "Node.js"],
        link: ServiceLinks.find(l => l.name === "Web Development")?.href || "/services/web-development",
        image: webDevImg,
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile solutions that connect your brand with users on any device, anywhere in the world.",
        tools: ["React Native", "Flutter", "iOS", "Android"],
        link: ServiceLinks.find(l => l.name === "Mobile App Development")?.href || "/services/mobile-app-development",
        image: appDevImg,
    },
    {
        title: "Software Development",
        description: "Tailored software solutions designed from the ground up to meet your specific business logic and scaling requirements.",
        tools: ["Python", "Java", "C#", "SQL"],
        link: ServiceLinks.find(l => l.name === "Software Development")?.href || "/services/software-development",
        image: softDevImg,
    },
    {
        title: "Cyber Security & Penetration Testing",
        description: "Advanced threat protection, vulnerability assessments, and 24/7 monitoring to keep your enterprise data safe.",
        tools: ["Kali Linux", "Wireshark", "Metasploit", "Audits"],
        link: ServiceLinks.find(l => l.name === "Cyber Security & Penetration Testing")?.href || "/services/cyber-security",
        image: cyberSecImg,
    },
    {
        title: "Networking",
        description: "Robust network architecture design, implementation, and optimization to ensure reliable and secure connectivity.",
        tools: ["Cisco", "Juniper", "Firewalls", "VPNs"],
        link: ServiceLinks.find(l => l.name === "Networking")?.href || "/services/networking",
        image: networkingImg,
    },
    {
        title: "Cloud Services",
        description: "Scalable cloud infrastructure, migration, and management services for AWS, Azure, and GCP to optimize efficiency.",
        tools: ["AWS", "Azure", "Docker", "Kubernetes"],
        link: ServiceLinks.find(l => l.name === "Cloud Services")?.href || "/services/cloud-services",
        image: cloudImg,
    },
    {
        title: "AI / ML",
        description: "Leverage intelligent algorithms and predictive models to automate workflows and gain deep business insights.",
        tools: ["TensorFlow", "PyTorch", "Tableau", "BigQuery"],
        link: ServiceLinks.find(l => l.name === "AI/ML")?.href || "/services/ai-ml",
        image: aiImg,
    },
    {
        title: "DevOps",
        description: "Streamline your development lifecycle with CI/CD pipelines, automation, and continuous monitoring.",
        tools: ["Jenkins", "GitLab", "Terraform", "Ansible"],
        link: ServiceLinks.find(l => l.name === "DevOps")?.href || "/services/devops",
        image: devOpsImg,
    },
    {
        title: "Tech Support",
        description: "Full-spectrum technical support and infrastructure maintenance so you can focus on growing your core business.",
        tools: ["Help Desk", "Remote Support", "Maintenance", "SLA"],
        link: ServiceLinks.find(l => l.name === "Tech Support")?.href || "/services/tech-support",
        image: techSupportImg,
    },
    {
        title: "Digital & Creative Services",
        description: "Branding, UI/UX design, and creative strategies that make your business stand out in a crowded market.",
        tools: ["Figma", "Adobe CC", "Blender", "Strategy"],
        link: ServiceLinks.find(l => l.name === "Digital & Creative Services")?.href || "/services/digital-creative",
        image: digitalCreativeImg,
    },
    {
        title: "Financial Digital Services",
        description: "Secure fintech solutions, payment gateway integration, and digital banking architectures.",
        tools: ["FinTech", "Blockchain", "Stripe", "PCI DSS"],
        link: ServiceLinks.find(l => l.name === "Financial Digital Services")?.href || "/services/financial-digital",
        image: financeImg,
    },
    {
        title: "Education & Mentorship",
        description: "Comprehensive training programs and mentorship to build the next generation of tech leaders.",
        tools: ["Workshops", "Bootcamps", "1-on-1", "Career Growth"],
        link: ServiceLinks.find(l => l.name === "Education & Mentorship")?.href || "/services/education-mentorship",
        image: eduMentorImg,
    },
];

const processSteps = [
    {
        step: "01",
        title: "Discovery / Research",
        description: "We analyze your requirements, goals, and challenges to create a comprehensive project plan.",
    },
    {
        step: "02",
        title: "Design",
        description: "Our team creates detailed wireframes, mockups, and technical specifications for your solution.",
    },
    {
        step: "03",
        title: "Development",
        description: "We build your solution using best practices, with regular updates and feedback sessions.",
    },
    {
        step: "04",
        title: "Deployment",
        description: "We deploy your solution and provide ongoing support to ensure optimal performance.",
    },
];

const ServicesPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 text-gray-900 overflow-hidden">

                {/* --- Hero Section --- */}
                <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden bg-gray-900">
                    <div className="absolute inset-0 z-0">
                        {/* Using the recycled About page image as a placeholder base, with a heavy overlay */}
                        <Image
                            src={heroBg}
                            alt="Technology Solutions"
                            fill
                            className="object-cover opacity-40"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-green-900/60 mix-blend-multiply" />
                    </div>

                    <div className="container relative z-10 mx-auto px-6 text-center text-white">
                        <motion.h1
                            className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            Comprehensive <br className="hidden md:block" />
                            <span className="text-green-400">Technology Solutions</span>
                        </motion.h1>
                        <motion.p
                            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                        >
                            Empowering your business with cutting-edge software, advanced tech architectures, and strategic IT consulting.
                        </motion.p>
                    </div>
                </section>

                {/* --- Services Section --- */}
                <section className="py-20 px-6">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-green-600 mb-3">Our Expertise</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Holistic Digital Services</h3>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                        >
                            {servicesData.map((service, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group cursor-pointer"
                                >
                                    {/* Service Image Area */}
                                    <div className="h-48 bg-gray-100 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                            {service.title}
                                        </h4>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Tools / Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {service.tools.map((tool, idx) => (
                                                <span key={idx} className="bg-gray-50 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Link */}
                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-700 mt-auto"
                                        >
                                            Learn More <MoveRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* --- Development Process Section --- */}
                <section className="py-20 px-6 bg-white border-t border-gray-200">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-green-600 mb-3">How We Work</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Our Development Process</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 cursor-default"
                                >
                                    <div className="text-5xl font-black text-gray-200 mb-4 select-none absolute top-4 right-4">
                                        {step.step}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                        <h4 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h4>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- CTA Section --- */}
                <section className="py-24 px-6 bg-gray-900 text-white text-center relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-green-600/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
                    </div>

                    <motion.div
                        className="container mx-auto relative z-10 max-w-3xl"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
                        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                            Transform your business with our expert technology solutions.
                            Let's discuss how we can help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <button className="w-full sm:w-auto px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 cursor-pointer">
                                    Start Your Project
                                </button>
                            </Link>
                            <Link href="/projects">
                                <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                                    View Our Work
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </section>

            </main>
            <Footer />
        </>
    );
};

export default ServicesPage;