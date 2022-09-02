import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function FeaturedPostCard({blog}) {
  return (
    <div className='relative h-48'>
      <div className='absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inlie-block w-full h-48' style={{ backgroundImage: `url('${blog.foto.url}')`}} />
      <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-48"/>
          <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment(blog.createdAt).format('MMM d, YYYY')}</p>
            <p className="text-white mb-4 text-shadow font-sembold text-2xl text-center">{blog.judul}</p>
            <div className='flex items-center absolute bottom-5 w-full justify-center'>
                {/* <Image
                  unoptimized
                  alt={blog.penulis.nama}
                  height="30px"
                  width="30px"
                  className="align-middle drop-shadow-lg rounded-full"
                  src={blog.penulis.foto.url}
                /> */}
                <p className="inkine align-middle text-white text-shadow ml-2 font-medium">{blog.penulis.nama}</p>
            </div>
          </div>
          <Link href={`/post/${blog.slug}`}>
            <span className="cursor-pointer absolute w-full h-full"></span>
          </Link>
    </div>
  )
}

export default FeaturedPostCard