import Image from "next/image"
import babar from "@/app/images/babar.jpeg"
import rizwan from "@/app/images/rizwan.jpeg"
import fakhar from "@/app/images/Fakhar-Zaman.webp"
import imad from "@/app/images/Imad-Wasim.jpg"
import shadab from "@/app/images/shadab-khan.avif"
import usman from "@/app/images/usman.jpeg"
import azam from "@/app/images/azam.jpeg"
import abas from "@/app/images/abas.jpeg"
import naseem from "@/app/images/naseem.webp"
import harisRauf from "@/app/images/haris-rauf.jpg"
import saim from "@/app/images/saim.jpeg"
import iftakhar from "@/app/images/iftakhar.jpg"
import abrar from '@/app/images/abrar.jpeg';
import amir from "@/app/images/amir.jpeg"
import shaheen from "@/app/images/shaheen-afridi.webp"

const T20_Squard = () => {
    return (
      <div>
        <h1 className="text-green-900 text-4xl font-bold text-center pt-16">T20 Team 2024</h1>
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
          src={saim}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">SAIM AYUB</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={usman}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">USMAN KHAN</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={imad}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">IMAD WASIM</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={azam}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">AZAM KHAN</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={abas}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">ABBAS AFRIDI</h2>
        </div>
        <div className="w-80 h-80 rounded-2xl bg-green-200 border-solid border-2 border-green-900 shadow-2xl shadow-green-200">
          <Image 
          src={abrar}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">ABRAR AHMED</h2>
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
          src={naseem}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">NASEEM SHAH</h2>
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
          src={amir}
          alt=""
          width={150}
          height={120}
          className="w-80 h-60 rounded-t-xl rounded-b-none"
          />
          <h2 className="text-green-900 text-2xl font-bold text-center pt-4">M. AMIR</h2>
        </div>
        </div>
      </div>
    )
  }
  
  export default T20_Squard