"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { Download, Link } from "lucide-react";

const HackerBtn = ({ label }: { label: string }) => {
  const charset = "abcdefghijklmnopqrstuvwxyz";
  const [displayText, setDisplayText] = useState(label);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  
  return (
    <Button
      size={"lg"}
      className="text-base px-5 py-6"
      onMouseEnter={startScrambling}
    >
    {/* //   {" "}
    //   <Download className="mx-1" />
    //   <a href="/Bader_Latrache_FR.pdf" download="cv_Bader_Latrache">
    //     {displayText}
    //   </a> */}
   
   <div className="relative inline-block text-left">
      <button
        onClick={toggleMenu}
        className="inline-flex justify-center w-full "
        type="button"
      >
   
        {displayText}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.44l3.71-4.21a.75.75 0 111.08 1.04l-4 4.5a.75.75 0 01-1.08 0l-4-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          ref={menuRef}
          className="origin-bottom-right absolute right-[-20px] bottom-10  w-36 rounded-md shadow-lg text-wh ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="/LATRACHE_BADER_FR.pdf"
              className="text-white  hover:text-gray-700 flex justify-between px-4 py-2 border-b  border-b-gray-200 text-sm hover:bg-gray-200"
              role="menuitem"
              download={"Bader_Latrache_CV"}
            >
             FR
             <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>
              </i>
            </a>
            <a
              href="/LATRACHE_BADER_ENG.pdf"
              className="text-white hover:text-gray-700  px-4 flex justify-between py-2 text-sm hover:bg-gray-200"
              role="menuitem"
              download={"Bader_Latrache_Resume"}
            >
              ENG
              <i>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>
              </i>
            </a>
          </div>
        </div>
      )}
    </div>
  </Button>
  );
};

export default HackerBtn;
