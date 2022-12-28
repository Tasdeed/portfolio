import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1440px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-amber-500">
          Skills
        </p>
        <h2 className="py-4">What I'm Working With</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/javascript.png"
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/react.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/postgres.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/nodejs.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js + Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/github.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/firebase.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/nextjs.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/tailwindcss.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/html.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/Skills/css3.png"
                  width="64"
                  height="64"
                  alt=""
                />
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

{
  /* <div id="skills" className="w-full lg:h-screen p-2">
  <div className="max-w-[1440px] mx-auto flex flex-col justify-center h-full">
    <p className="text-xl tracking-widest uppercase text-amber-500">Skills</p>
    <h2 className="py-4">What I Can Do</h2>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/javascript.png"
              width="64"
              height="64"
              alt="/"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>JavaScript</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/react.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>React</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/postgres.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>PostgreSQL</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/nodejs.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Node.js</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/github.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Git</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/firebase.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>Firebase</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/tailwindcss.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>TailwindCSS</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/html.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>HTML</h3>
          </div>
        </div>
      </div>
      <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="m-auto">
            <Image
              src="/../public/Skills/css3.png"
              width="64"
              height="64"
              alt=""
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>CSS</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */
}

export default Skills;
