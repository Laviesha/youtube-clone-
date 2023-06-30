import React,{useEffect,useState} from "react";
const API = "AIzaSyCB1904GFi8si_zv8vxI7WK9CdJHKc7Vmg"
const channelId="UCNb9vykjjBoUh2EXfBQYR6g"

var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}`
export const YTvideos1=()=>{
  const [allvideos, setAllvideos] = useState([])
  useEffect(()=>{
    fetch(fetchurl).then((response)=> response.json()).then((resJson)=>{
      const result = resJson.items.map(doc =>({
        ...doc,
        VideoLink:"https://www.youtube.com/embed/"+doc.id.videoId ,

      }));
      setAllvideos(result)
    })
  },[])
  console.log(allvideos)
  return(
    <div>
      {allvideos.map((item)=>{
        return(
        <div >
         
          <iframe width="495" height="295" src={item.VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
    
          </div>
        );
      })}

    </div>
  );
};



