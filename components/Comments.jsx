import moment from 'moment'
import React, {useState, useEffect} from 'react'
import parse from 'html-react-parser'
import { getComments } from '../Services'

function Comments({slug}) {
  const [comments, setComments] = useState([])
  useEffect(()=>{
    getComments(slug).then((e)=>{
      setComments(e)
    })
  },[slug])
  return (
    <div>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((e)=>(
            <div className="border-b border-gray-100 mb-4 pb-4" key={e.id}>
              {console.log(e)}
              <p className="mb-4">
                <span className="font-semibold">{e.nama}</span>
                {' '}
                pada
                {' '}
                {moment(e.createdAt).format('MMM d, YYYY')}
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full">{parse(e.komentar)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Comments