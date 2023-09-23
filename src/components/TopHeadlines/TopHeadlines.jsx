import React,{useState, useEffect} from 'react';
import {TOP_HEADLINES_IN_WORLD, FILTERS} from "../utils/Api.jsx"

const TopHeadlines = () => {

  const[sort, setSort] = useState("publishedAt")
  const [headlines, setHeadlines] = useState([]);
  const[loading, setLoading] = useState(false);

  const fetchTopHeadlines = async () => {
    await fetch(TOP_HEADLINES_IN_WORLD + sort + FILTERS)
     .then((res) => res.json())
     .then((json) => {
      setHeadlines(json.articles);
      setLoading(false);
     })
     .catch((err) => console.log(err));

  }

  useEffect(()=> {
    setLoading(true);
    fetchTopHeadlines();

  }, [])

  return (
    <div className='bg-white p-2 rounded-sm'>
        <div className='flex items-center justify-between tablet:w-[475px] laptop:w-[600px]'>
            <div className='text-[18px] font-extrabold flex items-center text-[#2f2f2f] fontfamily tablet:text-[20px]'><div className='w-1 h-8 rounded-full bg-[#2f2f2f] mr-1'></div>Top Headlines</div>
            <div>
                <select className='p-2 bg-[#f0f1f2] outline-none rounded-sm'>
                    <option>Published At</option>
                    <option>Popularity</option>
                    <option>Relevancy</option>
                </select>
            </div>
        </div>
        <div>
            {
                headlines?.map((headline, index) => (
                    <div key={index} className='bg-white shadow-[0_0_6px_0_rgba(121,121,121,0.3)] my-5 p-4 rounded-md hover:shadow-[0_0_10px_0_rgba(121,121,121,0.3)] tablet:w-[475px] laptop:w-[600px]'>
                        <div className='text-[16px] font-semibold tit-desc'>{headline?.title}</div>
                        <img src={headline?.urlToImage} alt="Bharat News" className='rounded-sm'/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopHeadlines