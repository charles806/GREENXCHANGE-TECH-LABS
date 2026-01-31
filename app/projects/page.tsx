"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import { MoveRight } from "lucide-react";

// Project Images
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/PROJECT3.png";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const projectsData = [
    // Real Projects
    {
        id: 1,
        title: "Legal-Gee",
        description: "Legal gee is a law AI that also works with Camera LLM for picture analysis and Documents LLM that provides more info to what has been giving using AI powered documents analysis",
        tools: ["Java", "R", "Typescript", "Tensorflow"],
        link: "https://legalgee.com",
        image: project1,
    },
    {
        id: 2,
        title: "Green Ai",
        description: "Green Ai is a generalized AI that is accurate with different modes like, humanize AI, Gpt detector and many more and it's also used for normal research.",
        tools: ["Angular", "Typescript", "Python", "R"],
        link: "https://greenxai.vercel.app",
        image: project2,
    },
    {
        id: 3,
        title: "GONAGRI",
        description: "GONAGRI is a digital B2B marketplace designed to bridge the gap between local farmers and commercial buyers, empowering farmers with direct market access.",
        tools: ["Next.JS", "Node.JS", "Posgress SQL", "Express.JS"],
        link: "https://gonagri.vercel.app",
        image: project3,
    },
    // Placeholders (4-12)
    ...Array.from({ length: 9 }).map((_, index) => ({
        id: index + 4,
        title: `Project Name ${index + 4}`,
        description: "This is a placeholder description for an upcoming project. Details regarding the scope, stack, and deliverables will be updated soon.",
        tools: ["React", "Tailwind", "Node.js"],
        link: "#",
        image: [project1, project2, project3][index % 3],
    })),
];

const ProjectsPage = () => {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 overflow-hidden">
                {/* --- Hero Section --- */}
                <section className="bg-gray-900 text-white py-20 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-green-900/10 z-0"></div>
                    <motion.div
                        className="container mx-auto relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            A showcase of our technical expertise and innovative solutions. Explore how we bring ideas to life.
                        </p>
                    </motion.div>
                </section>

                {/* --- Projects Grid --- */}
                <section className="py-16 md:py-24 px-6">
                    <div className="max-w-[1400px] mx-auto">
                        {/* Using a wider container to fit 4 responsive columns comfortably */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={staggerContainer}
                        >
                            {projectsData.map((project) => (
                                <motion.div
                                    key={project.id}
                                    variants={fadeInUp}
                                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 hover:border-green-200 transition-all duration-300 flex flex-col h-full"
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden aspect-video bg-gray-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        </div>
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {project.description}
                                        </p>

                                        {/* Tools */}
                                        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                            {project.tools.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2.5 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-200"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Button */}
                                        <Link
                                            href={project.link}
                                            target={project.link !== "#" ? "_blank" : "_self"}
                                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-green-600 font-bold border-2 border-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 group/btn"
                                        >
                                            View Project <MoveRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ProjectsPage;
