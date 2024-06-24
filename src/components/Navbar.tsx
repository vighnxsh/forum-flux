import React from 'react'
import { Icons } from './Icons'
import Link from 'next/link'
import { buttonVariants } from './ui/Button'

export default function Navbar() {
  return (
   
   <div className='fixed top-0 inset-x-0 h-fit bg-zinc-200 border-zinc-300 z-[10] py-2'>
          
          <div className='container max-w-7xl h-full mx-auto flex items-center justify-between gap-2'>
             
             <Link href='/' className='flex gap-2 items-center'>
             
             <Icons.logo className='h-8 w-8 sm:h-6 sm:w-6' /> 

             <p className='hidden text-amber-700 text-lg font-medium md:block selection:'>ForumFLux</p>
             
             </Link>
             {/* <SearchBar/> */}
             <Link className={buttonVariants({
                variant:'custom1',
             })} href='sign-in'>
                Sign In
             </Link>
           </div>
                   
      
    </div>
  )
}
