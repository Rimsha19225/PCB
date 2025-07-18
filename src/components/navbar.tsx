'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/images/pcb-logo-600x600.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-green-200 w-full h-[10vh] md:h-[15vh] relative z-50">
      <div className="max-w-[80%] m-auto flex justify-between items-center">
        <Link href={"/"}><Image src={logo} alt="pcb logo" width={110} height={100} className="w-[3rem] md:w-[5rem] h-[3.5rem] md:h-[5.5rem] pt-2 md:pt-4"/></Link>
        <h1 className="hidden md:block font-bold text-4xl text-green-900 font-serif pt-4 mr-[11rem]">Pakistan Cricket Board</h1>
        <div className="hidden md:flex justify-end gap-8 pt-4 font-sans text-2xl text-green-700 font-semibold">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/t20-team"}>T20</Link>
          <Link href={"/icc-team"}>ICC</Link>
          <Link href={"/test-team"}>Test</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        <div className="block md:hidden pt-3 text-[2rem] text-green-900 cursor-pointer" onClick={toggleMenu}>☰</div>
      </div>
      <div className={`fixed top-5 right-0 h-[60%] w-[45%] rounded-tl-[1rem] rounded-bl-[1rem] bg-green-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-6 flex flex-col gap-6 font-semibold text-green-800 text-[1.1rem]">
          <button onClick={toggleMenu} className="text-3xl self-end">×</button>
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/t20-team" onClick={toggleMenu}>T20</Link>
          <Link href="/icc-team" onClick={toggleMenu}>ICC</Link>
          <Link href="/test-team" onClick={toggleMenu}>Test</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;