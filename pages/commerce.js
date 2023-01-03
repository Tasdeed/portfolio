import CommerceImg from "../public/commerce.png";
import Image from "next/image";
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
          src={CommerceImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1440px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Group Task-Management</h2>
          <h3>React | PostgreSQL | Material UI</h3>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="text-amber-500">Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React with a PostgreSQL backend and state
            management using Redux. Users can add coffee to their carts with a
            guest cart and as a signed-in user with a consistent cart. There is
            a variety of coffee types with the database keeping track of each
            user's cart and their running totals on the checkout page. This
            project allowed my team and I to explore creating our first
            full-stack application from scratch along with the nuances of
            dividing tasks between members. We were able to deepen our knowledge
            of Redux and make backend calls, using Axios & Express,
            specifically.
          </p>
          <Link href="https://github.com/Cinnamon-graceShopper/cinnamon-graceShopper">
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
                <RiRadioButtonFill className="pr-1" /> PostgreSQL
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Axios
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Material UI
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Figma
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
