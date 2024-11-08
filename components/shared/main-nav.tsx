"use client";

import React, { useEffect, useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MdMailOutline } from "react-icons/md";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/mode-toggle";
import NavLinks from "@/components/shared/nav-links";
import VVLogo from "@/components/shared/vv-logo";
import Link from "next/link";
import { motion } from "framer-motion";
import NavSheet from "./nav-sheet";

export default function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };

    // Call handleScroll on initial render
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-2xl border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", bounce: 0.25 }}
    >
      <nav
        className="mx-auto flex w-full lg:max-w-7xl items-center justify-between "
        aria-label="Global"
      >
        <div className="flex items-center gap-x-12 z-50">
          <VVLogo />
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>
        <div className="flex lg:hidden z-50 ">
          {/* <NavDropdown /> */}
          <NavSheet />
        </div>
        <div className="hidden lg:flex space-x-1 z-50">
          <Link
            href="deepshikhapatel@oriental.ac.in"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <MdMailOutline className="h-4 w-4" />
            </Button>
          </Link>
          <Link
            href="https://github.com/Nev-Labs/ACM_OIST"
            rel="noreferrer"
            target="_blank"
          >
            <Button className="flex items-center" variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>
          <ModeToggle />
          {/* Add Register Button Here */}
          <Link href="/register">
            <Button className="flex items-center" variant="default">
              Register
            </Button>
          </Link>
          {/* Add Login Button Here */}
          <Link href="/login">
            <Button className="flex items-center" variant="default">
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
