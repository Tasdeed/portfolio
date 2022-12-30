import Image from "next/image";
import SliceImg from "../public/Slice.png";

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
          <h2 className="py-2">Group Task-Management</h2>
          <h3>Next.js | Firebase | TailwindCSS | Material UI</h3>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="">Project</p>
          <h2>Overview</h2>
          <p></p>
          <button className="shadow-none px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-lg shadow-gray-300 rounded-xl p-4">
          <div className="p-2">
            <p>Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default slice;
