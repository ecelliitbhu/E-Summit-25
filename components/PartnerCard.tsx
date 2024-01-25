import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

interface OwnProps {
  name: string;
  imgURL: string;
}

type Props = OwnProps;

const PartnerCard: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <div className="relative flex flex-col  cursor-pointer bg-card shadow-md bg-clip-border rounded-xl w-64 m-4 md:m-2">
      <div className="relative mx-4 overflow-hidden  shadow-lg bg-clip-border rounded-xl">
        <Image
          width={800}
          height={500}
          // fill={true}
          src={props.imgURL}
          alt={props.name}
          className={"h-[130px] object-cover"}
        />
      </div>
      
      
    </div>
  );
};

export default PartnerCard;
