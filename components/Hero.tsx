import React, { FunctionComponent } from "react";
import Image from "next/image";
import Logo from "./logos/esummit.png";
import { Button } from "./ui/button";
interface OwnProps {}

type Props = OwnProps;

const Hero: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div
        className= "text-white h-auto w-full flex md:flex-row flex-col justify-around pt-10 pr-20 pl-20 pb-16 items-center"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/27aa/7f50/8f3153ba02db342062382a63bf906279?Expires=1702857600&Signature=ls4dL9BgWACGJ6cdzCv-zuZNzMvfHuIQD9WAIUXq2XM2BHC9pIw2mN94Wpfbt19R208NYEV8h9dWNhq7nNjuut4HoOBrptOjtP6cfqOa-jtZg~4LpB8~1ir~5wNV5HTa44-vTBefqSqKKocBjNHTo7dUUQgI1guOUHSOHs482P95w1VCjCqK6wctSpBkiB4~-1Ko2NKO0Yk4Po5QXb7o5JcjQxA0WLOZak-LYSWHiT3SeiWnjSy6HvNDVHb5mwdcaW~Rix9lnrDURgD4VyUTqHsEIFj2kOo2oZP5hnoyHBgiYEPyEZoFR-sDM9fguo0nmmNPFVLNr5PlQSXJycFMXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')",
        }}
      >
        <div className="">
          <div className="mb-5">
            <p className="font-bold text-3xl">
              Hey, would you like to learn how to create a <span className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer"></span>generative UI just
              like this?
            </p>
          </div>
          <div className="mb-5">
            <p className=" text-gray-500 text-md pb-2 font-semibold hover:text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 cursor-pointer">
              In this tutorial we will be creating a generative “orb” animation
              using pixi.js, picking some lovely random colors and pulling it
              all together in a nice frosty UI. We're gonna talk accessibility,
              too.
            </p>
          </div>
          <div className="flex">
            <Button
              size="lg"
              className="mr-5 w-[30%]
              h-[2.5rem]"
            >
              View
            </Button>
            <Button
              size="lg"
              className="mr-5 w-[30%]
              h-[2.5rem]"
            >
              View
            </Button>
            
          </div>
        </div>
        <div className="">
          <Image
            src={Logo}
            width={700}
            height={200}
            alt="logo"
            className="mr--5"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
