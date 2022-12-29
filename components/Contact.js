import Image from "next/image";
import {
  BsFillPersonLinesFill,
  BsGithub,
  BsLinkedin,
  BsMailbox,
} from "react-icons/bs";
import ContactImg from "../public/thom-milkovic.jpg";

const Contact = () => {
  return (
    <div className="w-full lg:h-screen">
      <div className="max-w-[1440px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-amber-500">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-300 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt=""
                />
              </div>
              <div>
                <h2 className="py-2">Tasdid Hossain</h2>
                <p>Software Engineer</p>
                <p className="py-4">
                  Available for Full-time positions. Let's talk!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-md shadow-gray-300 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                    <BsLinkedin />
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-300 p-6 cursor-pointer hover:scale-125 ease-in duration-300">
                    <BsGithub />
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;
