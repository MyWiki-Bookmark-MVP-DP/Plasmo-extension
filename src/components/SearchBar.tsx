import SearchLogo from "data-base64:~assets/searchlogo.svg"
import React from "react"

import { translation } from "~translate"

export default function SearchBar() {
  return (
    <div className="relative w-full h-14 border-b-2 border-gray-400 flex items-center justify-center pb-2">
      <div className="pointer-events-none absolute flex items-center rounded-md left-3 px-2 ">
        {/* <MagnifyingGlassIcon className="w-4 h-5 text-white" /> */}
        <img className="h-[38px]" src={SearchLogo} alt="" />
      </div>

      <input
        type="text"
        name="text"
        id="text"
        className="block  outline-none text-lg placeholder:font-bold placeholder:text-black w-full pl-[76px] sm:text-sm sm:leading-6"
        placeholder={translation.Finder_io}
      />
    </div>
  )
}
