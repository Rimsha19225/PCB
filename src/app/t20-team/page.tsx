
import Link from "next/link"

const T20Match = () => {
  return (
    <div className="w-full max-w-[95%] md:max-w-[60%] m-auto py-10">
      <h2 className="text-3xl md:text-5xl text-green-900 font-bold text-center pb-10">T20 Cricket</h2>
      <div className="border-solid border-4 md:border-8 rounded-3xl p-4 bg-green-200 border-green-900 shadow-xl shadow-slate-400">
        <div className="text-[0.9rem] md:text-[1.3rem] w-[100%] text-justify">
          <p className="pt-2">T20 cricket, short for Twenty20 cricket, is a dynamic format that has transformed the sport since its introduction in 2003. Each match consists of 20 overs per team, making it a fast-paced and entertaining spectacle lasting about three hours. The format was created to appeal to a broader audience, culminating in the inaugural T20 World Cup in 2007, which showcased the excitement of this new style.</p>
          <p>In T20 matches, teams adopt aggressive strategies, focusing on high-scoring innings and boundary-hitting rather than accumulating runs steadily. This approach has led to the rise of explosive players like Chris Gayle, Virat Kohli, and AB de Villiers, who have become icons of the format.</p>
          <p>T20 cricket has also spurred the development of various domestic leagues, notably the Indian Premier League (IPL), which attracts international talent and millions of fans. Despite debates about its impact on traditional formats, T20 continues to thrive, captivating audiences with its thrilling moments, nail-biting finishes, and innovative gameplay. As a result, T20 cricket plays a crucial role in expanding the sports reach and engaging new generations of fans.</p>
          <Link href={"/t20-team/t20-squard"}><button className="border-solid border-2 px-4 md:px-10 py-1 md:py-2 mt-3 border-green-900 rounded bg-white text-2xl text-green-900 font-bold">Squard</button></Link>
        </div>
      </div>
    </div>
  )
}

export default T20Match
