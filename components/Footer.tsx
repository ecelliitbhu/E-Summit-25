import React, { FunctionComponent } from "react";
import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
interface OwnProps {}
type Props = OwnProps;
import Logo from "./logos/Logo.svg";

const Footer: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div
        className="bg-black text-white h-auto w-full flex md:flex-row flex-col justify-around items-start p-2 rounded-b-3xl"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/27aa/7f50/8f3153ba02db342062382a63bf906279?Expires=1702857600&Signature=ls4dL9BgWACGJ6cdzCv-zuZNzMvfHuIQD9WAIUXq2XM2BHC9pIw2mN94Wpfbt19R208NYEV8h9dWNhq7nNjuut4HoOBrptOjtP6cfqOa-jtZg~4LpB8~1ir~5wNV5HTa44-vTBefqSqKKocBjNHTo7dUUQgI1guOUHSOHs482P95w1VCjCqK6wctSpBkiB4~-1Ko2NKO0Yk4Po5QXb7o5JcjQxA0WLOZak-LYSWHiT3SeiWnjSy6HvNDVHb5mwdcaW~Rix9lnrDURgD4VyUTqHsEIFj2kOo2oZP5hnoyHBgiYEPyEZoFR-sDM9fguo0nmmNPFVLNr5PlQSXJycFMXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        }}
      >
        <div className="pt-5 pr-5 pl-5">
          <ul className="flex flex-col justify-start">
            <Image
              src={Logo}
              width={285}
              height={90}
              alt="logo"
              className="mr--5"
            />
            <div className="pb-10">
              <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2">
                Contact Us
              </h1>
              <div>
                <div>
                  <p className="text-blue-800 font-bold underline">
                    Parth Gupta
                  </p>
                  <p>
                    Vice President, E-Cell IIT BHU <br />
                    (+91) 9769523680
                  </p>
                </div>
                <p className="text-blue-800 font-bold underline">
                  Vanshika Gupta
                </p>
                <p>
                  Associate Vice President, E-Cell IIT BHU <br />
                  (+91) 8233380939
                </p>
              </div>
            </div>
            <div className="flex gap-7 pb-5">
              <a href="https://instagram.com/ecelliitbhu?igshid=MzMyNGUyNmU2YQ==">
                <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600 text-pink-400" />
              </a>
              <a href="https://twitter.com/ecelliitbhu">
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600 text-blue-400" />
              </a>
              <a href="https://www.linkedin.com/company/ecelliitbhu/mycompany/">
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600 text-blue-900" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 font-bold text-2xl pb-4">
              Links
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">
              <a href="https://www.ecelliitbhu.com/">Ecell IIT-BHU</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">
              <a href="">Startup Junction</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">
              <a href="">Novice Fiesta&apos;23</a>
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">
              Startup Concurso
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 font-bold text-2xl pb-4">
              About
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold">
              <p className="max-w-2xl mb-2">
                E-Cell IIT BHU (The Entrepreneurship Cell) supports
                entrepreneurship through resources, mentorship, networking, and
                events like workshops, competitions, and speaker sessions and
                fosters the overall startup ecosystem in the institute.
              </p>
              <p className="max-w-2xl">
                It is an institute body run by students devoted to acting as a
                link between budding entrepreneurs and the existing startup
                ecosystem. It is a hub where all startups can meet, collaborate
                and innovate.
              </p>
            </li>
          </ul>
        </div>
        <div className="p-5"></div>
      </div>
      <div
        className="flex flex-col justify-center align-middle items-center text-center  pt-0 pb-5 m-0"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/27aa/7f50/8f3153ba02db342062382a63bf906279?Expires=1702857600&Signature=ls4dL9BgWACGJ6cdzCv-zuZNzMvfHuIQD9WAIUXq2XM2BHC9pIw2mN94Wpfbt19R208NYEV8h9dWNhq7nNjuut4HoOBrptOjtP6cfqOa-jtZg~4LpB8~1ir~5wNV5HTa44-vTBefqSqKKocBjNHTo7dUUQgI1guOUHSOHs482P95w1VCjCqK6wctSpBkiB4~-1Ko2NKO0Yk4Po5QXb7o5JcjQxA0WLOZak-LYSWHiT3SeiWnjSy6HvNDVHb5mwdcaW~Rix9lnrDURgD4VyUTqHsEIFj2kOo2oZP5hnoyHBgiYEPyEZoFR-sDM9fguo0nmmNPFVLNr5PlQSXJycFMXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        }}
      >
        <h1 className=" text-gray-500 font-semibold">
          © 2024 ESummit-24(
          <span className="text-gray-500 font-semibold cursor-pointer">
            Ecell IIT BHU)
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
