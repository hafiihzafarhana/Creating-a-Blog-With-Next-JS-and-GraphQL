import React from 'react'
import { getDetailBlog, getBlog } from '../../Services'
import {Categories, Header, Layout, PostCard, PostWidget, CommentForm, Comments, PostDetail} from './../../components'
import Head from 'next/head'

const PostDetails = ({data}) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Remaja Ikhlas</title>
        <link rel = "icon" href = "G1rqUMSA.png" type = "image/x-icon"></link>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail data={data}/>
          <CommentForm slug={data.slug}/>
          <Comments slug={data.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
        <div className='lg:sticky relative top-8'>
              <PostWidget slug={data.slug} categories={data.kategori_semua.map((e)=>e.slug)} />
              <Categories/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostDetails

export async function getStaticProps({params}){
  // jika tidak ada data maka berikan empty array
  const data = await getDetailBlog(params.slug);

  return{
    props:{data:data}
  }
}

// untuk mengatasi dinamic url (seperti detail blog)
export async function getStaticPaths() {
  const data = await getBlog();
  return {
    paths: data.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}