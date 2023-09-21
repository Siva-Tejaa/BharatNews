import React from 'react';
import TheBharatNewsLogoWhite from "../../assets/TheBharatNewsLogoWhite.png";
import SearchIcon from "../../assets/SearchIcon.png";

const Header = () => {
  return (
    <div className='text-white bg-[var(--main-color)] flex items-center justify-between p-1 py-2 laptop:p-2'>
        <div>
            <img src={TheBharatNewsLogoWhite} className='w-64 tablet:w-80'/>
        </div>
        <div>
            <form className='hidden laptop:flex items-center justify-center'>
                <input type="search" placeholder="Search Bharat News..." className='w-80 p-1 py-[5px] text-black outline-none rounded-l-sm caret-[#011E29]'/>
                <button className='bg-[#011E29] p-1 px-3 border-[0.5px] border-solid border-white rounded-r-sm'><img src={SearchIcon} className='w-5'/></button>
            </form>
            <button className='bg-[#011E29] p-1 px-3 border-[0.5px] border-solid border-white laptop:hidden'><img src={SearchIcon} className='w-5'/></button>
        </div>
    </div>
  )
}

export default Header