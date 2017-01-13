import React from 'react';
import VideoListItem from './video_list_item.js';

const VideoList = ({videos}) => {
  const videoListItems = videos.map((video) => {
    return <VideoListItem video={video} key={video.etag}/>
  });

  return (
    <ul className="col-md-4 list-group">
      {videoListItems}
    </ul>
  );
};

export default VideoList;