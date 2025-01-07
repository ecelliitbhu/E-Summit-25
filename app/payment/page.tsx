"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { FunctionComponent, useState } from "react";
// import EventsCard from "@/components/EventsCard";

interface OwnProps {}

type Props = OwnProps;

const page: FunctionComponent<Props> = (props) => {
  const searchParams = useSearchParams();
  const initialType = searchParams?.get('type');
  const [type,setType]=useState(initialType)
  return (
    <section className={"md:mt-14 p-4 "}>
      <div className="flex flex-col items-center justify-center w-full h-screen ">
{type=="esummit"?
      <iframe
          id="ts-iframe"
          // src="https://www.townscript.com/v2/widget/esummit-2024-iit-bhu-443243/booking"
          src="https://www.townscript.com/v2/widget/esummit-2025-iit-bhu-434033/booking"

          height="600"
          width="80%"
          className={"border rounded-2xl "}
          />
          :
        <iframe
          id="ts-iframe"
          // src="https://www.townscript.com/v2/widget/esummit-2024-iit-bhu-443243/booking"
          src="https://www.townscript.com/v2/widget/startup-expo-2025/booking"
          height="600"
          width="80%"
          className={"border rounded-2xl "}
        ></iframe>
}
        <link
          rel="stylesheet"
          href="https://www.townscript.com/static/Bookingflow/css/ts-iframe.style.css"
        />
      </div>
    </section>
  );
};

export default page;
