"use client";
import React, { FunctionComponent, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const FormSchema = z.object({
  name: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "Invalid Phone number" }),
  message: z.string().min(10).max(500),
  role: z.enum(["Founder", "Investor", "Student", "Sponsor", "Speaker"]),
});

const Contact: FunctionComponent = (props) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      role: "",
    },
  });
 

  const  onSubmit= async  (values: z.infer<typeof FormSchema>)=> {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          recipientEmail: 'ecell@iitbhu.ac.in', 
        }),
      });
  
    } catch (error) {
      console.error('Error submitting form', error);
    }
    console.log(values)
  }



  return (
    <div className="sm:mx-24">
      <div>
        <h1
          className={
            "text-white text-6xl flex justify-center font-semibold sm:py-6"
          }
        >
          Contact Us
        </h1>
      </div>

      {/* Contact info */}
      <div className="grid grid-cols-2 sm:flex sm:justify-around mt-5">
        <div>
          <p className="flex justify-center text-primary font-bold text-2xl m-2">
            Email
          </p>
          <Link href="mailto:ecell@iitbhu.ac.in">
            <p className="flex justify-center hover:text-blue-500 cursor-pointer">
              ecell@iitbhu.ac.in
            </p>
          </Link>
        </div>
        <div>
          <p className="flex justify-center text-primary font-bold text-2xl m-2">
            Phone
          </p>
          <Link href={"tel:+919120787959"}>
            <p className="flex justify-center hover:cursor-pointer">
              +91 9120787959
            </p>
          </Link>
        </div>
        <div className="col-span-2">
          <p className="flex justify-center text-primary font-bold text-2xl m-2">
            Social
          </p>
          <div className="flex justify-center gap-6">
            <Link
              className="hover:scale-125 transition ease-in-out"
              href="https://twitter.com/ecelliitbhu"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="text-blue-600 text-2xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
            </Link>
            <Link
              className="hover:scale-125 transition ease-in-out"
              href="https://www.instagram.com/ecelliitbhu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="text-pink-600 text-2xl hover:text-pink-600/75 cursor-pointer transition ease-in-out" />
            </Link>

            <Link
              className="text-blue-600 hover:text-blue-600/75 hover:scale-125 transition ease-in-out"
              href="https://www.linkedin.com/company/ecelliitbhu/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-600/75 cursor-pointer transition ease-in-out" />
            </Link>

            <Link
              className="text-gray-900 hover:text-gray-900/75 transition ease-in-out"
              href="https://www.youtube.com/c/ecelliitbhu"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="text-red-600 text-2xl hover:text-red-600/75 cursor-pointer dark:text-gray-300 dark:hover:text-gray-300/75 hover:scale-125 transition ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
      {/* Form */}
      <div className="flex justify-center mt-11">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Enter your message" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="founder">Founder</SelectItem>
                    <SelectItem value="investor">Investor</SelectItem>
                    <SelectItem value="sponsor">Sponsor</SelectItem>
                    <SelectItem value="speaker">Speaker</SelectItem>
                    <SelectItem value="student">Student</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </div>
      {/* Address */}
      <div className="text-center mx-24 my-7">
        <p className="text-primary font-bold text-2xl">Address</p>
        <p className="text-sm ">
          Indian Institute of Technology (Banaras Hindu University), Varanasi,
          India, PIN:221005
        </p>
      </div>
    </div>
  );
};

export default Contact;
