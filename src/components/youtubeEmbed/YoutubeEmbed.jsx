import React from 'react'
import './youtubeEmbed.scss'

export default function YoutubeEmbed({embedId}) {
  return (
    <div className="container-responsive">
    <iframe className='iframe-responsive'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  )
}
