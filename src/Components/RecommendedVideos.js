import React from 'react'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import './Recommend.css'
import { YTvideos } from './VideoCard';
import { YTvideos1 } from './VideoRender';
import { YTvideos2 } from './VideoSee';






function RecommendedVideos(selected) {
  return (
    <div>
    <div className={`s ${selected && 'selected'}`}>     
    <span className='span' selected >All</span>
  <span className='span1'>Mixes</span> 
  <span className='span1'>Gaming</span>
  <span className='span1'>Live</span>
  <span className='span1'>Cricket</span>
  <span className='span1'>Food</span>
  <span className='span1'>Sports</span>
  <span className='span1'>Indian Music</span>
  <span className='span1'>Pop Music</span>
  <span className='span1'>Science</span>
  <span className='span1'>Comedy</span>
  <span className='span1'>Vlogs</span>
  <span ><ArrowForwardIosSharpIcon className='f'/></span>
  




    <div className='Subscription'>
        

 
  <div className='recommendedVideos__videos'>
    <YTvideos/>
    </div>

    <div children='recommendedVideos__videos1'>
    <YTvideos1/>
    </div>







    <div children='recommendedVideos__videos2'>
    <YTvideos2/>
  </div>





  </div>
  
  </div>
  
</div>
  )
}



export default RecommendedVideos

