import Head from 'next/head'
import {PostCard, Categories, PostWidget} from '../components';
import {getBlog} from '../Services'
import FeaturedPost from '../section/FeaturedPost'

export default function Home ({posts}){
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Remaja Ikhlas</title>
        <link rel = "icon" href = "G1rqUMSA.png" type = "image/x-icon"></link>
      </Head>
      {/* jika lebar tidak lg maka kolomnya 1, jika sebaliknya maka kolomnya 12 */}
      <FeaturedPost/>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className='lg:col-span-8 col-span-1'>
          {posts.map((e,i)=>(
            <div key={i}>
              <PostCard post={e}/>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
            <div className='lg:sticky relative top-8'>
              <PostWidget/>
              <Categories/>
            </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  // jika tidak ada data maka berikan empty array
  const posts = (await getBlog()) || [];

  return{
    props:{posts}
  }
}
