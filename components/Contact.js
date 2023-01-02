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
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name,
      number,
      email,
      subject,
      message,
      submitted,
    };
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
        setSubject("");
      }
    });

    const form = document.getElementById("contact_email");
    form.reset();
  };

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
                  Available for full-time positions, apprencticeships, & any
                  roles that will help me learn!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-evenly py-4">
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
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-300 rounded-xl lg:p-4">
            <div className="p-4">
              <form id="contact_email">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                      type="text"
                      name="number"
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 text-black"
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 text-black"
                    rows="16"
                    type="text"
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="w-full p-4 text-gray-100 mt-4 shadow-none"
                >
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
