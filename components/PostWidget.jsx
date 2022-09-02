import moment from 'moment'
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { getRecentBlogs, getSimilarBlogs } from '../Services'

function PostWidget({categories, slug}) {
  const [relatedPosts, setRelatedPosts] = useState([])
  useEffect(()=>{
    if(slug){
      getSimilarBlogs(categories, slug)
      .then((e)=>{
        setRelatedPosts(e)
      })
    } else{
      getRecentBlogs()
      .then((e)=>setRelatedPosts(e))
    }
    
  },[slug])
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? "Artikel Terkait":"Artikel Terbaru"}
      </h3>
        {relatedPosts?.map((e)=>(
          <div key={e} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img src={e.foto.url} alt="" height="60px" width="60px" className='align-middle rounded-lg'/>
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-xs'>{moment(e.createdAt).format('MMM d, YYYY')}</p>
              <Link href={`/post/${e.slug}`} className='text-xs' key={e.judul}>{e.judul}</Link>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostWidget