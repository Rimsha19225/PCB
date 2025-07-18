
async function About(){
  await new Promise((resolve)=>{
    setTimeout(resolve,5000)
  })
  return (
    <div className="w-full max-w-[95%] md:max-w-[60%] m-auto py-10">
      <h2 className="text-3xl md:text-5xl text-green-900 font-bold text-center pb-10">About PCB</h2>
        <div className="border-solid border-4 md:border-8 rounded-3xl p-4 bg-green-200 border-green-900 shadow-xl shadow-slate-400">
            <div className="text-[0.9rem] md:text-[1.3rem] w-[100%] text-justify">
                <p>The Pakistan Cricket Board (PCB) is the sole governing body for the game of cricket in Pakistan, which was established under the Sports (Development and Control) Ordinance 1962 as a body corporate having perpetual succession with exclusive authority for the regulation, administration, management and promotion of the game of cricket in Pakistan.</p>
                <p>The PCB operates through its own Constitution, generates its revenues, which are reinvested in the development of cricket. It receives no grants, funds or monies from either the Federal or Provincial Governments, the Consolidated Funds or the Public Exchequer.</p>
                <p>The PCB’s mission is to inspire and unify the nation by channelising the passion of the youth, through its winning teams and by providing equal playing opportunities to all.</p>
                <p>Over the next five years, the PCB will be focusing on six key priority areas that include establishing sustainable corporate governance, delivering world-class international teams, developing a grassroots and pathways framework, inspiring generations through our women’s game, growing and diversifying commercial revenue streams, and enhancing the global image of Pakistan.</p>
                <p>The PCB also remains committed to developing ground and facility cricket infrastructure, monitoring the implementation of playing codes and regulations, and supporting the game at every level through its high quality training provision for officials and coaches.</p>
            </div>
        </div>
    </div>
  )
}

export default About
