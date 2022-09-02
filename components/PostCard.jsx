import React from 'react';
import moment from 'moment';
import Link from 'next/link';

function PostCard({post}) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src={post.node?.foto?.url} alt="ini foto" className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'/>
      </div>
      <h1 className='transition duration-700 text-center mb-8 cursor-pointer hover:text-green-500 text-3xl font-semibold'>
        <Link href={`/post/${post.node.slug}`}>{post.node.judul}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-between mb-8 w-full '>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-2'>
          <img src={post.node.penulis.foto.url} height="30px" width="30px" className='align-middle rounded-full' alt="" />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.node.penulis.namaPenulis}</p>
        </div>
        <div className='font-medium text-gray-700'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{moment(post.node.createdAt).format('MMM d, YYYY')}</span>
        </div>
      </div>
      <p className="text-center text-lg font-normal px-4 lg:px-20 mb-8">{post.node.kontenTerbatas}</p>
      <div className="text-center">
        <Link href={`/post/${post.node.slug}`}>
          <span className='cursor-pointer transition duration-500 transform hover:-translate-y-1 inline-block text-lg font-medium rounded-full text-white px-8 py-3 bg-green-500'>Lanjut Membaca</span>
        </Link>
      </div>
    </div>
  )
}

export default PostCard