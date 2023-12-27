import { Button } from "@/components/ui/button";
import Link from "next/link";
import Ticket from "@/components/Ticket";

export default function Component() {
  return (
    <section className="w-full flex justify-center py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-4 px-4 md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center">
            Get Your Passes for the Most Exciting Event of the Year!
          </h2>
          <p className="w-full text-sm text-center md:text-xl/relaxed text-primary-foreground lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Don&apos;t miss out on this unique opportunity to connect with
            industry
            <br />
            leaders and like-minded individuals.
          </p>
        </div>
        <div className={"flex justify-center items-top lg:h-96"}>
          <div className="lg:relative lg:right-80">
            <Ticket />
          </div>
        </div>
        <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row">
          <Link
            href={"/payment"}
            className={"flex justify-center items-center"}
          >
            <Button>Purchase Pass</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
