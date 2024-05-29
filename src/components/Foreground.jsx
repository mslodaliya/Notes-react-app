import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data = [
      {
        desc: "Java Script Notes by tapnvi",
        filesize: ".10mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download now", tagColor: "green"},
      },
      {
        desc: "React js notes",
        filesize: ".15mb",
        close: true,
        tag: { isOpen: true, tagTitle: "in progress", tagColor: "blue"},
      },
      {
        desc: "Hand written notes for html css and javascript",
        filesize: ".20mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
      },
    ];

  return (

        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-warp p-5'>
            {data.map((item, index)=>(
                <Card data={item} reference={ref}/>
            ))}
        </div>
  )
}

export default Foreground