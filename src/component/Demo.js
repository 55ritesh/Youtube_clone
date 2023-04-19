import React, { useState, useMemo } from 'react'
import { findPrime } from '../utils/helper';

const Demo = () => {

    const [text,setText]=useState(0);
    const [isDarkTheme,setIsDarkTheme]=useState(false);
    const [cnt,setCnt]=useState(1);

    // console.log("Rendering...");


    // my findprime is heavy function and it is called again and again 
    // when i click it take some time to update i only want to change my theme why is my isfind prime called again and again
    // between haevy operation it is freezing my page and i am not able to do any operation (such type of issue can be handled using use memoization)

    // syntax
    // const cacheValue = useMemo(calculateValue , dependencies)
     
    // const prime=()=>{
    //     console.log("calculate prime number of", text);
    //     return findPrime(text);
    // }

    // not memoized
    // const prime = findPrime(text);
   
    const prime = useMemo(()=>findPrime(text),[text]);


    // useMemo is a React hook that lets you cache the result of a calculation b/w re-renders

    // if we use heavy operation here everytime my state changes it rerenders we can memoise this heavy operation for this we use
    // usememo hook
  
    const solve=()=>{
        
        setCnt(cnt+1);
        console.log({cnt});
        // setCnt(cnt+1);
        }
  return (
    <div 
        
    className={
        "m-4 p-2 w-96 h-96 border border-black "+
        (isDarkTheme && "bg-red-900 text-white")
        }

    >
        console.log("cntgtgbt")
        {cnt}
        <div>
            <button 
            onClick={solve}>Click</button>
        </div>
        <div>
            <button 
            className="m-10 p-2 bg-green-800" 
            onClick={()=>setIsDarkTheme(!isDarkTheme)}>click</button>
        </div>
        <div>
        <input 
        className='border border-black w-72 px-2'
        type="number"
        value={text}
        onChange={(e)=>setText(e.target.value)} />
        </div>
        <div>
            <h1 className='mt-4 font-bold text-xl'>nth prime : {prime}</h1>
        </div>
      
    </div>

  );
};

export default Demo

// useCallback is react hook that cache a function definition b/w re-renders
// const cacheValue = useMemo(calculateValue , dependencies)



