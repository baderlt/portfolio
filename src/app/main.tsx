"use client";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Swith_mode from "./switch_mode";
import { cn } from "@/lib/utils";
import { use, useEffect, useState } from "react";

const Main =({
    children,
  }: {
    children: React.ReactNode;
  })=>{
    const [darkMode, setDarkMode] = useState<boolean>(true);
    const changeMode = (): void => {
      setDarkMode(!darkMode);
   
    };
    useEffect(()=>{
        document.documentElement.classList.toggle("dark", darkMode);
    },[darkMode])

 
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme={darkMode ? "dark" :"light"}
        enableSystem
        disableTransitionOnChange
        >
        <main
          className={cn(
            "flex relative screen break-words min-h-screen items-center justify-between container")}
          >
          {/* NAVBAR -> */}
          <Navbar />
          <Swith_mode item={{ changeMode, darkMode }} />
          {children}

        </main>
      </ThemeProvider>
    )
}
export default Main;