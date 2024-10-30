
import Image from 'next/image';
import T20 from "@/app/images/pak-squad.jpg"
import ICC from "@/app/images/icc.jpeg"
import Test from "@/app/images/test.jpeg"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center gap-10 mt-28">
        <div className="w-[20%] h-[55vh] border-solid border-4 border-green-900 rounded-2xl bg-green-200 shadow-2xl shadow-slate-400">
          <Image
            className="border-none rounded-t-xl rounded-b-none"
          src={T20}
          alt="t20team"
          width={300}
          height={150}
          />
          <div className="pr-4 pl-4">
            <h2 className="text-xl font-sans font-bold text-green-900 pt-3">T20</h2>
            <p>T20 cricket is a fast, 20-over game focused on intense action, big hits, and excitement, captivating fans worldwide since 2003.</p>
            <Link href="/t20-team"><button className="border-solid border-2 p-2 mt-3 border-green-900 rounded bg-white">Read More</button></Link>
          </div>
        </div>
        <div className="w-[20%] h-[55vh] border-solid border-4 border-green-900 rounded-2xl bg-green-200 shadow-2xl shadow-slate-400">
        <Image
          className="border-none rounded-t-xl rounded-b-none"
          src={ICC}
          alt="t20team"
          width={300}
          height={150}
          />
          <div className="pr-4 pl-4">
            <h2 className="text-xl font-sans font-bold text-green-900 pt-3">ICC</h2>
            <p>ICC governs global cricket, setting rules, organizing major tournaments, and promoting the sport worldwide, ensuring fair play and integrity.</p>
            <Link href="/icc-team"><button className="border-solid border-2 p-2 mt-3 border-green-900 rounded bg-white">Read More</button></Link>
          </div>
        </div>
        <div className="w-[20%] h-[55vh] border-solid border-4 border-green-900 rounded-2xl bg-green-200 shadow-2xl shadow-slate-400">
        <Image
          className="border-none rounded-t-xl rounded-b-none"
          src={Test}
          alt="t20team"
          width={300}
          height={150}
          />
          <div className="pr-4 pl-4">
            <h2 className="text-xl font-sans font-bold text-green-900 pt-3">Test</h2>
            <p>A Test match is cricket’s longest format, lasting five days, emphasizing skill, endurance, and strategy with two innings per team.</p>
            <Link href="/test-team"><button className="border-solid border-2 p-2 mt-3 border-green-900 rounded bg-white">Read More</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
