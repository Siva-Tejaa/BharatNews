import React from 'react';
import TheBharatNewsLogoWhite from "../../assets/TheBharatNewsLogoWhite.png";
import SearchIcon from "../../assets/SearchIcon.png";

const Header = () => {
  return (
    <div className='text-white bg-[var(--main-color)] flex items-center justify-between p-1'>
        <div>
            <img src={TheBharatNewsLogoWhite} className='w-80'/>
        </div>
        <div>
            <form className='flex items-center justify-center'>
                <input type="search" placeholder="Search Bharat News..." className='p-1'/>
                <button className='bg-[#464849] p-1 px-2'><img src={SearchIcon} className='w-5'/></button>
            </form>
        </div>
    </div>
  )
}

export default Header