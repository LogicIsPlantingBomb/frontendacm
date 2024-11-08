"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import {
  CodeIcon,
  ReloadIcon,
  TriangleLeftIcon,
  TriangleRightIcon,
} from "@radix-ui/react-icons";
import {
  BlurIn,
  FadeDownStagger,
  FadeUpStagger,
  GradualSpacing,
  LetterPullUp,
  MultiDirectionSlide,
  RotateText,
  SeparateAway,
  SlightFlip,
  StaggeredFadeIn,
  TypingEffect,
  VelocityScroll,
  WavyText,
  WordPullUp,
} from "@/variants/variant-previews";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function VariantCarousel() {
  let i = 0;
return (
  <div className="flex lg:flex-row flex-col gap-10 ">
      <div className="transition-all duration-300 hover:scale-105 p-2 shadow-md hover:shadow-xl dark:shadow-md dark:hover:shadow-xl hover:dark:shadow-cyan-300/50 dark:shadow-cyan-300/50">
        <Link
        href="/events/ai">
        <Card className="p-20 lg:p-36 bg-[url('../public/ai.jpg')] bg-cover relative z-0 ">


          <CardHeader className=" flex flex-row items-center justify-between space-y-1 pb-2 ">
          </CardHeader>
          <CardContent className="" >
          </CardContent>
        </Card></Link>
        <div className="pt-4">
     
        </div>
      </div>
    <Link
        href="/events/git">
      <div className=" rounded-lg transition-all duration-300 hover:scale-105  p-2 shadow-md hover:shadow-xl dark:shadow-md dark:hover:shadow-xl hover:dark:shadow-cyan-300/50 dark:shadow-cyan-300/50">
        <Card className="p-20 lg:p-36 bg-[url('../public/git.jpg')] bg-cover relative z-0 ">


          <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2">
          </CardHeader>
          <CardContent className="" >
          </CardContent>
        </Card>
        <div className="pt-4">
         
        </div>
      </div>
      </Link>
 <Link
        href="/events/blockchain">
      <div className=" transition-all hidden sm:block duration-300 hover:scale-105 p-2  shadow-md hover:shadow-xl dark:shadow-md dark:hover:shadow-xl hover:dark:shadow-cyan-300/50 dark:shadow-cyan-300/50">
        <Card className="p-20  lg:p-36 bg-[url('../public/blockchain.jpg')] bg-cover relative z-0 ">


          <CardHeader className="flex flex-row items-center justify-between space-y-1 pb-2">
          </CardHeader>
          <CardContent className="')]" >
          </CardContent>
        </Card>
        <div className="pt-4">
     
        </div>
      </div>
        </Link>
    </div>
  )
}
