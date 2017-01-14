import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = (props) => {
  const videoListItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video} 
        key={video.etag}/>
      );
  });

  return (
    <ul className="col-md-4 list-group">
      {videoListItems}
    </ul>
  );
};

export default VideoList;