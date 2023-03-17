import Image from "next/image";
import Link from "next/link";
import SliceImg from "../public/Slice.png";
import TasocialImg from "../public/Tasocial.png";
import CoffeeImg from "../public/commerce.png";
import AiImg from "../public/Ai.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1440px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-amber-500">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <p className="text-md tracking-wider py-2">Pro-tip: Hover over them!</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-amber-500 to-[#709dff]"
          >
            <Image
              className="rounded-xl group-hover:opacity-20"
              src={SliceImg}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Group Task-Management
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next.js | Firebase
              </p>
              <Link href="/slice">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-amber-500 to-[#709dff]"
          >
            <Image
              className="rounded-xl group-hover:opacity-20"
              src={AiImg}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                AI-Generated Image Sharing
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React | MongoDB
              </p>
              <Link href="/ai-image">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-amber-500 to-[#709dff]"
          >
            <Image
              className="rounded-xl group-hover:opacity-20"
              src={TasocialImg}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Real-time 1-1 Messaging
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next.js | Firebase
              </p>
              <Link href="/tasocial">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="800"
            className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-300 rounded-xl p-4 group hover:bg-gradient-to-r from-amber-500 to-[#709dff]"
          >
            <Image
              className="rounded-xl group-hover:opacity-20"
              src={CoffeeImg}
              alt=""
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Simple E-commerce
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                React | PostgreSQL
              </p>
              <Link href="/commerce">
                <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
