import Link from "next/link"

const Contact = () => {
  return (
    <div className="w-full max-w-[95%] md:max-w-[60%] m-auto py-10">
      <h2 className="text-3xl md:text-5xl text-green-900 font-bold text-center pb-6">Contact Me</h2>
      <div className='w-[100%] h-auto mt-6 bg-green-200 rounded-3xl p-2 md:p-8 border-solid border-4 md:border-8 border-green-900 shadow-2xl shadow-slate-400'>
        <form action="Post">
            <legend className='text-xl font-bold text-green-900 mt-2'>Name:</legend>
            <input type="text" placeholder='Enter Your Name' className='w-[100%] p-2 rounded-xl' />
            <legend className='text-xl font-bold text-green-900 mt-4'>Email:</legend>
            <input type="email" placeholder='Enter Your Email' className='w-[100%] p-2 rounded-xl' />
            <legend className='text-xl font-bold text-green-900 mt-4'>Phone NO:</legend>
            <input type="number" placeholder='Enter Your Phone number' className='w-[100%] p-2 rounded-xl' />
            <legend className='text-xl font-bold text-green-900 mt-4 mb-2'>Gender:</legend>
            <span className=" bg-white w-[100%] p-2 rounded-xl">
              Male
              <input type="radio" name='gender' value="male" className='ml-4 mr-4'/>
              Female
              <input type="radio" name='gender' value="female" className='ml-4'/>
            </span>
            <legend className='text-xl font-bold text-green-900 mt-4'>Comment:</legend>
            <textarea rows={5} cols={50} placeholder='write Message....' className='w-[100%] h-[10vh] p-2 rounded-xl'></textarea>
            <Link href="mailto:adeelarshad8900@gmail.com"><button className='w-28 p-2 mt-2 bg-green-900 rounded-2xl text-white font-bold'>Submit</button></Link>
        </form>
      </div>
    </div>
  )
}

export default Contact
