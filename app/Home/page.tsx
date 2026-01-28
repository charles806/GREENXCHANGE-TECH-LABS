import Link from "next/link";
import Image from "next/image";
import { links } from "@/app/libs/constant/link";
//Image
import hero from "@/public/unnamed.png";
import testmonial_one from "@/public/testmonial1.png";
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
} from "lucide-react";
import { Rating } from "@mui/material";

const Home = async () => {
  return (
    <main className="min-h-screen mx-auto bg-[#e8e8e8]">
      {/* Home Section */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10 py-12 md:py-20 mt-12">
        <div className="@container">
          <div className="flex flex-col gap-10 @[864px]:flex-row items-center">
            <div className="flex flex-col gap-8 @[864px]:flex-1">
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
            </div>
            <div className="w-full @[864px]:flex-1 h-75 @[864px]:h-120 bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl relative overflow-hidden">
              <Image
                src={hero}
                alt="Hero Image showcasing GreenXchange technology solutions"
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="bg-green-500 mx-auto w-full px-6 md:px-10 py-12 md:py-12 mt-12 border border-t">
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
      </section>

      {/* Service Section */}
      <section className="bg-white dark:bg-background-dark/50 py-20 border-y border-[#e5e9e8]">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          <div className="flex flex-col gap-4 mb-12">
            <h1 className="text-[#111816] text-3xl font-bold tracking-tight">
              Our Services
            </h1>
            <div className="h-1.5 w-20 bg-green-400 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 2 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 3 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 4 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 5 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 6 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 7 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 8 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 9 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 10 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 11 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>

            {/* Service 12 */}
            <div className="group flex flex-col gap-4 rounded-xl border border-[#0ca871] bg-white  p-6 hover:shadow-xl hover:border-green-600 shadow-green-200 transition-all cursor-pointer">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto w-full px-6 md:px-10 py-20 @container">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="flex flex-col gap-5 text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <h2 className="text-[#111816] text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Why Choose Us
            </h2>
            <p className="text-[#4b5e58] text-lg md:text-xl leading-relaxed">
              We deliver excellence through a combination of elite talent,
              secure processes, and agile principles.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {/* Card 1 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
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
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
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
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
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
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-4 p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all duration-300 group cursor-pointer">
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
            </div>
          </div>
        </div>
      </section>

      {/* Testimonails */}
      <section className="bg-primary/5 py-24">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-[#111816] text-4xl md:text-5xl font-bold mb-5 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Trusted by innovative leaders across various industries worldwide.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="flex gap-8 overflow-x-auto pb-10 snap-x snap-mandatory no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
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
                &quot;Green Exchange Tech Labs transformed our legacy platform
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
                &quot;Green Exchange Tech Labs transformed our legacy platform
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
                &quot;Green Exchange Tech Labs transformed our legacy platform
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
          </div>
        </div>
      </section>

      {/*  */}
    </main>
  );
};

export default Home;
