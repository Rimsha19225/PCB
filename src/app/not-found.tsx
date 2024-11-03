import Link from "next/link"
const Notfound = () => {
  return (
    <div>
      <h1 className="text-center mt-48 text-5xl text-green-900 font-sans">&ldquo;Sorry That Page Not Found&ldquo;</h1>
      <p className="ml-[46%] mt-5 text-5xl">🙂</p>
      <Link href="/"><button className='w-48 p-3 bg-green-200 ml-[42%] mt-4 rounded-2xl text-green-900 font-bold text-2xl'>Go To Home</button></Link>
    </div>
  )
}

export default Notfound
