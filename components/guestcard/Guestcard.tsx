"use client"
import React from 'react'
import { Instagram,X,Linkedin } from '../components'
import styles from "../guestcard/guest_card.module.css"
import {useRouter} from "next/navigation"
import { GuestPropsData } from './guest_card_data'
export default function Guestcard(props:GuestPropsData) {
    const router = useRouter();
  return (
    <div className={styles.container}>
  <div className={`${styles.card} ${styles.card0}`} style={{backgroundImage: `url(${props.imgURL})`}}>
    <div className={styles.border}>
      <h2 className={styles.h2}>{props.name}</h2>
      <div className={styles.icons}>
        <Instagram className={styles.fa} onClick={()=>{router.push(props.instaURL)}}/>
        <X className={styles.fa} onClick={()=>{router.push(props.twitterURL)}}/>
        <Linkedin className={styles.fa} onClick={()=>{router.push(props.linkedinURL)}}/>
      </div>
    </div>
  </div>
</div>
  )
}

