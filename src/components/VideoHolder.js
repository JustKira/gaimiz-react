import React from 'react'

const VideoHolder = ({text}) => {
  return (
    <div className="video-section relative">
        <h4 className='text-white absolute left-0 -top-10'>{text}</h4>
        <div className="iframe-holder">
          <iframe width="1000" height="500" src="https://www.youtube.com/embed/7RG_XRJ8IJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default VideoHolder