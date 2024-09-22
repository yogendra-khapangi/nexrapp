import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex  justify-center space-x-8 underline list-none font-medium my-11'>
        <Link href='/'> <li>Home</li>  </Link>
        <Link href='/about'> <li>About</li>  </Link>
        
        <Link href='/contact'><li>Contact</li></Link>
        
        <Link href='/blog'><li>Blog</li></Link>
    </div>
  )
}

export default Navbar