"use client";

import React, { useState } from "react";
import Header from "@/component/layout/Header/Header";
import Footer from "@/component/layout/Footer/Footer";
import { ServiceLinks } from "@/app/libs/constant/link";
import { motion } from "motion/react";
import {
    MapPin,
    Phone,
    Mail,
    Instagram,
    Linkedin,
    Facebook,
    Send,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@mui/material";

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

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        service: "",
        details: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "2347046146228";
        const message = `Halo Greenxchange Tech Labs,%0a%0aMy name is ${formData.fullName}.%0aEmail: ${formData.email}%0aI am interested in: ${formData.service}%0a%0aProject Details:%0a${formData.details}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gray-50 pt-20">
                {/* --- Hero Section --- */}
                <section className="bg-green-900 text-white py-20 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 z-0"></div>
                    <motion.div
                        className="container mx-auto relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Have a project in mind or want to learn more about our services?
                            We’d love to hear from you. Let's build something amazing together.
                        </p>
                    </motion.div>
                </section>

                {/* --- Contact Content --- */}
                <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                        {/* --- Left Side: Contact Form --- */}
                        <motion.div
                            className="w-full lg:w-3/5 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInLeft}
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                {/* Full Name */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="fullName"
                                        className="text-sm font-semibold text-gray-700"
                                    >
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="email"
                                        className="text-sm font-semibold text-gray-700"
                                    >
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                                    />
                                </div>

                                {/* Service Selection */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="service"
                                        className="text-sm font-semibold text-gray-700"
                                    >
                                        Service Interested In <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        required
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all bg-white"
                                    >
                                        <option value="" disabled>
                                            Select a service...
                                        </option>
                                        {ServiceLinks.map((service, index) => (
                                            <option key={index} value={service.name}>
                                                {service.name}
                                            </option>
                                        ))}
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                {/* Project Details */}
                                <div className="flex flex-col gap-2">
                                    <label
                                        htmlFor="details"
                                        className="text-sm font-semibold text-gray-700"
                                    >
                                        Project Details <span className="text-gray-400 font-normal">(Optional)</span>
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={5}
                                        maxLength={1500} // allowing more than 300 words roughly
                                        value={formData.details}
                                        onChange={handleChange}
                                        placeholder="Tell us a bit about your project goals and requirements..."
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-y"
                                    ></textarea>
                                    <p className="text-xs text-right text-gray-500">
                                        Max 300 words recommended
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <Button
                                    type="submit"
                                    className="mt-4 flex! w-full! cursor-pointer! items-center! justify-center! rounded-xl! h-14! px-8! bg-green-600! text-white! text-lg! font-bold! tracking-wide! hover:bg-green-700! shadow-lg! hover:shadow-xl! hover:shadow-green-500/40! transition-all! duration-300! group!"
                                >
                                    <span className="mr-2">Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </motion.div>

                        {/* --- Right Side: Contact Info --- */}
                        <motion.div
                            className="w-full lg:w-2/5 flex flex-col gap-10"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInRight}
                        >
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                    We are available for new projects and collaborations. Reach out
                                    to us through any of the channels below.
                                </p>

                                <div className="flex flex-col gap-8">
                                    {/* Email */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                                                Email
                                            </p>
                                            <a
                                                href="mailto:greensxchangetechnologies@gmail.com"
                                                className="text-lg text-gray-700 hover:text-green-600 transition-colors break-all"
                                            >
                                                greensxchangetechnologies@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <Phone className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                                                Phone
                                            </p>
                                            <a
                                                href="tel:+2347046146228"
                                                className="text-lg text-gray-700 hover:text-green-600 transition-colors"
                                            >
                                                +234 704 614 6228
                                            </a>
                                        </div>
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
                                                Location
                                            </p>
                                            <p className="text-lg text-gray-700">Lagos, Nigeria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    Follow Us
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Stay updated with our latest projects and news on social media.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-white text-green-700 shadow-sm flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-white text-green-700 shadow-sm flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 rounded-full bg-white text-green-700 shadow-sm flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default ContactPage;
