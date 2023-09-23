import React from 'react';
import "./HeaderMenu.css";

import { NewsCategories } from '../utils/Api';

const HeaderMenu = () => {
  return (
    <div className='bg-[#FFFFFF] border-b-[1px] flex gap-4 overflow-auto slider mx-1 py-1 laptop:justify-around'>
        {
            NewsCategories.map((category) =>(
                <div key={category.id} className='hover:bg-[#e3e5e6] p-1 px-2 cursor-pointer rounded-md'>
                    <p className='text-[14px] font-[600]'>{category?.categoryName}</p>
                </div>
            ))
        }
    </div>
  )
}

export default HeaderMenu