"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/e-summit.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OwnProps {}

const nav = [
  {
    name: "ABOUT",
    link: "/#about",
  },
  {
    name: "EVENTS",
    link: "/events",
  },
  {
    name: "GUEST-TALKS",
    link: "/guest-talks",
  },
  {
    name: "PARTNERS",
    link: "/partners",
  },
  {
    name: "CONTACT US",
    link: "/contact",
  },
];

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (

    <header className={`w-full sticky top-0 z-10`}>
      <nav
        className={`w-full  ${
          scrolling ? "bg-black" : "bg-transparent"
        } z-10 opacity-95  md:absolute py-2 py-5`}
      >
        <div className="m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-around max-lg:justify-stretch gap-6 md:gap-0 relative max-lg:py-2">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="hidden peer"
            />
            <div className="w-full px-6 flex justify-evenly items-center lg:w-max md:px-0 gap-28">
              <Link
                href="/"
                aria-label="logo"
                className="flex -m-4 items-center"
              >
                <Image
                  src={logo}
                  style={{ width: "40px", height: "40px" }}
                  alt="E-Summit'24 logo"
                  className=" scale-150 md:ml-2 sm:w-32"
                />
              </Link>

              <div className="flex items-center lg:hidden max-h-10 mx-4">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative  p-6 -mr-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-6 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"
                  ></div>
                </label>
              </div>
            </div>

            <div
              className="hidden absolute top-full transition translate-y-1 lg:peer-checked:translate-y-0 lg:translate-y-0 right-0 
                    lg:top-0 lg:relative peer-checked:flex w-1/2 
                    lg:flex lg:flex-row flex-col
                    flex-wrap justify-end items-center 
                    gap-6 p-6 rounded-xl
                    bg-black dark:bg-gray-900 lg:gap-0
                    lg:p-0
                    lg:bg-transparent lg:w-auto"
            >
              <div className="text-black dark:text-white lg:pr-4 lg:w-auto w-full lg:pt-0 gap:0.7rem">
                <ul
                  className="
                            tracking-wide
                            font-light
                            text-2xl flex-col flex
                            lg:flex-row
                            gap-6 lg:gap-0"
                >
                  {nav.map((navigator, index) => {
                    return (
                      <li key={index}>
                        <Link href={navigator.link} className="no-underline">
                          <Button
                            className={
                              "text-white font-light dark:text-white hover:text-white hover:bg-gray-500 no-underline"
                            }
                            variant={"link"}
                          >
                            <span className="font-semibold">
                              {navigator.name}
                            </span>
                          </Button>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <Button
                type="button"

    <header className="w-[100%] sticky z-10 top-8 max-w-[76.5rem] m-auto lg:p-0 ">
      <nav className="w-full rounded-full z-10 bg-background  opacity-95  md:absolute fixed mt-1">
        <div className={"relative block px-8"}>
          <div
            className={
              "flex items-center justify-between w-[100%] h-[100%] p-3 gap-1 capitalize"
            }
          >
            <Link
              href="/"
              aria-label="logo"
              className="block w-8 -m-4 items-center"
            >
              <Image
                src={logo}
                style={{ width: "20px", height: "20px" }}
                alt="E-Summit'24 logo"
                className="scale-150 md:ml-2 sm:w-32"
              />
            </Link>
            <div className={"flex-shrink-1 block"}>
              <div

                className={
                  "flex items-center justify-between w-[100%] h-[100%] gap-1 capitalize"
                }
              >
                <div className={"hidden lg:block"}>
                  <ul
                    className={
                      "tracking-wide font-light text-2xl flex-col flex lg:flex-row flex-wrap justify-end items-center gap-6 lg:gap-0"
                    }
                  >
                    {nav.map((navigator, index) => {
                      return (
                        <li key={index}>
                          <Link href={navigator.link} className="no-underline">
                            <Button
                              className={"text-secondary font-light"}
                              variant={"link"}
                            >
                              <span className="">{navigator.name}</span>
                            </Button>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className={"hidden lg:block"}>
              <Link href={"/payment"} className="no-underline">
                <Button
                  type="button"
                  className={
                    "rounded-lg bg-gradient-to-r from-[#0A2E8F] via-[#0F498D] to-[#1A8589] text-white focus-visible:outline-none"
                  }
                >
                  Buy Passes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
