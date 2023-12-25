"use client";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import Logo from "@/public/logos/esummit.png";

import { Parallax } from "react-scroll-parallax";
import { Button } from "./ui/button";

interface OwnProps {}

import "@/app/globals.css";

type Props = OwnProps;

const Hero: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <Parallax scale={[1, 0]}>
          <Image
            src={Logo}
            width={900}
            height={400}
            alt="logo"
            className="mr--5"
          />
        </Parallax>
        {/*<div*/}
        {/*  className= "text-white h-screen w-full flex md:flex-row flex-col justify-around  pr-20 pl-20 pb-16 items-center "*/}

        {/*>*/}
        {/*  <div className="">*/}
        {/*    <div className="mb-5">*/}
        {/*      <p className="font-semibold text-3xl">*/}
        {/*        Hey, would you like to learn how to create a <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer"></span>generative UI just*/}
        {/*        like this?*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="mb-5">*/}
        {/*      <p className=" text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">*/}
        {/*        In this tutorial we will be creating a generative orb animation*/}
        {/*        using pixi.js, picking some lovely random colors and pulling it*/}
        {/*        all together in a nice frosty UI. We are gonna talk accessibility,*/}
        {/*        too.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*    <div className="flex">*/}
        {/*      <Button*/}
        {/*        size="lg"*/}
        {/*        className="bg-gradient-to-r from-[#0A2E8F] via-[#0F498D] to-[#1A8589] mr-5 w-[30%] h-[2.5rem]"*/}
        {/*      >*/}
        {/*        View*/}
        {/*      </Button>*/}
        {/*      <Button*/}

        {/*        size="lg"*/}
        {/*        className="bg-gradient-to-r from-[#0A2E8F] via-[#0F498D] to-[#1A8589] */}
        {/*        */}
        {/*        mr-5 w-[30%]*/}
        {/*        h-[2.5rem]"*/}
        {/*        */}
        {/*      >*/}
        {/*        View*/}
        {/*      </Button>*/}
        {/*      */}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="mt-1">*/}
        {/*    <Image*/}
        {/*      src={Logo}*/}
        {/*      width={700}*/}
        {/*      height={200}*/}
        {/*      alt="logo"*/}
        {/*      className="mr--5"*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
      <div className="min-h-screen flex justify-center items-center">
        <Parallax scale={[1.5, 0]}>
          <div className="p-5 mt-10">
            <ul>
              <p className="text-transparent flex justify-center bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 font-bold text-6xl pb-4">
                ABOUT-ESUMMIT&apos;24
              </p>
              <li className="text-gray-500 text-md pb-2 font-semibold">
                <p className="max-w-3xl mb-2 md:text-xl">
                  E-Summit is an electrifying celebration of innovation and
                  entrepreneurship, brought to you by the Entrepreneurship
                  Cell(E-Cell) at the Indian Institute of Technology(IIT)BHU.
                  This annual festival is a convergence of visionary thinkers,
                  budding entrepreneurs,and established industry leaders, all
                  united by a common passion. - &quot;The drive to
                  create,innoavte and transform the future.&quot; E-Summit is
                  where dreams are nurtured,ideas are cultivated, and future
                  entrepreneurs are born.
                </p>
                <p className="max-w-2xl mb-2 md:text-xl">
                  Join us in this exhilarating journey of entrepreneurship, and
                  together Let&apos;s write the future!
                </p>
              </li>
            </ul>
          </div>
        </Parallax>
      </div>
    </>
  );
};

export default Hero;
