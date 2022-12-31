import Image from "next/image";
import SocialImg from "../public/Tasocial.png";
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
          src={SocialImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Group Task-Management</h2>
          <h3>Next.js | Firebase | Styled Components</h3>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-amber-500">Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using Next.js and served by a Firebase backend.
            Users are prompted to log in with their Google accounts and
            authenticated by a Google pop-up. They are able to message other
            users by searching for their e-mail in real-time, thanks to
            Firestore. Messages are timestamped and previous messages are stored
            within the backend so they can be referred to if needed. This
            project was my first attempt at using both Next.js and Firebase so I
            was able to learn the pros/ cons of each technology. In particular,
            I was able to utilize the ease of routing for Next.js (creating
            different routes for each individual chat) and the power of
            real-time database/ authentication of Firestore (authenticating
            through Google and receiving/ sending messages immediately).
          </p>
          <Link href="https://github.com/Tasdeed/tasocial">
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
                <RiRadioButtonFill className="pr-1" /> Styled Components
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back to main</p>
        </Link>
      </div>
    </div>
  );
};

export default slice;
