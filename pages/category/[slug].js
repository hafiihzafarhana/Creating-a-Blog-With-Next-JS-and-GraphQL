import React from 'react'
import { useRouter } from 'next/router';

import {PostCard, Categories, Loader} from './../../components'
import {getCategories, getCategoryBlog} from './../../Services'

function PostCaregory({blog}) {
  const router = useRouter()
  if(router.isFallback){
    return <Loader/>;
  }

    return (
    <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="col-span-1 lg:col-span-8">
                {blog.map((e,index)=>(
                    <PostCard key={index} post={e}/>
                ))}
            </div>
            <div className="col-span-1 lg:col-span-4">
                <div className="relative lg:sticky top-8">
                    <Categories />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCaregory

export async function getStaticProps({params}){
    const blog = await getCategoryBlog(params.slug)

    return {
        props:{blog}
    }
}

export async function getStaticPaths(){
    const blog = await getCategories();

    return {
        paths: blog.map(({slug}) => ({params:{slug}})),
        fallback:true
    }
}