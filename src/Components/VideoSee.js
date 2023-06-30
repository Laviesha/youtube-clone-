import React,{useEffect,useState} from "react";
const API = "AIzaSyDGXeAcNXiBMAaPTAYuCflEJ-cI10EcneE"
const channelId="UC6K2hOVLC6IQjcNBoS_MszA"

var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}`
export const YTvideos2=()=>{
  const [allvideos, setAllvideos] = useState([])
  useEffect(()=>{
    fetch(fetchurl).then((response)=> response.json()).then((resJson)=>{
      const result = resJson.items.map(doc =>({
        ...doc,
        VideoLink:"https://www.youtube.com/embed/"+doc.id.videoId
      }));
      setAllvideos(result)
    })
  },[])
  console.log(allvideos)
  return(
    <div>
      {allvideos.map((item,_title)=>{
        return(
        <div>
          <iframe width="495" height="295" src={item.VideoLink} title="YouTube video player" frameborder="5" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          

          </div>
        );
      })}

    </div>
  );
};


