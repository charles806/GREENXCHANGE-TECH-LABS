"use client";

import Link from "next/link";
import Image from "next/image";
import { links } from "@/app/libs/constant/link";
//Image
import hero from "@/public/unnamed.png";
import testmonial_one from "@/public/testmonial1.png";
import aboutImage from "@/public/abot_section.png";
import project1 from "@/public/project1.png";
import project2 from "@/public/project2.png";
import project3 from "@/public/PROJECT3.png";
//UI
import CountUp from "@/component/UI/CountUp";
//Icons
import {
  LaptopMinimal,
  Smartphone,
  Code,
  Cpu,
  CloudUpload,
  Shield,
  Globe,
  Wrench,
  Brain,
  GraduationCap,
  Palette,
  Wallet,
  Zap,
  ShieldCheck,
  Star,
  Headset,
  MoveRight,
} from "lucide-react";
import { Button, Rating } from "@mui/material";
import { motion } from "motion/react";

const Home = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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

  return (
    <main className="min-h-screen mx-auto bg-[#e8e8e8] overflow-hidden">
      {/* Home Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12 md:py-20 mt-12">
        <div className="@container">
          <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
            <motion.div
              className="flex flex-col gap-8 @[864px]:flex-1"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
            >
              <div className="flex flex-col gap-4 text-left">
                <h1 className="text-[#111816] text-4xl font-black leading-tight tracking-tight @[480px]:text-6xl">
                  Innovative <br /> Technology <br /> Solutions for <br />
                  <span className="text-[#10b77f]">Modern Business</span>
                </h1>
                <p className="text-[#4b5e58] dark:text-gray-400 text-lg md:text-xl font-normal max-w-150 leading-relaxed">
                  Empowering your enterprise with cutting-edge software
                  engineering, cloud architecture, and digital transformation
                  tailored for the future.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={links[4].href}>
                  <button className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold tracking-wide shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
                    Get Started
                  </button>
                </Link>
                <Link href={links[2].href}>
                  <button className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-[#e5ecea] dark:bg-[#1e3a30] text-[#111816] dark:text-white text-base font-bold tracking-wide hover:bg-[#dbe6e2] dark:hover:bg-[#2a4d41] shadow-md hover:shadow-lg hover:shadow-green-500/30 transition-all">
                    View Services
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="w-full @[864px]:flex-1 h-75 @[864px]:h-120 bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl relative overflow-hidden"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              <Image
                src={hero}
                alt="Hero Image showcasing GreenXchange technology solutions"
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <motion.section
        className="bg-green-500 mx-auto w-full px-6 md:px-10 py-12 md:py-12 mt-12 border border-t"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-baseline">
                <CountUp
                  from={0}
                  to={25}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                />
                <span className="text-5xl md:text-7xl font-extrabold text-white ml-1">
                  +
                </span>
              </div>
              <span className="text-white/90 font-medium text-base md:text-lg leading-tight px-2">
                Happy Clients
              </span>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-baseline">
                <CountUp
                  from={0}
                  to={20}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                />
                <span className="text-5xl md:text-7xl font-extrabold text-white ml-1">
                  +
                </span>
              </div>
              <span className="text-white/90 font-medium text-base md:text-lg leading-tight px-2">
                Projects Completed
              </span>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="flex items-baseline">
                <CountUp
                  from={0}
                  to={5}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                />
                <span className="text-5xl md:text-7xl font-extrabold text-white ml-1">
                  +
                </span>
              </div>
              <span className="text-white/90 font-medium text-base md:text-lg leading-tight px-2">
                Years Experience
              </span>
            </div>

            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-baseline">
                <CountUp
                  from={0}
                  to={24}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
                />
                <span className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                  /7
                </span>
              </div>

              <span className="text-white/90 font-medium text-base md:text-lg leading-tight px-2">
                24/7 Support
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Service Section */}
      <section className="bg-white dark:bg-background-dark/50 py-20 border-y border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <motion.div
            className="flex flex-col gap-4 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-[#111816] text-3xl font-bold tracking-tight">
              Our Services
            </h1>
            <div className="h-1.5 w-20 bg-green-400 rounded-full"></div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Service 1 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <LaptopMinimal />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Web Development
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Custom web applications built with modern frameworks and high
                  performance.
                </p>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Smartphone />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Mobile App Development
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Seamless native and cross-platform experiences for iOS and
                  Android.
                </p>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Code />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Software Development
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Custom software solutions tailored to your business needs with
                  cutting-edge technologies.
                </p>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Cpu />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  AI / ML Services
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Advanced machine learning models and intelligent automation
                  systems.
                </p>
              </div>
            </motion.div>

            {/* Service 5 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <CloudUpload />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Cloud Services
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Scalable cloud infrastructure, migration, and optimized
                  management.
                </p>
              </div>
            </motion.div>

            {/* Service 6 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Shield />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Cybersecurity & Penetration Testing
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Enterprise-grade protection and proactive threat intelligence.
                </p>
              </div>
            </motion.div>

            {/* Service 7 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Globe />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Networking Services
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Reliable network design, setup, and optimization for seamless
                  connectivity.
                </p>
              </div>
            </motion.div>

            {/* Service 8 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Wrench />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Tech Support & Maintenance
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Ongoing technical support to keep your systems running
                  smoothly.
                </p>
              </div>
            </motion.div>

            {/* Service 9 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Brain />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Tech Consulting / IT Advisory
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Expert guidance to help you choose and implement the right
                  technologies..
                </p>
              </div>
            </motion.div>

            {/* Service 10 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <GraduationCap />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Education & Mentorship
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Practical training and mentorship to grow tech skills and
                  careers.
                </p>
              </div>
            </motion.div>

            {/* Service 11 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Palette />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Digital & Creative Services
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Branding, UI/UX, and creative designs that make your business
                  stand out.
                </p>
              </div>
            </motion.div>

            {/* Service 12 */}
            <motion.div variants={fadeInUp} className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
              <div className="text-green-600 font-semibold text-xl group-hover:scale-110 transition-transform duration-300">
                <Wallet />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#111816] text-lg font-bold">
                  Gift Card Services
                </h3>
                <p className="text-[#61897c] dark:text-gray-400 text-md leading-normal">
                  Secure digital gift cards for seamless payments and rewards.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-white to-gray-50/50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Column */}
            <motion.div
              className="order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-green-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-50"></div>
                <Image
                  src={aboutImage}
                  alt="About Section"
                  className="relative rounded-3xl shadow-2xl ring-1 ring-gray-200/50 group-hover:shadow-3xl group-hover:scale-[1.02] transition-all duration-500"
                />
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-500 leading-tight tracking-tight">
                  About Us
                </h2>
                <div className="w-20 h-1.5 bg-linear-to-r from-green-500 to-green-600 rounded-full"></div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                At Greenxchange Tech Labs, we build technology that
                works—efficiently, intelligently, and at scale. We specialize in
                delivering modern digital solutions that help businesses grow,
                adapt, and stay ahead in an ever-evolving tech landscape. From
                web and software development to AI-driven solutions and cloud
                technologies, our focus is simple: precision, speed, and
                quality.
              </p>

              {/* Mission & Vision Grid */}
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 pt-4">
                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">M</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Our Mission
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Deliver fast, precise, and cutting-edge technology solutions
                    that exceed expectations and drive real results.
                  </p>
                </div>

                <div className="bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl font-bold">V</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">
                      Our Vision
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Lead the future of innovation through AI and modern
                    technology, creating impactful digital solutions for a
                    smarter world.
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href={links[1].href}>
                  <Button className="flex! min-w-40! cursor-pointer! items-center! justify-center! rounded-xl! h-14! md:h-16! px-8! md:px-10! bg-primary! text-[#111816]! dark:text-white! text-base! md:text-lg! font-bold! tracking-wide! hover:bg-green-600! hover:text-white! shadow-lg! hover:shadow-2xl! hover:shadow-green-500/40! hover:scale-105! transition-all! duration-300! group!">
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      Learn More About Us
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-linear-to-b from-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16 lg:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block mb-4">
              <span className="text-green-600 text-sm md:text-base font-bold uppercase tracking-wider bg-green-50 px-4 py-2 rounded-full">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore some of our recent work where innovation meets execution.
              Each project showcases our commitment to quality and cutting-edge
              technology.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {/* Project Card 1 */}
            <motion.div variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-green-200 transition-all duration-500">
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <Image
                  src={project1}
                  alt="E-Commerce Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Legal-Gee
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Legal gee is a law AI that also works with Camera LLM for
                  picture analysis and Documents LLM that provides more info to
                  what has been giving using AI powered documents analysis
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-200">
                    Java
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                    R
                  </span>
                  <span className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full border border-purple-200">
                    Typescript
                  </span>
                  <span className="px-4 py-2 bg-orange-50 text-orange-700 text-sm font-semibold rounded-full border border-orange-200">
                    Tensorflow
                  </span>
                </div>

                {/* CTA Link */}
                <Link
                  href="https://legalgee.com"
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:text-green-700 group/link"
                >
                  <span className="border-b-2 border-transparent group-hover/link:border-green-600 transition-all duration-300">
                    View Project
                  </span>
                  <MoveRight />
                </Link>
              </div>
            </motion.div>

            {/* Project Card 2 */}
            <motion.div variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-green-200 transition-all duration-500">
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <Image
                  src={project2}
                  alt="AI-Powered Analytics Dashboard"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  Green Ai
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  Green Ai is a generalized AI that is accurate with different
                  modes like, humanize AI, Gpt detector and many more and
                  it&apos;s also used for normal research. Green AI was built
                  with
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-200">
                    Angular
                  </span>
                  <span className="px-4 py-2 bg-yellow-50 text-yellow-700 text-sm font-semibold rounded-full border border-yellow-200">
                    Typescript
                  </span>
                  <span className="px-4 py-2 bg-red-50 text-red-700 text-sm font-semibold rounded-full border border-red-200">
                    Python(scikit-learn)
                  </span>
                  <span className="px-4 py-2 bg-indigo-50 text-indigo-700 text-sm font-semibold rounded-full border border-indigo-200">
                    R
                  </span>
                </div>

                {/* CTA Link */}
                <Link
                  href="https://greenxai.vercel.app"
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:text-green-700 group/link"
                >
                  <span className="border-b-2 border-transparent group-hover/link:border-green-600 transition-all duration-300">
                    View Project
                  </span>
                  <MoveRight />
                </Link>
              </div>
            </motion.div>

            {/* Project Card 3 */}
            <motion.div variants={fadeInUp} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-200 hover:border-green-200 transition-all duration-500">
              <div className="relative overflow-hidden aspect-video bg-gray-100">
                <Image
                  src={project3}
                  alt="Healthcare Management System"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  GONAGRI
                </h3>
                <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
                  GONAGRI is a digital B2B marketplace designed to bridge the
                  gap between local farmers and commercial buyers. We empower
                  farmers with direct market access, fair pricing, and smart
                  tools, while providing buyers with a reliable, transparent
                  source for fresh, high-quality produce.
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-4 py-2 bg-green-50 text-green-700 text-sm font-semibold rounded-full border border-green-200">
                    Next.JS
                  </span>
                  <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full border border-blue-200">
                    Node.JS
                  </span>
                  <span className="px-4 py-2 bg-cyan-50 text-cyan-700 text-sm font-semibold rounded-full border border-cyan-200">
                    Posgress SQL
                  </span>
                  <span className="px-4 py-2 bg-pink-50 text-pink-700 text-sm font-semibold rounded-full border border-pink-200">
                    Express.JS
                  </span>
                </div>

                {/* CTA Link */}
                <Link
                  href="https://gonagri.vercel.app"
                  className="inline-flex items-center gap-2 text-green-600 font-bold text-lg hover:text-green-700 group/link"
                >
                  <span className="border-b-2 border-transparent group-hover/link:border-green-600 transition-all duration-300">
                    View Project
                  </span>
                  <MoveRight />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* View All Projects Button */}
          <div className="text-center">
            <Link href="/projects">
              <Button className="inline-flex! items-center! gap-3! px-10! py-6! md:px-12! md:py-7! bg-linear-to-r! from-green-500! to-green-600! text-white! text-lg! md:text-xl! font-bold! rounded-2xl! shadow-xl! hover:shadow-2xl! hover:shadow-green-500/40! hover:scale-105! transition-all! duration-300! group!">
                <span>View All Projects</span>
                <svg
                  className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <motion.section
        className="max-w-7xl mx-auto w-full px-6 md:px-10 py-20 @container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex flex-col gap-16">
          {/* Header */}
          <motion.div
            className="flex flex-col gap-5 text-center lg:text-left max-w-3xl mx-auto lg:mx-0"
            variants={fadeInLeft}
          >
            <h2 className="text-[#111816] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Why Choose Us
            </h2>
            <p className="text-[#4b5e58] text-lg md:text-xl leading-relaxed">
              We deliver excellence through a combination of elite talent,
              secure processes, and agile principles.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#111816] text-xl font-bold leading-snug">
                  Agile Methodology
                </h3>
                <p className="text-[#61897c] text-base font-normal leading-relaxed">
                  Fast, iterative development cycles that deliver value early.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#111816] text-xl font-bold leading-snug">
                  Enterprise-Grade
                </h3>
                <p className="text-[#61897c] text-base font-normal leading-relaxed">
                  Highest standards of data protection and compliance protocols.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Star className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#111816] text-xl font-bold leading-snug">
                  Expert Talent
                </h3>
                <p className="text-[#61897c] text-base font-normal leading-relaxed">
                  Our team consists of the top 1% industry software specialists.
                </p>
              </div>
            </motion.div>

            {/* Card 4 */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Headset className="w-6 h-6" />
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="text-[#111816] text-xl font-bold leading-snug">
                  24/7 Support
                </h3>
                <p className="text-[#61897c] text-base font-normal leading-relaxed">
                  Round-the-clock technical assistance and incident response.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonails */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-[#111816] text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Trusted by innovative leaders across various industries worldwide.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            {/* Testimonial Card 1 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-10 rounded-3xl shadow-md hover:shadow-xl border border-[#dbe6e2] hover:border-primary/30 flex flex-col gap-7 transition-all duration-300 group">
              <div className="flex gap-1 text-primary">
                <Rating
                  size="small"
                  readOnly
                  className="text-green-400! outline-green-300"
                />
              </div>
              <p className="text-gray-700 text-base md:text-lg italic leading-relaxed flex-grow">
                &quot;Greenxchange Tech Labs transformed our legacy platform
                into a high-performance cloud ecosystem. Their attention to
                detail is unmatched.&quot;
              </p>
              <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={testmonial_one}
                    alt="Marcus Thorne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#111816] text-lg">
                    Marcus Thorne
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">CTO, NexaCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-10 rounded-3xl shadow-md hover:shadow-xl border border-[#dbe6e2] hover:border-primary/30 flex flex-col gap-7 transition-all duration-300 group">
              <div className="flex gap-1 text-primary">
                <Rating
                  size="small"
                  readOnly
                  className="text-green-400! outline-green-300"
                />
              </div>
              <p className="text-gray-700 text-base md:text-lg italic leading-relaxed flex-grow">
                &quot;Greenxchange Tech Labs transformed our legacy platform
                into a high-performance cloud ecosystem. Their attention to
                detail is unmatched.&quot;
              </p>
              <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={testmonial_one}
                    alt="Marcus Thorne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#111816] text-lg">
                    Marcus Thorne
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">CTO, NexaCorp</p>
                </div>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-10 rounded-3xl shadow-md hover:shadow-xl border border-[#dbe6e2] hover:border-primary/30 flex flex-col gap-7 transition-all duration-300 group">
              <div className="flex gap-1 text-primary">
                <Rating
                  size="small"
                  readOnly
                  className="text-green-400! outline-green-300"
                />
              </div>
              <p className="text-gray-700 text-base md:text-lg italic leading-relaxed flex-grow">
                &quot;Greenxchange Tech Labs transformed our legacy platform
                into a high-performance cloud ecosystem. Their attention to
                detail is unmatched.&quot;
              </p>
              <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                  <Image
                    src={testmonial_one}
                    alt="Marcus Thorne"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-[#111816] text-lg">
                    Marcus Thorne
                  </p>
                  <p className="text-sm text-gray-500 mt-0.5">CTO, NexaCorp</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10 py-20 text-center">
        <motion.div
          className="bg-green-500 rounded-4xl p-12 md:p-20 flex flex-col items-center gap-8 shadow-2xl shadow-primary/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-white text-3xl md:text-5xl font-black max-w-200 leading-tight">
            Ready to Modernize Your Business?
          </h2>
          <p className="text-white/80 text-lg md:text-xl max-w-150">
            Join hundreds of industry leaders who have already transformed their
            digital capabilities with us.
          </p>
          <Link href={links[4].href}>
            <Button className="bg-white! text-green-500! px-10! py-5! rounded-full! font-bold! text-lg! hover:scale-105! transition-transform!">
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
