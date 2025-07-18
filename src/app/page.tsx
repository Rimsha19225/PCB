
import Image from 'next/image';
import T20 from "@/app/images/pak-squad.jpg"
import ICC from "@/app/images/icc.jpeg"
import Test from "@/app/images/test.jpeg"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-[90%] my-10 md:my-0 md:max-w-[65%] md:h-[80vh] m-auto justify-center items-center gap-4">
        <div className="w-[100%] h-auto pb-4 border-solid border-4 border-green-900 rounded-2xl bg-green-200 shadow-2xl shadow-slate-400">
          <Image className="w-full border-none rounded-t-xl rounded-b-none" src={T20} alt="t20team" width={300} height={150}/>
          <div className="pr-4 pl-4">
            <h2 className="text-xl font-sans font-bold text-green-900 pt-3">T20</h2>
            <p className='text-justify text-[0.9rem]'>T20 cricket is a fast, 20-over game focused on intense action, big hits, and excitement, captivating fans worldwide since 2003.</p>
            <Link href="/t20-team"><button className="border-solid border-2 px-2 md:px-4 py-1 md:py-2 mt-3 border-green-900 rounded bg-white">Read More</button></Link>
          </div>
        </div>
        <div className="w-[100%] h-auto pb-4 border-solid border-4 border-green-900 rounded-2xl bg-green-200 shadow-2xl shadow-slate-400">
        <Image
          className="w-full border-none rounded-t-xl rounded-b-none"
          src={ICC}
          alt="t20team"
          width={300}
          height={150}
          />
          <div className="pr-4 pl-4">
            <h2 className="text-xl font-sans font-bold text-green-900 pt-3">ICC</h2>
            <p className='text-justify text-[0.9rem]'>ICC governs global cricket, setting rules, organizing major tournaments, and promoting the sport worldwide, ensuring fair play and integrity.</p>
            <Link href="/icc-team"><button className="border-solid border-2 px-2 md:px-4 py-1 md:py-2 mt-3 border-green-900 rounded bg-white">Read More</button></Link>
          </div>
        </div>
        <div className="w-[100%] h-auto pb-4 border-solid border-4 border-green-900 rounded-2xl bg-green-200 shadow-2xl shadow-slate-400">
        <Image className="w-full border-none rounded-t-xl rounded-b-none" src={Test} alt="t20team" width={300} height={150}/>
          <div className="pr-4 pl-4">
            <h2 className="text-xl font-sans font-bold text-green-900 pt-3">Test</h2>
            <p className='text-justify text-[0.9rem]'>A Test match is cricket’s longest format, lasting five days, emphasizing skill, endurance, and strategy with two innings per team.</p>
            <Link href="/test-team"><button className="border-solid border-2 px-2 md:px-4 py-1 md:py-2 mt-3 border-green-900 rounded bg-white">Read More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
