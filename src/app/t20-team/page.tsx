
import Link from "next/link"

const T20Match = () => {
  return (
    <div>
      <div className="mr-24 ml-24 mt-20 border-solid border-8 rounded-3xl p-4 bg-green-200 border-green-900 shadow-xl shadow-slate-400">
        <h2 className=" pl-10 text-4xl font-mono text-green-900 font-bold">T20 Cricket</h2>
        <div className="text-[1.3rem] pl-24 w-[100%]">
          <p className="pt-2">T20 cricket, short for Twenty20 cricket, is a dynamic format that has transformed the sport since its introduction in 2003. Each match consists of 20 overs per team, making it a fast-paced and entertaining spectacle lasting about three hours. The format was created to appeal to a broader audience, culminating in the inaugural T20 World Cup in 2007, which showcased the excitement of this new style.</p>
          <p>In T20 matches, teams adopt aggressive strategies, focusing on high-scoring innings and boundary-hitting rather than accumulating runs steadily. This approach has led to the rise of explosive players like Chris Gayle, Virat Kohli, and AB de Villiers, who have become icons of the format.</p>
          <p>T20 cricket has also spurred the development of various domestic leagues, notably the Indian Premier League (IPL), which attracts international talent and millions of fans. Despite debates about its impact on traditional formats, T20 continues to thrive, captivating audiences with its thrilling moments, nail-biting finishes, and innovative gameplay. As a result, T20 cricket plays a crucial role in expanding the sports reach and engaging new generations of fans.</p>
          <Link href={"/t20-team/t20-squard"}><button className="border-solid border-2 p-2 mt-3 border-green-900 rounded bg-white w-52 text-2xl text-green-900 font-bold">Squard</button></Link>
        </div>
      </div>
    </div>
  )
}

export default T20Match
