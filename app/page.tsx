"use client"
import { Button } from "@/components/ui/button"
import Guestcard from "@/components/guestcard/Guestcard"
import { guest_card_data } from "@/components/guestcard/guest_card_data"
export default function Home() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Button>Click me</Button>
      <div >{guest_card_data.map((value,key:any)=>(
         <Guestcard key={key} name={value.name} imgURL={value.imgURL} instaURL={value.instaURL} xURL={value.xURL} linkedinURL={value.linkedinURL}/>
      ))}</div>
    </main> 
  )
}
