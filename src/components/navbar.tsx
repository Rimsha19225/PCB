import Link from "next/link"
import Image from "next/image";
import logo from "@/app/images/pcb-logo-600x600.png"
const Navbar = () => {
  return (
    <div>
      <div className="bg-green-200 w-screen h-18 flex justify-between">
      <Image
      src={logo}
      alt="pcb logo"
      width={110}
      height={100}
      className="pl-4 mb-[-3rem] pt-2"
      />
      <h1 className="font-bold text-4xl text-green-900 font-serif pt-2 mr-72">Pakistan Cricket Board</h1>
      <div className="flex justify-end gap-8 mr-8 pt-3 font-sans text-2xl text-green-700 font-semibold">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/t20-team"}>T20</Link>
        <Link href={"/icc-team"}>ICC</Link>
        <Link href={"/test-team"}>Test</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
