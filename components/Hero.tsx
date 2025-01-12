"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logos/esummit25-removebg-preview.png";
import Particle from "@/components/particle";
import { motion } from "framer-motion";
import Link from "next/link";
import Res from "@/public/reg.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface OwnProps { }

import "@/app/globals.css";

type Props = OwnProps;

const Hero: FunctionComponent<Props> = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        if (window.scrollY > 50 && !expanded) {
          setExpanded(true);
        }
      };

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      handleResize();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [expanded]);

  useEffect(() => {
    const mainDate = new Date("2025-01-31T00:00:00").getTime();

    const countdown = setInterval(() => {
      const current = new Date().getTime();
      const left = mainDate - current;

      if (left < 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(left / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((left % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const scale = scrollY > 50 ? 1.7 : 1;
  const smallScreenScale = scrollY > 10 ? 1.5 : 1;

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white relative my-10">
      <Particle />
      <div className="absolute text-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: isSmallScreen ? smallScreenScale : scale,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          style={{ marginTop: "15%" }}
        >
          <Image
            src={Logo}
            width={isSmallScreen ? 200 : 300}
            height={isSmallScreen ? 200 : 300}
            alt="logo"
            className="mx-auto"
          />
        </motion.div>
        <p className="mt-28 text-sm text-gray-300 mx-auto max-w-2xl hidden md:block font-bold">
          Are you one of those people working day and night on that one startup
          idea? Are you the one who wants to explore the world of
          entrepreneurship? You&apos;ve arrived at the proper location. You are
          wanted by us!
        </p>
        <p className="mt-4 text-2xl text-primary-foreground font-extrabold">
          31st Jan to 2nd Feb 2025
        </p>
        <motion.div
          className="mt-24 md:mt-10 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {expanded ? (
            <div className="flex flex-col gap-8">
              <div>
                <Link href={"/payment?type=esummit"} className="no-underline">
                  <motion.button
                    // onClick={handleRegisterClick}
                    className="bg-gradient-to-r from-purple-600 to-red-500 text-white px-16 py-3.5 rounded-full flex items-center justify-center font-extrabold transition-transform relative text-lg"
                    initial={{
                      width: "100px",
                      height: "50px",
                      borderRadius: "25px",
                      opacity: 0,
                    }}
                    animate={{
                      width: "400px",
                      height: "50px",
                      borderRadius: "25px",
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8, ease: "linear", delay: 1 }}
                  >
                    Register for E-Summit Passes
                  </motion.button>
                  <motion.div
                    className="absolute"
                    initial={{ x: 0, y: -50 }}
                    animate={{ x: 350 }}
                    transition={{
                      duration: 0.8,
                      ease: "linear",
                      delay: 1,
                    }}
                  >
                    <Image src={Res} alt="Arrow Icon" width={50} height={50} />
                  </motion.div>
                </Link>
              </div>
              <div>
                <Link
                  href={"/payment?type=StartupExpo"}
                  className="no-underline"
                >
                  <motion.button
                    // onClick={handleRegisterClick}
                    className="bg-gradient-to-r from-purple-600 to-red-500 text-white px-16 py-3.5 rounded-full flex items-center justify-center font-extrabold transition-transform relative text-lg"
                    initial={{
                      width: "100px",
                      height: "50px",
                      borderRadius: "25px",
                      opacity: 0,
                    }}
                    animate={{
                      width: "400px",
                      height: "50px",
                      borderRadius: "25px",
                      opacity: 1,
                    }}
                    transition={{ duration: 0.8, ease: "linear", delay: 1 }}
                  >
                    Register for Startup Expo
                  </motion.button>
                  <motion.div
                    className="absolute"
                    initial={{ x: 0, y: -50 }}
                    animate={{ x: 350 }}
                    transition={{
                      duration: 0.8,
                      ease: "linear",
                      delay: 1,
                    }}
                  >
                    <Image src={Res} alt="Arrow Icon" width={50} height={50} />
                  </motion.div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="rounded-full flex justify-center items-center bg-gradient-to-r from-purple-600 to-red-500 cursor-pointer mt-4">
              <Image src={Res} alt="Arrow Icon" width={50} height={50} />
            </div>
          )}
        </motion.div>
        <div className="mt-14 flex justify-center items-center gap-4 text-center">
          {["Days", "Hours", "Minutes", "Seconds"].map((unit, index) => (
            <div
              key={unit}
              className="bg-transparent flex flex-col justify-center items-center border-2 border-red-500 text-red-400 p-4 rounded-lg w-20"
            >
              <p className="text-2xl font-bold">
                {Object.values(timeLeft)[index]}
              </p>
              <p className="text-xs font-semibold">{unit.toUpperCase()}</p>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Hero;
