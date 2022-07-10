import React from 'react'

const VideoHolder = ({text}) => {
  return (
    <div className="relative mt-10">
        <h4 className='text-white text-ssm md:text-base absolute left-0  -top-4  md:-top-10'>{text}</h4>
        <div className="">
          <iframe className=' aspect-video p-2 rounded-xl w-full' src="https://www.youtube.com/embed/7RG_XRJ8IJU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
  )
}

export default VideoHolder