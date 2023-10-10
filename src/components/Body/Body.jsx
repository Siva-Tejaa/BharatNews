import React from 'react'
import TopHeadlines from '../TopHeadlines/TopHeadlines'

const Body = () => {
  return (
    <div className='bg-[var(--background-color)] p-1 text-[14px] tablet:flex justify-center laptop:p-2  '>
      <div className="flex items-center flex-col">
      <marquee className='items-center text-lg font-bold pt-2 pb-2 text-red-400'>Under Development</marquee>
        <TopHeadlines/>
      </div>
    </div>
  )
}

export default Body