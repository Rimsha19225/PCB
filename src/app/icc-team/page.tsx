
import Link from "next/link"

const IccMatch = () => {
  return (
    <div className="w-full max-w-[95%] md:max-w-[60%] m-auto py-10">
      <h2 className="text-3xl md:text-5xl text-green-900 font-bold text-center pb-10">International Cricket Council (ICC)</h2>
      <div className="border-solid border-4 md:border-8 rounded-3xl p-4 bg-green-200 border-green-900 shadow-xl shadow-slate-400">
        <div className="text-[0.9rem] md:text-[1.3rem] w-[100%] text-justify">
          <p className="pt-2">The International Cricket Council (ICC) is the global governing body for cricket, founded in 1909 as the Imperial Cricket Conference and renamed in 1965. Headquartered in Dubai, UAE, the ICC oversees the promotion and regulation of cricket worldwide.</p>
          <p>The ICC organizes major international tournaments, including the ICC Cricket World Cup, ICC T20 World Cup, and ICC Champions Trophy, featuring the best teams globally. It sets the rules and regulations for the sport, ensuring consistency across formats such as Test matches, One Day Internationals (ODIs), and T20 cricket.</p>
          <p>The ICC is dedicated to cricket development, implementing programs to nurture talent, especially in associate and affiliate member nations, and focusing on grassroots initiatives. Additionally, the ICC promotes womens cricket, increasing support and visibility for female players and tournaments.</p>
          <p>Its membership includes full members (Test-playing nations), associate members, and affiliate members. Through its various initiatives, the ICC aims to maintain crickets integrity, promote fair play, and ensure the sports continued growth and popularity worldwide.</p>
          <Link href={"/icc-team/icc-squard"}><button className="border-solid border-2 px-4 md:px-10 py-1 md:py-2 mt-3 border-green-900 rounded bg-white text-2xl text-green-900 font-bold">Squard</button></Link>
        </div>
      </div>
    </div>
  )
}

export default IccMatch
