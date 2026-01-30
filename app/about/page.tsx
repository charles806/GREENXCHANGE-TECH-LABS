"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";

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

const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-white text-gray-900">

        {/* --- Hero Section --- */}
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/abtPage.png"
              alt="Green Exchange Tech Labs Office"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="container relative z-10 mx-auto px-6 text-center text-white">
            <motion.h1
              className="mb-4 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
              initial="hidden"
              animate="visible"
              variants={fadeInDown}
            >
              Innovative Technology <br /> Solutions for Modern Business
            </motion.h1>
            <motion.p
              className="mx-auto max-w-2xl text-lg md:text-xl text-gray-200"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Empowering enterprises with cutting-edge software engineering,
              cloud architecture, and digital transformation.
            </motion.p>
          </div>
        </section>

        {/* --- Mission & Vision Section --- */}
        <section className="py-20 px-6">
          <div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-20 items-center">
            {/* Mission Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-green-600">
                Who We Are
              </h2>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl text-gray-900">
                Architecting the Future of Digital Business
              </h3>
              <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                At Green Exchange Tech Labs, we don't just write code; we solve complex business problems.
                Our team of expert engineers and strategists is dedicated to delivering robust, scalable,
                and innovative solutions that drive growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We bridge the gap between visionary ideas and tangible reality, using the latest technologies
                to build systems that stand the test of time.
              </p>
            </motion.div>

            {/* Vision / Image or Graphic Area */}
            <motion.div
              className="relative h-full min-h-[300px] rounded-2xl bg-gray-50 p-8 shadow-sm border border-gray-100 flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <h4 className="mb-4 text-2xl font-bold text-gray-900">Our Vision</h4>
              <p className="text-gray-600 mb-8">
                To be the global catalyst for digital evolution, setting new standards
                for quality, integrity, and innovation in the tech industry.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-sm text-gray-500">Client Retention</div>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                  <div className="text-sm text-gray-500">Enterprise Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- What We Do Section --- */}
        <section className="bg-gray-50 py-20 px-6">
          <div className="container mx-auto">
            <motion.div
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-green-600">
                Our Expertise
              </h2>
              <h3 className="text-3xl font-bold md:text-4xl">
                What We Do
              </h3>
            </motion.div>

            <motion.div
              className="grid gap-8 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {/* Card 1 */}
              <motion.div
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Software Engineering</h4>
                <p className="text-gray-600">
                  Custom full-stack development using modern frameworks like React, Next.js, and Node.js.
                  We build performant, maintainable codebases.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Cloud Architecture</h4>
                <p className="text-gray-600">
                  Scalable, secure, and cost-effective cloud solutions on AWS, Azure, and Google Cloud.
                  Ensure your infrastructure enters the future ready.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
                variants={fadeInUp}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-gray-900">Digital Transformation</h4>
                <p className="text-gray-600">
                  Holistic strategies to modernize legacy systems, automate workflows, and
                  position your business as a digital-first leader.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* --- Why Choose Us Section --- */}
        <section className="py-20 px-6 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <motion.div
                className="md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInLeft}
              >
                <div className="relative h-[400px] w-full rounded-2xl bg-gray-900 overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-blue-600 opacity-90"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
                    <div>
                      <h4 className="text-white text-3xl font-bold mb-4">"Innovation Distinguishes Between A Leader And A Follower."</h4>
                      <p className="text-green-100 text-lg">- Steve Jobs</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInRight}
              >
                <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-green-600">
                  Our Values
                </h2>
                <h3 className="mb-8 text-3xl font-bold md:text-4xl text-gray-900">
                  Why Partner With Us?
                </h3>

                <div className="space-y-6">
                  {[
                    { title: "Professional", desc: "We adhere to the highest standards of engineering excellence and communication." },
                    { title: "Innovative", desc: "We don't follow trends; we help define them with creative technological application." },
                    { title: "Future-focused", desc: "Building solutions today that are ready for the challenges of tomorrow." },
                    { title: "Trustworthy", desc: "Transparent processes, honest timelines, and a commitment to your success." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Company Story (Short) --- */}
        <section className="bg-gray-50 py-20 px-6 text-center">
          <motion.div
            className="container mx-auto max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-green-600">
              Our Story
            </h2>
            <h3 className="mb-6 text-3xl font-bold md:text-4xl text-gray-900">
              From Concept to Code
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Green Exchange Tech Labs began with a simple idea: that technology should
              enhance human capability, not replace it. Founded by a group of passionate
              engineers, we've grown into a dynamic agency known for tackling the
              toughest digital challenges. We are driven by curiosity and united by
              a goal to build a smarter, more connected world.
            </p>
            <div className="h-1 w-24 bg-green-500 mx-auto rounded-full"></div>
          </motion.div>
        </section>

        {/* --- Call to Action --- */}
        <section className="py-24 px-6 bg-gray-900 text-white text-center">
          <motion.div
            className="container mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Ready to transform your business?
            </h2>
            <p className="mb-10 text-xl text-gray-400 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our
              innovative technology solutions.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:-translate-y-1"
            >
              Start a Project
            </a>
          </motion.div>
        </section>

      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
