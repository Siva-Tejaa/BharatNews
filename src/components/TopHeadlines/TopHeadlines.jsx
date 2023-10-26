import React,{useState, useEffect} from 'react';
import NoImageFound from "../../assets/NoImageFound.png";
import moment from 'moment'
// import {TOP_HEADLINES_IN_WORLD} from "../utils/Api.jsx"

const TopHeadlines = () => {

  const[sort, setSort] = useState("publishedAt")
  const [headlines, setHeadlines] = useState([]);
  const[loading, setLoading] = useState(false);

  const fetchTopHeadlines = async () => {
    await fetch("https://gnews.io/api/v4/top-headlines?category=world&lang=en&apikey=e042a1c3528b33266346284b0435abfb")
     .then((res) => res.json())
     .then((json) => {
      setHeadlines(json.articles);
      setLoading(false);

      console.log(headlines)
     })
     .catch((err) => console.log(err));

  }

  useEffect(()=> {
    setLoading(true);
    fetchTopHeadlines();

  }, [])

  return (
    <div className='bg-white p-2 rounded-sm'>
        <div className='flex items-center justify-between tablet:w-[475px] laptop:w-[750px]'>
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
                    <div key={index} className='bg-white shadow-[0_0_6px_0_rgba(121,121,121,0.3)] my-5 p-2 rounded-md hover:shadow-[0_0_10px_0_rgba(121,121,121,0.3)] tablet:w-[475px] laptop:w-[750px] laptop:flex gap-3'>
                        <a target='_blank' href={headline?.url}><img src={headline?.image ? headline?.image : NoImageFound} alt="Bharat News" className='rounded-sm bg-slate-50 items-center border border-solid border-[#a1a0a0] min-w-[100%] max-w-[100%] min-h-[15rem] max-h-[15rem] laptop:min-w-[18rem] laptop:max-w-[18rem] laptop:min-h-[11rem] laptop:max-h-[11rem]'/></a>
                        <div className='flex flex-col gap-[3px]'>
                            <div className='text-[16px] font-semibold text-justify tit-desc leading-tight hover:underline'><a target='_blank' href={headline?.url}>{headline?.title}</a></div>
                            <p className="text-justify content-desc">{headline?.content.split("...")[0]}<a target='_blank' href={headline?.url}>...</a></p>
                            <p className='text-[#757575] text-[13px]'>Source : <a className='underline hover:text-[var(--main-color)]' target='_blank' href={headline?.source?.url}>{headline?.source?.name}</a></p>
                            <p className='text-[#757575] text-[13px]'>Published At : {moment.utc(headline?.publishedAt).format('hh:mm A')} on {moment.utc(headline?.publishedAt).format('dddd, D MMMM, YYYY')}</p>
                        </div>
                        
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopHeadlines