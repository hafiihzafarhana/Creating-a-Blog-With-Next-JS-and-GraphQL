import React, {useState, useEffect, useRef} from 'react'
import { submitComment } from '../Services'

function CommentForm({slug}) {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccesMessage, setShowSuccesMessage] = useState(false)
  const name = useRef()
  const email = useRef()
  const comment = useRef()
  const storeData = useRef()

  useEffect(() => {
      name.current.value = window.localStorage.getItem('name')
      email.current.value = window.localStorage.getItem('name')
  }, [])
  

  const tambahKomen = () => {
    setError(false)
    setShowSuccesMessage(false)
    const {value:namaForm} = name.current;
    const {value:commentForm} = comment.current;
    const {value:emailForm} = email.current;
    const {checked:checkStoreData} = storeData.current;
    if(!namaForm || !emailForm || !email.current.value){
      setError(true)
      setShowSuccesMessage(false)
      return;
    }
    else{
      setShowSuccesMessage(true)
      setError(false)

      const commentObj = {
        namaForm, commentForm, emailForm, slug
      }

      // console.log(commentObj)

      if(checkStoreData){
        window.localStorage.setItem('nama', namaForm)
        window.localStorage.setItem('email', emailForm)
      } else{
        window.localStorage.removeItem('nama', namaForm)
        window.localStorage.removeItem('email', emailForm)
      }

      // store data
      submitComment(commentObj)
      .then((res)=>{
        setShowSuccesMessage(true)
        setTimeout(() => {
          setShowSuccesMessage(false)
        }, 5000);
      })
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Comment</h3>
      <div className='grid grid-cols-1 gap-4 mb-4 '>
         <textarea 
         ref={comment} 
         className='p-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100 text-gray-800'
         placeholder='Masukan komentar...'
         name='commentForm'
         cols="3"
         rows="3"/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 '>
          <input 
          ref={name}
          type="text" 
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100 text-gray-800'
          placeholder='Masukan nama...'
          name='nameForm'
          />
          <input 
          ref={email}
          type="email" 
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-1 focus:ring-gray-200 bg-gray-100 text-gray-800'
          placeholder='Masukan email...'
          name='emailForm'
          />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 '>
        <div>
          <input type={"checkbox"} ref={storeData} id="checkStoreData" name="checkStoreData" value={"true"}  />
          <label htmlFor='checkStoreData' className='ml-2 text-sm text-gray-500 cursor-pointer'> Simpan nama dan email untuk komentar berikutnya</label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500 '>Semua kolom harus terisi</p>}
      <div className="mt-8 ">
        <button type='button' 
        className='transition duration-500 ease bg-green-600 hover:bg-green-700 text-white  px-8 py-2 rounded-3xl inline-block cursor-pointer'
        onClick={tambahKomen}>Kirim!</button>
        {showSuccesMessage && <span className="float-right font-semibold mt-3 text-green-600">Komentar akan diperiksa</span>}
      </div>
    </div>
  )
}

export default CommentForm