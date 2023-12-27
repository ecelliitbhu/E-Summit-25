// Import React and styles
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <h3 className={"m-0 text-primary font-bold"}>
            ABOUT-ESUMMIT&apos;24
          </h3>
          <h1 className={"m-0 text-secondary"}>
            E-Summit is an electrifying celebration of innovation and
            entrepreneurship, brought to you by the Entrepreneurship Cell (
            E-Cell ) at the Indian Institute of Technology ( IIT ) BHU.
          </h1>
          <p className={"m-0 text-secondary"}>
            This annual festival is a convergence of visionary thinkers, budding
            entrepreneurs,and established industry leaders, all united by a
            common passion. - &quot;The drive to create,innoavte and transform
            the future.&ldquo;
            <br /> E-Summit is where dreams are nurtured,ideas are cultivated,
            and future entrepreneurs are born. Join us in this exhilarating
            journey of entrepreneurship, and together let&apos;s write the
            future!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
