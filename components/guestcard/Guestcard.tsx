"use client";
import React, { FunctionComponent } from "react";
import { Instagram, X, Linkedin } from "../components";
import styles from "../guestcard/guest_card.module.css";
import { useRouter } from "next/navigation";
import { current_speakers_data, past_speakers_data } from "./guest_card_data";


const Guestcard: FunctionComponent = (props) => {
  const router = useRouter();
  return (
    <div className="m-auto block overflow-x-hidden w-calc[60vw + 248px] max-w-[1068px] min-w-[888px] text-xl font-sans font-normal max-[1100px]:px-12 max-[1100px]:pb-6 max-[1100px]:pt-24 max-lg:w-full max-lg:max-w-full max-lg:min-w-full max-md:pb-0 max-md:pt-12 max-md:px-6">
   
        <p className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 font-bold text-5xl pb-4">
         Current Speakers
        </p>
        <div className={styles.container}>
          {current_speakers_data.map((GuestData, index) => (
            <div
              className={`${styles.card} ${styles.card0}`}
              style={{ backgroundImage: `url(${GuestData.imgURL})` }}
              key={index}
            >
              <div className={styles.border}>
                <h2 className={styles.h2}>{GuestData.name}</h2>
                <div className={styles.icons}>
                  <Instagram
                    className={styles.fa}
                    onClick={() => {
                      router.push(GuestData.instaURL);
                    }}
                  />
                  <X
                    className={styles.fa}
                    onClick={() => {
                      router.push(GuestData.xURL);
                    }}
                  />
                  <Linkedin
                    className={styles.fa}
                    onClick={() => {
                      router.push(GuestData.linkedinURL);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
     
     
      
          <p className="text-transparent bg-clip-text bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 mb-2 font-bold text-5xl pb-4">
            Past Speakers
          </p>
          <div className={styles.container}>
            {past_speakers_data.map((GuestData, index) => (
              <div
                className={`${styles.card} ${styles.card0}`}
                style={{ backgroundImage: `url(${GuestData.imgURL})` }}
                key={index}
              >
                <div className={styles.border}>
                  <h2 className={styles.h2}>{GuestData.name}</h2>
                  <div className={styles.icons}>
                    <Instagram
                      className={styles.fa}
                      onClick={() => {
                        router.push(GuestData.instaURL);
                      }}
                    />
                    <X
                      className={styles.fa}
                      onClick={() => {
                        router.push(GuestData.xURL);
                      }}
                    />
                    <Linkedin
                      className={styles.fa}
                      onClick={() => {
                        router.push(GuestData.linkedinURL);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      
   
  );
};
export default Guestcard;
