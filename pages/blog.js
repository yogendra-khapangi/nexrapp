import Link from 'next/link'
import React from 'react'

function Blog() {
    return (
        < >
            <div className='flex justify-center'>Blog</div>
            <div className='flex justify-center'>
                <h1>letest news</h1>
                <h6>
                    how to learn javascript?
                </h6>
                <hr></hr>
                

                <Link href={'/blogpost/howtolearnjava'}>
                <h6>
                    how to learn flutter?
                </h6>
                </Link>
            </div>
        </>
    )
}

export default Blog