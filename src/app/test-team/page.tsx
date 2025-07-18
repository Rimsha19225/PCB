
import Link from "next/link"

const TestMatch = () => {
  return (
    <div className="w-full max-w-[95%] md:max-w-[60%] m-auto py-10">
      <h2 className="text-3xl md:text-5xl text-green-900 font-bold text-center pb-10">Test Cricket</h2>
      <div className="border-solid border-4 md:border-8 rounded-3xl p-4 bg-green-200 border-green-900 shadow-xl shadow-slate-400">
        <div className="text-[0.9rem] md:text-[1.3rem] w-[100%] text-justify">
          <p className="pt-2">Test cricket is the longest and most traditional format of the game, representing the ultimate challenge for players and teams. Originating in the late 19th century, Test matches are played over five days, with each team batting twice, and are considered the pinnacle of cricketing skill and endurance.</p>
          <p>Each Test match consists of two innings per side, allowing teams to showcase their batting, bowling, and fielding abilities. This format emphasizes strategy, patience, and resilience, as players face varying conditions, pitches, and opposition tactics over an extended period.</p>
          <p>Test cricket is governed by the International Cricket Council (ICC) and features matches between full-member nations, with the iconic Ashes series between England and Australia being one of the most celebrated rivalries in the sport. The format has produced legendary players, such as Sir Don Bradman, Sachin Tendulkar, and Brian Lara, who have set remarkable records.</p>
          <p>Despite the rise of shorter formats like One Day Internationals (ODIs) and T20 cricket, Test matches retain a special place in the hearts of purists, showcasing the depth of skill and strategy that defines the game.</p>
          <Link href={"/test-team/test-squard"}><button className="border-solid border-2 px-4 md:px-10 py-1 md:py-2 mt-3 border-green-900 rounded bg-white text-2xl text-green-900 font-bold">Squard</button></Link>
        </div>
      </div>
    </div>
  )
}

export default TestMatch
