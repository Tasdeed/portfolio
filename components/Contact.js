import Image from "next/image";
import Link from "next/link";
import {
  BsFillPersonLinesFill,
  BsGithub,
  BsLinkedin,
  BsMailbox,
} from "react-icons/bs";
import { HiChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/thom-milkovic.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1440px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-amber-500">
          Contact
        </p>
        <h2 className="py-4">Get in Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-300 rounded-xl p-4">
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
                <div className="flex items-center justify-evenly py-4">
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
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="16"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 shadow-none">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="animate-bounce rounded-full shadow-md shadow-gray-300 p-4 cursor-pointer hover:scale-125 ease-in duration-300">
              <HiChevronDoubleUp className="text-amber-500" size={32} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
