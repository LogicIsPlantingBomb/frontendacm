'use client'
import { Separator } from "@radix-ui/react-dropdown-menu"; // Assuming this is needed elsewhere

export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
   <hr className=" border-gray-600 " />
      <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
  
        <footer className="">
          
          <div className="container flex flex-wrap justify-between items-center gap-4 py-4 md:flex-row"> {/* Added flex-wrap and py-4 */}
            {/* About section */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-medium text-balance md:text-left">About Us</h3>
              <p className="text-base text-muted-foreground text-justify md:text-left">
              ACM OIST-Bhopal is a student chapter highly focused on planning and organising events for coding and development.
              </p>
            </div>

            {/* Navigation section */}
            <nav className="flex flex-col space-y-2 md:space-y-0">
              <h3 className="text-lg font-medium text-balance md:text-left">Navigation</h3>
              <ul className="text-base text-muted-foreground list-none pl-0">
                <li>
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="/events" className="hover:underline">Events</a>
                </li>
                {/* Add more navigation links as needed */}
              </ul>
            </nav>

            {/* Contact or social media section (optional) */}
            <div className="flex flex-col space-y-2 items-right md:items-start">
              <h3 className="text-lg font-medium text-balance">Contact</h3>
              <ul className="text-base text-muted-foreground list-none pl-0">
                <li className="sm:text-right">
                  <a href="deepshikhapatel@oriental.ac.in" className="hover:underline">
                  deepshikhapatel@oriental.ac.in
                  </a>
                </li>
                {/* Add social media links (icons or text) */}
              </ul>
            </div>
          </div>

         

          <div className="container flex flex-col items-center justify-between gap-2 pt-4 pb-2 text-sm text-muted-foreground md:flex-row md:justify-center">
            <p className="md:text-left">
              Built by{" "}
              <a
                href="https://github.com/nevernever69" // Replace with your link
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                never
              </a>
            </p>
            <p className="md:text-right">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </dl>
    </div>
  );
}
