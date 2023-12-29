"use client";
import React from "react";
import styles from "./sponsor_card.module.css";
import SvgDefs from "./svg_defs";
import inflection from "../../public/carousel/Inflection-removebg-preview.png";
import hundred from "../../public/carousel/100x-removebg-preview.png";
import antler from "../../public/carousel/Antler-removebg-preview.png";
import axilor from "../../public/carousel/axilor-removebg-preview.png";
import faad from "../../public/carousel/faad-removebg-preview.png";
import fibonacci from "../../public/carousel/FibbonacciX-removebg-preview.png"
import fluid from "../../public/carousel/fluidventures-removebg-preview.png"
import forty from "../../public/carousel/FortyTwo.Vc-removebg-preview.png"
import kae from "../../public/carousel/kae-removebg-preview.png"
import launch from "../../public/carousel/LaunchX-removebg-preview.png"
import lets from "../../public/carousel/LetsVenture-removebg-preview.png"
import pedal from "../../public/carousel/PedalStart-removebg-preview.png"
import sooni from "../../public/carousel/Soonicorn-removebg-preview.png";
import west from "../../public/carousel/westbridge-removebg-preview.png"
import xscale from "../../public/carousel/Xscale-removebg-preview.png"
import yours from "../../public/carousel/Yournest-removebg-preview.png"
import { X } from "lucide-react";

const MarqueeComponent: React.FC = () => {
  return (
    <div className={`${styles.root} dark`}>
      <div className={styles.wrapper}>
        {/* Definition of all svgs are imported under SvgDefs component */}
        <SvgDefs />

        <div className={styles.marquee}>
          <div className={styles.marquee__group}>
         <img src={inflection.src} height={200} width={200}/>
         <img src={hundred.src} height={200} width={200}/>
         <img src={antler.src} height={200} width={200}/>
         <img src={axilor.src} height={200} width={200}/>
         <img src={faad.src} height={200} width={200}/>
         <img src={forty.src} height={200} width={200}/>
         <img src={fibonacci.src} height={200} width={200} />
         <img src={fluid.src} height={200} width={200}/>
         <img src={kae.src} className={styles.cardh}/>
         <img src={launch.src} height={200} width={200}/>
         <img src={lets.src} height={200} width={200}/>
         <img src={pedal.src} height={200} width={200}/>
         <img src={sooni.src} className={styles.cardh}/>
         <img src={west.src} height={200} width={200}/>
         <img src={xscale.src} height={200} width={200}/>
         <img src={yours.src} height={200} width={200}/>
          </div>

          <div aria-hidden="true" className={styles.marquee__group}>
          <img src={inflection.src} height={200} width={200}/>
         <img src={hundred.src} height={200} width={200}/>
         <img src={antler.src} height={200} width={200}/>
         <img src={axilor.src} height={200} width={200}/>
         <img src={faad.src} height={200} width={200}/>
         <img src={forty.src} height={200} width={200}/>
         <img src={fibonacci.src} height={200} width={200}/>
         <img src={fluid.src} height={200} width={200}/>
         <img src={kae.src} className={styles.cardh}/>
         <img src={launch.src} height={200} width={200}/>
         <img src={lets.src} height={200} width={200}/>
         <img src={pedal.src} height={200} width={200}/>
         <img src={sooni.src} className={styles.cardh}/>
         <img src={west.src} height={200} width={200}/>
         <img src={xscale.src} height={200} width={200}/>
         <img src={yours.src} height={200} width={200}/>
          </div>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marquee__group__reverse}>
          <img src={inflection.src} height={200} width={200}/>
         <img src={hundred.src} height={200} width={200}/>
         <img src={antler.src} height={200} width={200}/>
         <img src={axilor.src} height={200} width={200}/>
         <img src={faad.src} height={200} width={200}/>
         <img src={forty.src} height={200} width={200}/>
         <img src={fibonacci.src} height={200} width={200}/>
         <img src={fluid.src} height={200} width={200}/>
         <img src={kae.src} className={styles.cardh}/>
         <img src={launch.src} height={200} width={200}/>
         <img src={lets.src} height={200} width={200}/>
         <img src={pedal.src} height={200} width={200}/>
         <img src={sooni.src} className={styles.cardh}/>
         <img src={west.src} height={200} width={200}/>
         <img src={xscale.src} height={200} width={200}/>
         <img src={yours.src} height={200} width={200}/>
          </div>

          <div aria-hidden="true" className={styles.marquee__group__reverse}>
          <img src={inflection.src} height={200} width={200}/>
         <img src={hundred.src} height={200} width={200}/>
         <img src={antler.src} height={200} width={200}/>
         <img src={axilor.src} height={200} width={200}/>
         <img src={faad.src} height={200} width={200}/>
         <img src={forty.src} height={200} width={200}/>
         <img src={fibonacci.src} height={200} width={200}/>
         <img src={fluid.src} height={200} width={200}/>
         <img src={kae.src} className={styles.cardh}/>
         <img src={launch.src} height={200} width={200}/>
         <img src={lets.src} height={200} width={200}/>
         <img src={pedal.src} height={200} width={200}/>
         <img src={sooni.src} className={styles.cardh}/>
         <img src={west.src} height={200} width={200}/>
         <img src={xscale.src} height={200} width={200}/>
         <img src={yours.src} height={200} width={200}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
