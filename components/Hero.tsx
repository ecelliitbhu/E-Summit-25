"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/public/logos/new-logo.png";
import Particle from "@/components/particle";
import { motion } from "framer-motion";
import Link from "next/link";
import Res from "@/public/reg.png";

interface OwnProps {}

import "@/app/globals.css";

type Props = OwnProps;

const Hero: FunctionComponent<Props> = () => {
  const [scrollY, setScrollY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setScrollY(window.scrollY);
        if (window.scrollY > 300 && !expanded) {
          setExpanded(true);
        }
      };

      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 640);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Initialize screen size on mount
      handleResize();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [expanded]);

  const scale = scrollY > 50 ? 1.7 : 1;
  const smallScreenScale = scrollY > 50 ? 1.5 : 1;

  return (
    <div className="min-h-screen flex justify-center items-center bg-black text-white relative">
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
        >
          <Image
            src={Logo}
            width={isSmallScreen ? 200 : 300}
            height={isSmallScreen ? 200 : 300}
            alt="logo"
            className="mx-auto"
          />
        </motion.div>
        <p className="mt-28 text-sm text-gray-300 mx-auto max-w-2xl hidden md:block">
          Are you one of those people working day and night on that one startup
          idea? Are you the one who wants to explore the world of
          entrepreneurship? You&apos;ve arrived at the proper location. You are
          wanted by us!
        </p>
        <motion.div
          className="mt-24 md:mt-10 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          {expanded ? (
            <Link href={"/payment"} className="no-underline">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-red-500 text-white px-16 py-3.5 rounded-full flex items-center justify-center font-extrabold transition-transform relative text-lg"
                initial={{
                  width: "100px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                animate={{
                  width: "300px",
                  height: "50px",
                  borderRadius: "25px",
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              >
                Register
                <motion.div
                  className="absolute"
                  initial={{ x: 0 }}
                  animate={{ x: 125 }}
                  transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                  }}
                >
                  <Image src={Res} alt="Arrow Icon" width={50} height={50} />
                </motion.div>
              </motion.button>
            </Link>
          ) : (
            <div className="rounded-full flex justify-center items-center bg-gradient-to-r from-purple-500 to-red-500 cursor-pointer mt-4">
              <Image src={Res} alt="Arrow Icon" width={50} height={50} />
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

