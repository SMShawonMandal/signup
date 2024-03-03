import { Link } from "react-router-dom"

function App() {
  return (
    <>
      <div className='h-screen w-full bg-[#509FFC] flex justify-center items-center'>
        <div className='space-y-8 lg:w-[552px] md:w-[400px] w-[350px] max-h-[790px]  bg-[#D9D9D9] px-12 py-20 rounded-xl'>
          <div>
            <h1 className=' text-3xl font-bold text-center'> Login </h1>
          </div>
          <form action="" className=''>
            <div className='flex flex-col gap-4 pb-10'>
              <label htmlFor="" className='text-lg'>Username</label>
              <input type="text" className=' border-b-[1px] bg-transparent border-black focus:outline-none '  />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="" className='text-lg'>Password</label>
              <input type="password" className=' border-b-[1px] bg-transparent border-black focus:outline-none '/>
            </div>

            <div className='flex  justify-end pt-4 hover:underline'>
              <a href="#" className='hover:text-blue-500'>Forget password?</a>
            </div>
            <div className=' pt-10'>
              <button className='btn btn-info w-full text-xl font-bold text-white' type='submit'> LOGIN </button>
            </div>
          </form>
          <div className='flex gap-2 justify-center'>
            <p> New User? </p> 
            <Link to="/signup"> <p className='hover:underline hover:text-blue-500'>Sign Up</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
