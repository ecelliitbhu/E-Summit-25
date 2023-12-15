import React, { FunctionComponent } from "react";
import Image from "next/image";
interface OwnProps {}
type Props = OwnProps;
import Logo from "./logos/Logo.svg";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
const About: FunctionComponent<Props> = (props) => {
  return (
    <>
      <div
        className="bg-black text-white h-auto w-full flex md:flex-row flex-col justify-around items-start p-2"
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
              
            </div>
            
          </ul>
        </div>
        
        <div className="p-5 mt-10">
          <ul>
            <p className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 font-bold text-5xl pb-4">
              ABOUT-ESUMMIT'24
            </p>
            <li className="text-gray-500 text-md pb-2 font-semibold">
              <p className="max-w-2xl mb-2 text-lg">
                E-Summit is an electrifying celebration of innovation and entrepreneurship,
                brought to you by the Entrepreneurship Cell(E-Cell) at the Indian Institute of Technology(IIT)BHU.
                This annual festival is a convergence of visionary thinkers, budding entrepreneurs,and established 
                industry leaders, all united by a common passion. - "The drive to create,innoavte and transform the future."
                E-Summit is where dreams are nurtured,ideas are cultivated, and future entrepreneurs are born.

              </p>
              <p className="max-w-2xl mb-2 text-lg">
                Join us in this exhilarating journey of entrepreneurship, and together Let's write the future! 
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
        }}>
          <div className="flex justify-center items-center">
  <Image src={image1} alt="Image 1" width={300} height={300} className="mx-2" />
  <Image src={image2} alt="Image 2" width={323} height={323} className="mx-2" />
  <Image src={image3} alt="Image 3" width={300} height={300} className="mx-2" />
  <Image src={image4} alt="Image 4" width={300} height={300} className="mx-2" />
</div>
        
      </div>
    </>
  );
};

export default About;
