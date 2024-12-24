'use client';
import React, { useState, useEffect } from "react";
import CustomSlider from "./CustomSlider"; // Import your CustomSlider component
import AlternativeComponent from "./AltComp";


const ResponsiveComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Update screen size on resize
  useEffect(() => {
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Set the breakpoint (md)
    };

    updateScreenSize(); // Check initial screen size
    window.addEventListener("resize", updateScreenSize); // Listen for window resize

    return () => window.removeEventListener("resize", updateScreenSize); // Cleanup listener
  }, []);

  const slidesData = [
    { name: "Participant 1", description: "Frontend Developer", post: "The summit was incredibly inspiring! The keynote sessions were thought-provoking, and the networking opportunities were top-notch. It gave me a fresh perspective on entrepreneurship.", img: "/images/profile1.jpg" },
    { name: "Participant 2", description: "Graphic Designer", post: "I loved the mix of workshops and speaker sessions. The practical insights shared by industry experts were extremely helpful for my startup journey.", img: "/images/profile2.jpg" },
    { name: "Participant 3", description: "UI/UX Designer", post: "The event was well-organized, and the energy throughout the summit was amazing. I especially enjoyed the pitch competition—it was both challenging and rewarding!", img: "/images/profile3.jpg" },
    { name: "Participant 4", description: "Software Engineer", post: "As a first-time attendee, I appreciated how approachable the speakers were. The panel discussions on funding and scaling startups were particularly useful.", img: "/images/profile4.jpg" },
    { name: "Participant 5", description: "Product Manager", post: "The diversity of topics covered in the summit was impressive. From technology trends to leadership skills, every session added value to my entrepreneurial knowledge.", img: "/images/profile5.jpg" }
  ];
  const brandLogos=[
    { img: "/carousel/aws-removebg-preview.png" },
    { img: "/carousel/Antler-removebg-preview.png" },
    { img: "/carousel/amul-removebg-preview.png" },
    { img: "/carousel/100x-removebg-preview.png" },
    { img: "/carousel/axilor-removebg-preview.png" },
    { img: "/carousel/bob.png" },
    { img: "/carousel/digitalocean.png" },
    { img: "/carousel/faad-removebg-preview.png" },
    { img: "/carousel/Fibbonaccix-removebg-preview.png" },
    { img: "/carousel/fluidventures-removebg-preview.png" },
    { img: "/carousel/FortyTwo.Vc-removebg-preview.png" },
    { img: "/carousel/freshworks.png" },
    { img: "/carousel/gfg.png" },
    { img: "/carousel/grabon.png" },
    { img: "/carousel/growth.png" },
    { img: "/carousel/icici-removebg-preview.png" },
    { img: "/carousel/inflection-removebg-preview.png" },
    { img: "/carousel/kae-removebg-preview.png" },
    { img: "/carousel/LaunchX-removebg-preview.png" },
    { img: "/carousel/LetsVenture-removebg-preview.png" },
    { img: "/carousel/microsoft-removebg-preview.png" },
    { img: "/carousel/PedalStart-removebg-preview.png" },
    { img: "/carousel/redbus-removebg-preview.png" },
    { img: "/carousel/safe.png" },
    { img: "/carousel/Soonicorn-removebg-preview.png" },
    { img: "/carousel/unacademy.png" },
    { img: "/carousel/unstop-removebg-preview.png" },
    { img: "/carousel/westbridge-removebg-preview.png" },
    { img: "/carousel/Xscale-removebg-preview.png" },
    { img: "/carousel/Yournest.png" },
    { img: "/carousel/zoho.png" },
    { img: "/carousel/zee-removebg-preview.png" },
  ];
  

  return (
    <>
      {isSmallScreen ? (
        <>
        
        <AlternativeComponent
          heading="What our Participants speak for us?"
          gradientText="Participants speak"
          slidesData={slidesData}
          uniqueClass="participants-slider"
        />
        <AlternativeComponent
        heading="Sponsors"
  gradientText="Sponsors"
  slidesData={brandLogos}
  uniqueClass="sponsors-slider"/>
  </>
      ) : (<>
        <CustomSlider
          heading="What our Participants speaks for us?"
          gradientText="Participants speaks"
          slidesData={slidesData}
          uniqueClass="participants-slider"
        />
        <CustomSlider
  heading="Sponsors"
  gradientText="Sponsors"
  slidesData={brandLogos}
  
  slidesPerView={3}
  coverflowEffect={{ modifier: 0.5, depth: 50 }}
  uniqueClass="sponsors-slider"
/>
</>

      )}
    </>
  );
};

export default ResponsiveComponent;
