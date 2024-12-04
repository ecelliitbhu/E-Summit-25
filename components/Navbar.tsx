"use client";
import React, { FunctionComponent, useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/public/logos/logoecell.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface OwnProps {}

const nav = [
  // {
  //   name: "ABOUT",
  //   link: "/#about",
  // },
  {
    name: "Itinerary",
    link: "/itinerary",
  },
  {
    name: "EVENTS",
    link: "/events",
  },
  {
    name: "SPEAKERS",
    link: "/speakers",
  },
  {
    name: "PARTNERS",
    link: "/partners",
  },
  {
    name: "CONTACT US",
    link: "/contact",
  },
  {
    name: "MERCH",
    link: "/merch",
  },
];

type Props = OwnProps;

const Navbar: FunctionComponent<Props> = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to toggle dropdown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-[100%] min-h-fit sticky z-10 top-8 max-w-[76.5rem] m-auto  lg:p-0 ">
      <nav className="w-full rounded-full z-10 bg-background opacity-95  md:absolute fixed  mt-1">
        <div className={"relative block px-8"}>
          <div
            className={
              "flex items-center justify-between w-[100%] h-[100%] p-3 gap-1 capitalize"
            }
          >
            <Link
              href="/"
              aria-label="logo"
              className="block w-10 -m-4 items-center"
            >
              <Image
                src={logo}
                style={{ width: "50px", height: "20px" }}
                alt="E-Summit'24 logo"
                className="scale-150 md:ml-2 sm:w-32"
              />
            </Link>
            <div className={"hidden lg:block"}>
              <ul
                className={
                  "tracking-wide font-light text-2xl flex-col flex lg:flex-row flex-wrap justify-end items-center gap-6 lg:gap-0"
                }
              >
                {nav.map((navigator, index) => {
                  return (
                    <li key={index}>
                      <Link href={navigator.link} className="no-underline">
                        <Button
                          className={"text-primary-foreground"}
                          variant={"link"}
                        >
                          {navigator.name.toUpperCase()}
                        </Button>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className={"relative lg:hidden"}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    variant={"outline"}
                  >
                    <Menu />
                  </Button>
                </DropdownMenuTrigger>
                {isDropdownOpen && (
                  <DropdownMenuContent align="start" className="w-56 mr-4">
                    <DropdownMenuLabel>Navigation</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {nav.map((navigator, index) => {
                        return (
                          <DropdownMenuItem key={index}>
                            <Link
                              href={navigator.link}
                              className="no-underline"
                            >
                              {navigator.name}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                )}
              </DropdownMenu>
            </div>
            <div className={"hidden lg:block"}>
              <Link href={"/payment"} className="no-underline">
                <Button variant={"default"} 
                style={{
                  background: "linear-gradient(90deg, #6A23A6, #E91045)",
                  color: "white", 
                  border: "none", 
                  padding: "0.5rem 1.5rem", 
                  fontWeight: "bold",
                  borderRadius: "0.375rem",
                  textAlign: "center", 
                  cursor: "pointer",
                }}>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
