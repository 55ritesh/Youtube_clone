import React, { useState,useRef, useEffect } from 'react'

const Demo2 = () => {

   let x = 10;
   const [Y,setY]=useState(0);

   // const ref = useRef(initialvalue);
   const ref = useRef(0);
   console.log(ref);
   // its not like => ref = 0
   // its like it return you a variable but its an  object with current in it: ref = {current:0}
   
  //  let i;
  const i=useRef(null)
   useEffect(()=>{
     i.current=setInterval(()=>{
    // console.log("Namaste React",Math.random())
    },1000)

    return ()=>clearInterval(i.current);
   },[])


  return (
    <div className='m-4 p-2 bg-slate-50 border border-black w-96 h-96'>
      <div>
        <button
        className='bg-green-100 p-2 m-4'
        onClick={()=>{
          x=x+1;
          {console.log(x)}
        }}
        > Increase x
        </button>
        <span className='font-bold text-xl'>Let = {x}</span>
       
      </div>
      <div>
        <button
        className='bg-green-100 p-2 m-4'
        onClick={()=>{
          setY(Y+1);
        }}
        > Increase Y
        </button>
        <span className='font-bold text-xl'>State = {Y}</span>
       
      </div>
      <div>
        <button
        className='bg-green-100 p-2 m-4'
        onClick={()=>{
          ref.current = ref.current + 1;
          console.log("ref=", ref.current);
        }}
        > Increase Ref 
        </button>
        <span className='font-bold text-xl'>Ref = {ref.current}</span>
        {/* useRef is not rerendering but it persisted the last value used */}
        </div>
    
      <button className="bg-red-900 p-4 text-white font-bold rounded-lg"
      onClick={()=>{
        clearInterval(i);
      }}>
        Stop Printing</button>
    </div>
  )
}

export default Demo2

// why do we use useRef hook
// when you want to keep some data in your component and you don't want to rerender
// useRef is a hook that lets you "reference a value that not needed for rendering"

// why do we need state variable when  we have let (because my component re-renders whenever my state variable changes not in case of normal js variable)

// we have increased the value of x but now when we click on state variable it reset my x but i don't want my x to reset this is "useRef".
// I don't wan't that value to reset i want that value to persist b/w
// the render cycle just like my state variable
