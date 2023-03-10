import Image from "next/image";
import SliceImg from "../public/Slice.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const slice = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={SliceImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Group Task-Management | "Slice"</h2>
          <h3>Next.js | Firebase | TailwindCSS</h3>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-amber-500">Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using Next.js, served by a Firebase backend, and
            hosted on Vercel. Users can manage tasks between numerous
            "ecosystems" that they create and invite other users to join. Visual
            representations of tasks completed are present in both the user's
            dashboard and within each ecosystem. There are 3 different types of
            ecosystems depending on the user's needs that have their point
            systems. Authentication is built on Firebase and real-time
            messaging/ task updates are possible due to Firestore. Wireframes
            were created using Figma and the GitHub issue board was used to keep
            track of each team member's current and past assignments.
          </p>
          <Link href="https://slice-task.vercel.app/">
            <button className="shadow-none px-8 py-2 mt-4 mr-1">
              Deployed Site
            </button>
          </Link>
          <Link href="https://github.com/2209-Capstone-Team-B/Slice">
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
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firestore
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TailwindCSS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> ChartJS
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

export default slice;
