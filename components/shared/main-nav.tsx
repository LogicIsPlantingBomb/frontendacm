// src/components/shared/main-nav.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MdMailOutline } from "react-icons/md";
import { Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/shared/mode-toggle";
import NavLinks from "@/components/shared/nav-links";
import VVLogo from "@/components/shared/vv-logo";
import Link from "next/link";
import NavSheet from "./nav-sheet";

export default function MainNav() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEditClick = () => {
    if (!isLoggedIn) {
      router.push('/login');
    } else {
      router.push('/edit');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-2xl border-b">
      <nav className="mx-auto flex w-full lg:max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-x-12">
          <VVLogo />
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLinks />
          </div>
        </div>

        <div className="flex lg:hidden">
          <NavSheet />
        </div>

        <div className="hidden lg:flex items-center space-x-2">
          <Link
            href="mailto:deepshikhapatel@oriental.ac.in"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <MdMailOutline className="h-4 w-4" />
            </Button>
          </Link>

          <Link
            href="https://github.com/Nev-Labs/ACM_OIST"
            rel="noreferrer"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>

          <ModeToggle />

          {/* Edit Button */}
          <Button 
            variant="outline" 
            size="icon"
            onClick={handleEditClick}
            className="relative group"
          >
            <Edit className="h-4 w-4" />
            <span className="sr-only">Edit Profile</span>
            {!isLoggedIn && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Login required
              </span>
            )}
          </Button>

          {!isLoggedIn ? (
            <>
              <Link href="/register">
                <Button variant="outline">Register</Button>
              </Link>
              <Link href="/login">
                <Button variant="default">Login</Button>
              </Link>
            </>
          ) : (
            <Button 
              variant="ghost" 
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </Button>
          )}
        </div>
      </nav>
    </header>
  );
}
