"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import Link from "next/link";
import React from "react";

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="flex items-center space-x-6 text-md">
      <Link
        href="/events"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/usage" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Events
      </Link>
      <Link
        href="/team"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/text-variants"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        Team
      </Link>
      <Link
        href="/projects"
        className={cn(
          "transition-colors hover:text-foreground/80",
          pathname === "/usage" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Projects
      </Link>
      <Link
      href="/about"
        className={cn(
          "ransition-colors hover:text-foreground/80",
          pathname === "/page-variants"
            ? "text-foreground"
            : "text-foreground/60"
        )}
      >
        About
      </Link>
    </div>
  );
}
