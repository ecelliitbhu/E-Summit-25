'use client'
import { Button } from "@/components/ui/button"
import { useState } from 'react'
import Faqs from "@/components/faq/Faq"

export default function Home() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Button>Click me</Button>
      <Faqs></Faqs>
    </main> 
  )
}
