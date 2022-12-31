import Link from "next/link";
import {
  BsLinkedin,
  BsGithub,
  BsMailbox,
  BsFillPersonLinesFill,
} from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-white">
            Welcome to a part of me
          </p>
          <h1 className="py-4">
            Hi, I'm
            <span className="text-amber-500"> Tasdid</span>
          </h1>
          <h1 className="">Software Engineer & Web Developer</h1>
          <p className="py-4 sm:max-w-[70%] m-auto">
            I am a full-stack software engineer who loves creating simple, yet
            elegant, web applications. Currently, I am learning more about cloud
            computing with python while keeping my JavaScript (React, Node.js,
            Express) sharp through personal projects.
          </p>
          <div className="flex items-center justify-between max-w-[360px] m-auto py-4">
            <Link href="https://www.linkedin.com/in/tasdid/">
              <div className="rounded-full shadow-md shadow-gray-300 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <BsLinkedin />
              </div>
            </Link>
            <Link href="https://github.com/Tasdeed">
              <div className="rounded-full shadow-md shadow-gray-300 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                <BsGithub />
              </div>
            </Link>
            <div className="rounded-full shadow-md shadow-gray-300 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
              <BsMailbox />
            </div>
            <div className="rounded-full shadow-md shadow-gray-300 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
