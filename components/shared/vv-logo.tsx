"use client";

import React from "react";

import {
  ArrowDownIcon,
  CalendarIcon,
  CodeIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

export default function VVLogo() {
  return (
    <HoverCard>

      <Link href="/">
        <Button variant="link" className="pt-12 text-lg">
          <Image  alt="" src="/logo1.png" width={100} height={100} quality={100} className="w-20 h-20" />
          Student Chapter OIST
        </Button>
      </Link>


    </HoverCard>
  );
}
