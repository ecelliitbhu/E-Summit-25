"use client";
import React from "react";
import styles from "./sponsor_card.module.css";
import SvgDefs from "./svg_defs";

const MarqueeComponent: React.FC = () => {
  return (
    <div className={`${styles.root} dark`}>
      <div className={styles.wrapper}>
        {/* Definition of all svgs are imported under SvgDefs component */}
        <SvgDefs />

        <div className={styles.marquee}>
          <div className={styles.marquee__group}>
            <svg>
              <use xlinkHref="#mcdonalds" />
            </svg>
            <svg>
              <use xlinkHref="#jordan" />
            </svg>
            <svg>
              <use xlinkHref="#aws" />
            </svg>
            <svg>
              <use xlinkHref="#spotify" />
            </svg>
            <svg>
              <use xlinkHref="#burger-king" />
            </svg>
            <svg>
              <use xlinkHref="#honda" />
            </svg>
            <svg>
              <use xlinkHref="#notion" />
            </svg>
            <svg>
              <use xlinkHref="#hulu" />
            </svg>

            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
          </div>

          <div aria-hidden="true" className={styles.marquee__group}>
            <svg>
              <use xlinkHref="#mcdonalds" />
            </svg>
            <svg>
              <use xlinkHref="#jordan" />
            </svg>
            <svg>
              <use xlinkHref="#aws" />
            </svg>
            <svg>
              <use xlinkHref="#spotify" />
            </svg>
            <svg>
              <use xlinkHref="#burger-king" />
            </svg>
            <svg>
              <use xlinkHref="#honda" />
            </svg>
            <svg>
              <use xlinkHref="#notion" />
            </svg>
            <svg>
              <use xlinkHref="#hulu" />
            </svg>

            <svg viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
            </svg>
          </div>
        </div>

        <div className={styles.marquee}>
          <div className={styles.marquee__group__reverse}>
            <svg>
              <use xlinkHref="#hulu" />
            </svg>
            <svg>
              <use xlinkHref="#notion" />
            </svg>
            <svg>
              <use xlinkHref="#honda" />
            </svg>
            <svg>
              <use xlinkHref="#burger-king" />
            </svg>
            <svg>
              <use xlinkHref="#spotify" />
            </svg>
            <svg>
              <use xlinkHref="#aws" />
            </svg>
            <svg>
              <use xlinkHref="#jordan" />
            </svg>
            <svg>
              <use xlinkHref="#mcdonalds" />
            </svg>
          </div>

          <div aria-hidden="true" className={styles.marquee__group__reverse}>
            <svg>
              <use xlinkHref="#hulu" />
            </svg>
            <svg>
              <use xlinkHref="#notion" />
            </svg>
            <svg>
              <use xlinkHref="#honda" />
            </svg>
            <svg>
              <use xlinkHref="#burger-king" />
            </svg>
            <svg>
              <use xlinkHref="#spotify" />
            </svg>
            <svg>
              <use xlinkHref="#aws" />
            </svg>
            <svg>
              <use xlinkHref="#jordan" />
            </svg>
            <svg>
              <use xlinkHref="#mcdonalds" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
