import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="p-6 text-gray-600 font-light flex justify-center gap-2 dark:text-gray-400">
      <div className='flex flex-col items-center'>
      <div>
        <span className='font-semibold'>Jyoti Prakash Panda </span> © 2024
        </div>
        <div>
          <p>Inspired by <Link href="https://manuarora.in" target="_blank" className='hover:underline '>Manu Arora</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
