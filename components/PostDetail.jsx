import React from 'react'
import moment from 'moment';


function PostDetail({data}) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if(obj){
      if(obj.bold){
        modifiedText = (<b key={index}>{text}</b>)
      }
      if(obj.italic){
        modifiedText = (<i key={index}>{text}</i>)
      }
      if(obj.underline){
        modifiedText = (<u key={index}>{text}</u>)
      }
    }

    switch (type) {
      case 'heading-one':
        return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <div key={i}>{item}</div>)}</h1>;
        case 'heading-two':
        return <h1 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <div key={i}>{item}</div>)}</h1>;
      case 'heading-three':
        return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadown-md pb-80 mb-6">
        <img src={data.foto.url} className="object-top absolute h-full w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg" alt="" />
      </div>
      <div className='px-4 lg:px-0'>
        <div className='block lg:flex text-center items-center justify-between mb-8 w-full '>
          <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-2'>
            <img src={data.penulis.foto.url} height="30px" width="30px" className='align-middle rounded-full' alt="" />
            <p className='inline align-middle text-gray-700 ml-2 text-lg'>{data.penulis.namaPenulis}</p>
          </div>
          <div className='font-medium text-gray-700'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{moment(data.createdAt).format('MMM d, YYYY')}</span>
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-center mb-8 cursor-pointer">{data.judul}</h1>
        {data.konten.raw.children.map((e,i) => {
          const childs = e.children.map((e,i) => getContentFragment(i,e.text,e))
          // i akan menjadi index 
          // childs berisikan ()
          // e berisikan data.konten.raw.children (array)
          // e.type berisika data.konten.raw.children.type (tipe)
          const ac =getContentFragment(i, childs, e, e.type)
          return ac;
        })}
      </div>
    </div>
  )
}

export default PostDetail