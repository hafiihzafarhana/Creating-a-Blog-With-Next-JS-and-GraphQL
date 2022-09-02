import React from 'react'

function Author({penulis}) {
  return (
    <div>
      <img src={penulis.foto.url} alt="" height="100" width="100" className="rounded-full " />
    </div>
  )
}

export default Author