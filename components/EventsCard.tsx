"use client";
import React, { FunctionComponent } from "react";
import cards from "./data/cards.json";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import Link from "next/link";
const EventsCard: FunctionComponent = (props) => {
  return (
    // <article className=" m-auto block overflow-x-hidden w-calc[60vw + 248px] max-w-[1068px] min-w-[888px] text-xl font-sans font-normal max-[1100px]:px-12 max-[1100px]:pb-6 max-[1100px]:pt-24 max-lg:w-full max-lg:max-w-full max-lg:min-w-full max-md:pb-0 max-md:pt-12 max-md:px-6">
    //   {cards.map((card, index) => (
    //     <motion.div
    //       initial={{ x: index % 2 == 0 ? -1010 : 1010 }}
    //       whileInView={{ x: 0 }}
    //       viewport={{ once: true }}
    //       transition={{ duration: 1.5 }}
    //       className={`dark bg-card flex flex-row self-start relative  max-w-[920px] min-w-[640px] my-20 mx-0 p-12 pl-[308px] rounded-3xl odd:m-0 odd:ml-60 odd:rounded-3xl odd:my-12 odd:pr-80 odd:pl-16 max-lg:w-full max-lg:max-w-full max-lg:min-w-full max-lg:odd:m-0 max-md:my-16 max-md:mx-0 max-md:pt-18 max-md:px-9 max-md:pb-9 max-md:flex-col max-lg:rounded-3xl
    //     max-md:odd:pt-18 max-md:odd:px-9 max-md:odd:pb-9 max-lg:odd:rounded-3xl dark text-card-foreground
    //     `}
    //       key={index}
    //     >
    //       <div className="flex flex-col w-5/6 max-lg:w-full">
    //         <h3 className="m-0 text-2xl max-w-[20ch] leading-tight">
    //           {card.title}
    //         </h3>
    //         <p className="mt-3 mb-3 mx-0 max-w-[36ch]">{card.description}</p>
    //
    //         <Link href={card.eventPage}>
    //           <Button
    //             className={
    //               "rounded-lg bg-gradient-to-r from-[#0A2E8F] via-[#0F498D] to-[#1A8589] text-white focus-visible:outline-none"
    //             }
    //           >
    //             Register
    //           </Button>
    //         </Link>
    //
    //         {/*<a*/}
    //         {/*  href=""*/}
    //         {/*  className="border border-solid border-3 dark border-card-foreground dark text-card-foreground self-start no-underline px-8 py-4 rounded-24 transition-all duration-400 hover:bg-card-foreground hover:text-card odd:self-start"*/}
    //         {/*>*/}
    //
    //         {/*</a>*/}
    //         <div
    //           className={`visual h-full w-64 absolute left-6 -top-6 overflow-hidden rounded-3xl ${
    //             index % 2 === 0 ? "right-2 left-auto" : ""
    //           } max-md:w-40 max-md:h-40 max-md:right-4 max-md:left-auto`}
    //         >
    //           <Image
    //             src={card.imageUrl}
    //             width={300}
    //             height={100}
    //             alt={card.title}
    //             className="h-full max-md:w-full max-md:h-auto"
    //           />
    //           {/* <img src={card.imageUrl} alt="" className="h-10 w-10" /> */}
    //         </div>
    //       </div>
    //     </motion.div>
    //   ))}
    // </article>
    <section>
      <h1
        className={
          "text-white text-6xl flex justify-center font-semibold sm:py-6"
        }
      >
        Events
      </h1>
      <div className=" min-h-screen flex flex-wrap justify-center  overflow-hidden ">
        {cards.map((data, index) => (
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
            // viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={"sm:w-72 p-4 py-6 m-6 rounded-xl cardbg"}
            key={index}
          >
            <div className={"flex justify-center"}>
              <Image
                src={data.imageUrl}
                alt={data.title}
                width={200}
                height={200}
                className={"rounded-2xl"}
              />
            </div>
            <h1 className={"text-white text-2xl"}>{data.title}</h1>
            <h2 className={"text-white text-sm"}>{data.description}</h2>
            <Link href={data.eventPage}>
              <Button variant={"ghost"} className={"text-secondary my-2"}>
                Register
              </Button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsCard;
