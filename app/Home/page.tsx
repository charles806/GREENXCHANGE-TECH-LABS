import Link from "next/link";
import Image from "next/image";
import { links } from "@/app/libs/constant/link";
import hero from "@/public/unnamed.png";

const Home = async () => {
  return (
    <main className="min-h-screen mx-auto">
      {/* Service Section */}
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
      {/* Service Section */}
      <section className="bg-white dark:bg-background-dark/50 py-20 border-y border-[#e5e9e8] dark:border-[#1e3a30]">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10">
          
        </div>
      </section>
    </main>
  );
};

export default Home;
