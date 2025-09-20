import React from 'react'

const Footer = () => {
  return (
    <div className="p-6 text-accent-foreground font-light flex justify-center gap-2 mt-12">
      <div className='flex flex-col items-center'>
        <div>
          <span className='font-semibold text-sm'>Jyoti Prakash Panda </span> © {new Date().getFullYear()}
        </div>
      </div>
    </div>
  )
}

export default Footer
