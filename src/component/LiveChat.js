import React,{useEffect,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
     
  const [liveMessage,setliveMessage] = useState("");
    const dispatch = useDispatch();

    const ChatMessages = useSelector(store=>store.chat.messages);


// poll datta
  useEffect(()=>{
    const i = setInterval(()=>{
   // API Polling
   console.log("API Polling")
   dispatch(addMessage({
    name:generateRandomName(),
    message: makeRandomMessage(20) + "🧑‍🚀"
   }));
  },1500);
 
    return ()=>clearInterval(i);
  },[])


  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      {/* <ChatMessage name="Ritesh Kumar" message="This is Namaste React Live 🙏"/> */}
     <div>
      {ChatMessages.map((c,index)=>
      <ChatMessage key={index} name={c.name} message={c.message}/>)}
      </div>
    </div>
    {/* we have wrappend in form because on submit it is  reload  to prevent to stop we will use preventDefault*/}
    
    <form
     className='w-full p-2 ml-2 border borde-black'
     onSubmit={(e)=>{
      e.preventDefault();
      // console.log("ON form submit",liveMessage);
      //Live Message
      dispatch(
        addMessage({
          name:"Ritesh Kumar",
          message:liveMessage,
        })
      )
      setliveMessage("");
    }}
    >
      <input 
      className="w-96 px-2"
      type="text" 
      value={liveMessage}
      onChange={(e)=>{
        setliveMessage(e.target.value);
      }}/>
      <button className='px-2 mx-2 bg-green-400 rounded-lg'>Send</button>
    </form>
    </>
  )
}

export default LiveChat
