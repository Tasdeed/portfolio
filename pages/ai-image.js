import Ai from "../public/Ai.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const ai = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Ai}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">AI-Generated Image Sharing</h2>
          <h3>React | MongoDB | TailwindCSS</h3>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-amber-500">Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React with a MongoDB backend. Users are
            able to generate their own images by writing prompts for whatever
            they want to see. They are then able to share their generation on
            the homepage for all users to see. There is also an option to
            download the image onto local devices from the homepage.
          </p>
          <br></br>
          <p>
            This project allowed me to learn more about openAI's DALL-E API as
            it was my first venture into artificial intelligence. I also learned
            about the similarities between PostgreSQL and MongoDB while
            utilizing Cloudinary to store my images on the cloud. My Node server
            and Vite frontend are both hosted on Vercel which improved startup
            performance.
          </p>
          <Link href="https://ai-images-community.vercel.app/">
            <button className="shadow-none px-8 py-2 mt-4 mr-1">
              Deployed Site
            </button>
          </Link>
          <Link href="https://github.com/Tasdeed/AI-Images-Full">
            <button className="shadow-none px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-300 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold p-2 text-amber-500">
              Technologies
            </p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React-Router
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Axios
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Cloudinary
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back to projects</p>
        </Link>
      </div>
    </div>
  );
};

export default ai;
