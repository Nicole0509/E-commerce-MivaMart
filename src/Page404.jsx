import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className="flex flex-col items-center justify-center gap-5">

        <p className='text-textColor text-2xl'>

        Oops! The page you're looking for is not available at the moment.
        
        </p>
        <Link to='/' className='rounded-lg px-4 py-2 text-lg bg-textColor text-white hover:opacity-70'>Back to Home</Link>
        </div>
        </div>
  )
}

export default Page404