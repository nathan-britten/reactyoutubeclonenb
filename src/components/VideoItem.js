import './VideoItem.css';
import React from 'react';



  const VideoItem = ({video, onVideoSelect}) => {
    return(
      <div className=" video-item item" style={{width: "100%"}}  onClick={() => onVideoSelect(video)}>
        <div className="image">
          <img src={video.snippet.thumbnails.default.url} alt=""/>
        </div>
        <div className="content">
          <a className="header" href="#">{video.snippet.title}</a>
          {/* <div className="description">{snippet.description}</div> */}
        </div>
    </div>
    )
  }
  

export default VideoItem;