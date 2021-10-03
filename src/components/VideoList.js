import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {          //this on video select is the state of App which is passed on Videolist and further inside VideoList to the ideoItem for updating it
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });

    return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;