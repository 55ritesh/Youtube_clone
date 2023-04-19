import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/contants'
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';


const VideoContainer = () => {

    // state video to loop on this video data
    const [videos,setVideos]=useState([]);

    useEffect(()=>{
       getVideos();
    },[]);

    const getVideos = async ()=>{
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        // console.log(json.items);
        setVideos(json.items);
    }
    return videos?.length > 0?(
  <>
    <div className='flex flex-wrap'>
         {/* video container should contain lot of video cards */}
         {/* first try for one container then wrap it inside map */}
            {/* <VideoCard info={videos[0]}/> */}
      {/* Videocontainer */}

      {videos[0] && <AdVideoCard info={videos[0]}/>}

      {videos.map((video)=>(
      <Link key={video.id} to={"/watch?v=" + video.id}>
       <VideoCard  info={video} />
       </Link>
       ))}
    </div>
    </>
  ):<Shimmer/>
}

export default VideoContainer;
