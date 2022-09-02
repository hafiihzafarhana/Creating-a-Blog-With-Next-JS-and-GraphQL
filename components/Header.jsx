import React, { useContext, useState, useEffect } from "react";

import Link from "next/link";
import { getCategories } from "../Services";

function Header() {
  const [kategori, setKategori] = useState([])
  useEffect(() => {
    getCategories().then((e)=>{
      setKategori(e)
    })
  }, [])
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-green-100 py-8">
        <div className="md:float-left block ">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl kecil:text-3xl text-white">
              Remaja Ikhlas
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents text-white ">
          {kategori.map((e) => (
            <Link key={e.slug} href={`/category/${e.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer ">
                {e.kategori}
              </span>
            </Link>
          ))}
          s
        </div>
      </div>
    </div>
  );
}

export default Header;
