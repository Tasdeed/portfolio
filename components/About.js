import Image from "next/image";
import laptop from "../public/nikita-kachanovsky.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1440px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-amber-500">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">
            I am a recent college graduate that decided to take the plunge into
            the world of software development. From the massive computer screens
            of my youth to the razor-sharp displays of today, I have been
            captivated by technology and spent countless days staying in the
            "know". The further I dived into programming with my first language
            (JavaScript), the deeper my love for learning and web development
            became.
          </p>
          <p className="py-2">
            I have been doing web development for a short period but coupled
            with the fantastic teachers and fellow engineers I have met, my
            knowledge goes beyond my years. I have experience working in teams
            of varying sizes, solo, and even for side businesses. I love doing
            photography outside in my free time and am always down for a video
            game session when I'm not learning new technology.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-md rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src={laptop}
            alt="Black computer setups >"
            height={500}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
