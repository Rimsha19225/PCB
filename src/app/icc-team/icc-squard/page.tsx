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
      <div>
        <h1 className="text-green-900 text-4xl font-bold text-center pt-16">ODI Team 2024</h1>
        <div className="grid grid-cols-3 gap-8 justify-center w-screen h-auto pt-10 pl-28 pb-10">
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={babar}
          alt="babar"
          width={250}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">BABAR AZAM</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={rizwan}
          alt="rizwan"
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">M. RIZWAM</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={shadab}
          alt="shadab"
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">SHADAB KHAN</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={fakhar}
          alt="fakhar"
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">FAKHAR ZAMAN</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={usama}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">USAMA MIR</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={abdullalah}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">ABDULLAH SHAFIQ</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={imam}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">IMAM UL HAQ</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={saud}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">SAUD SHAKEEL</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={nawaz}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">M. NAWAZ</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={hassan}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">HASSAN ALI</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={harisRauf}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">HARIS RAUF</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={iftakhar}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">IFTAKHAR AHMED</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={salman}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">SALMAN ALI AGHA</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={shaheen}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">SHAHEEN AFRIDI</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={wasim}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">M. WASIM JNR</h2>
        </div>
        </div>
      </div>
    )
  }
  
  export default ICC_Squard