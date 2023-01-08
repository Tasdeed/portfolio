import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import JSImg from "../public/Skills/javascript.png";
import ReactImg from "../public/Skills/react.png";
import PGImg from "../public/Skills/postgres.png";
import NodeImg from "../public/Skills/nodejs.png";
import GitImg from "../public/Skills/github.png";
import FirebaseImg from "../public/Skills/firebase.png";
import NextImg from "../public/Skills/nextjs.png";
import TailwindImg from "../public/Skills/tailwindcss.png";
import HTMLImg from "../public/Skills/html.png";
import CSSImg from "../public/Skills/css3.png";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-amber-500">
          Skills
        </p>
        <h2 className="py-4">What I'm Working With</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JSImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={PGImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NodeImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js + Express</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GitImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={FirebaseImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TailwindImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTMLImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div
            data-aos="flip-down"
            data-aos-duration="800"
            className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSSImg} width="64" height="64" alt="" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
