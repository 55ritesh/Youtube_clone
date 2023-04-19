import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/contants';
import { cacheResults } from '../utils/searchSlice';


const filterData =()=>{
        return 
}


const Head = () => {
  const[searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setshowSuggestions]=useState(false);
  const [searchText,setSearchText]=useState("");

  const searchCache =useSelector((store)=>store.search);
  const dispatch=useDispatch();

  /**
   * searchCache={
   *    "iphone":["iphone 11","iphone 14"]
   * }
   * searchQuery = iphone
   * 
   */

  // console.log(searchQuery);

  useEffect(()=>{
    //API call
   // console.log(searchQuery);

    // make an api call after every key press
    // getSearchSugestions();

    // but if the difference b/w 2 api calls is <200ms
    // decline the API call
    const timer = setTimeout(()=>{
      // search result is fornd then return search query
    if(searchCache[searchQuery]){
      setSuggestions(searchCache[searchQuery]);
    }else{
      // if not present make an api call and update in my cache
      getSearchSugestions();
    }
  },200);

    // this is called when component is unmounting/refreshing
    // this function is called everytime my component is rerendered
    return ()=>{
      clearTimeout(timer);
    };

  },[searchQuery]);

  

  /**
   * key - i
   * - render the component
   * - useEffect();
   * - start timer => make api call after 200ms
   * 
   * key - ip
   * - re-render the component
   * - useEffect()
   * - start timer => make api call after 200ms
   * 
   */

  const getSearchSugestions=async()=>{
    console.log("API CALL-"+ searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    
    // update cache
    dispatch(
      cacheResults({
      [searchQuery]: json[1],
    })
    );
  }

   

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu());
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1'>
        <img 
        onClick={()=>toggleMenuHandler()}
        className='h-8 cursor-pointer'
        alt="menu" src="https://static.vecteezy.com/system/resources/previews/002/292/406/original/hamburger-menu-line-icon-free-vector.jpg"  />
        
        <a href="/">
        <img 
        className='h-8 mx-2'
        src="https://www.youtube.com/img/desktop/supported_browsers/yt_logo_rgb_light.png"
         alt="youtube-logo" 
         />
         </a>
      </div>

      <div className='col-span-10 px-10'>
        <div>
        <input className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" value={searchQuery} 
        onChange={(e)=>setSearchQuery(e.target.value)}
        onFocus={()=>setshowSuggestions(true)}
        onBlur={()=>setshowSuggestions(false)}
        />

        <button onClick={()=>{
          filterData(searchText,)
        }}
        className='border border-gray-400  rounded-r-full px-5 py-2 bg-gray-500'>
          🔍
          </button>
        </div>
        {showSuggestions && (
        <div className='absolute bg-white py-2 px-5 w-[30rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>

            {suggestions.map(s=><li key={s} className='py-2 px-2 shadow-sm hover:bg-gray-100'>🔍 {s}</li>)}
            

            {/* <li className='py-2 shadow-sm  hover:bg-gray-100'>🔍 Iphone1</li>
            <li className='py-2 shadow-sm  hover:bg-gray-100'>🔍 Iphone1</li>
            <li className='py-2 shadow-sm  hover:bg-gray-100'>🔍 Iphone1</li>
            <li className='py-2 shadow-sm  hover:bg-gray-100'>🔍 Iphone1</li>
            <li className='py-2 shadow-sm  hover:bg-gray-100'>🔍 Iphone1</li> */}
            
          </ul>
        </div>
        )}
      </div>

      <div className='col-span-1'>
        <img className='h-8 cursor-pointer' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
      </div>
    </div>
  )
}

export default Head
