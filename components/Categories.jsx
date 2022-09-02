import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import { getCategories } from '../Services'

function Categories() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then((e)=>{
      setCategories(e)
    })
  }, [])

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Kategori</h3>
      {categories.map((e)=>(
        <div key={e.slug} className="flex items-center w-full mb-4">
          <div className="flex-grow ml-4">
            <Link href={`/category/${e.slug}`}>
              <span className="cursor-pointer block">
                {e.kategori}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Categories