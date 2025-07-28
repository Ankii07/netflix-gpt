import React from 'react'
import { netflix_bg } from '../utils/constant'
import language from '../utils/languageConstants'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  console.log(language);
  const { lang } = useSelector((store) => store.config);
  // console.log(lang);
  return (
    <div className='absolute top-[20%] right-[30%] min-w-[600px] '>
      
      <form className=' bg-black flex justify-between items-center p-4 rounded-lg shadow-lg shadow-blue-500/50'>
        <input type="text" className='p-4 m-4 rounded-lg w-[60%]'  placeholder={language[lang].gptSearch} />
        <button className='bg-red-600 font-serif min-w-[30%] h-14 mt-2  text-white px-4 py-2 rounded-md'>{language[lang].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
