import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./WSYA.module.css";
import Cup from "/public/WSYA/communication.svg";
import Tec from "/public/WSYA/taking-notes.svg";
import Mic from "public/WSYA/podcast-show.svg";

const MotionDiv = ({ src, width, height, alt, text }) => (
  <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 1 }}
    className="mt-8 flex flex-col items-center justify-center"
  >
    <div className="filter invert">
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
    <p className="">{text}</p>
  </motion.div>
);

const WSYA = () => {
  const items = [
    {
      src: Cup,
      width: 150,
      height: 36,
      alt: "",
      text: "Events & Competitions",
    },
    {
      src: Tec,
      width: 250,
      height: 36,
      alt: "",
      text: "Workshops & Masterclasses",
    },
    {
      src: Mic,
      width: 120,
      height: 36,
      alt: "",
      text: "Talkshows & Keynote Lecture",
    },
  ];

  return (
    <div className="text-center min-h-screen py-6 text-primary-foreground">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Why should You Attend ?</h1>
        <p className="text-secondary max-w-xl mx-auto mb-5">
          E-Summit has a range of events, competitions, panel discussions,
          <br /> networking, and pitching opportunities for every vertical of
          our entrepreneurial society.
        </p>
        <div className="min-h-full flex flex-wrap justify-around align-middle">
          {items.map((item, index) => (
            <MotionDiv key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WSYA;
