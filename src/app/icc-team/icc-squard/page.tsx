import Image from "next/image"
import babar from "@/app/images/babar.jpeg"
import rizwan from "@/app/images/rizwan.jpeg"
import fakhar from "@/app/images/Fakhar-Zaman.webp"
import imam from "@/app/images/imam.png"
import shadab from "@/app/images/shadab-khan.avif"
import abdullalah from "@/app/images/usman.jpeg"
import saud from "@/app/images/saud.jpeg"
import nawaz from "@/app/images/nawaz.jpeg"
import salman from "@/app/images/salman.jpeg"
import harisRauf from "@/app/images/haris-rauf.jpg"
import usama from "@/app/images/usama.jpeg"
import iftakhar from "@/app/images/iftakhar.jpg"
import hassan from '@/app/images/hasan.png';
import wasim from "@/app/images/wasim.jpeg"
import shaheen from "@/app/images/shaheen-afridi.webp"

const ICC_Squard = () => {
    return (
      <div className="w-full max-w-[95%] md:max-w-[60%] m-auto py-10">
        <h1 className="text-3xl md:text-5xl text-green-900 font-bold text-center pb-10">ODI Team 2024</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-2 md:gap-4">
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={babar}
          alt="babar"
          width={250}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">BABAR AZAM</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={rizwan}
          alt="rizwan"
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">M. RIZWAM</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={shadab}
          alt="shadab"
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">SHADAB KHAN</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={fakhar}
          alt="fakhar"
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">FAKHAR ZAMAN</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={usama}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">USAMA MIR</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={abdullalah}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">ABDULLAH SHAFIQ</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={imam}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">IMAM UL HAQ</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={saud}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">SAUD SHAKEEL</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={nawaz}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">M. NAWAZ</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={hassan}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">HASSAN ALI</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={harisRauf}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">HARIS RAUF</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={iftakhar}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">IFTAKHAR AHMED</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={salman}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">SALMAN ALI AGHA</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={shaheen}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">SHAHEEN AFRIDI</h2>
        </div>
        <div className="w-full h-auto rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200 transition duration-300 md:hover:scale-[1.03]">
          <Image 
          src={wasim}
          alt=""
          width={150}
          height={120}
          className="w-full h-36 md:h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-[1rem] md:text-2xl font-bold text-center py-2 md:py-4">M. WASIM JNR</h2>
        </div>
        </div>
      </div>
    )
  }
  
  export default ICC_Squard