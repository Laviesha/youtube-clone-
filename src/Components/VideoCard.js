import React,{useEffect,useState} from "react";
const API = "AIzaSyDeBtCZFNGkuQGFSNlvF3A1e3KcexlJvQo"
const channelId="UCVagmVWoWQxcGG3W30OfuoA"

var fetchurl=`https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}`
export const YTvideos=()=>{
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
      {allvideos.map((item)=>{
        return(
        <div>
          <iframe width="495" height="295" src={item.VideoLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        );
      })}

    </div>
  );
};


 
