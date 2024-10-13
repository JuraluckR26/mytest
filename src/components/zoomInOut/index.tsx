'use client';

import Image from 'next/image';
import { useRef, useState } from 'react'

type Props = {
  imageUrl: string
}

const Index = (props: Props) => {
  const [scale] = useState(1)
  const [position] = useState({ x: 0, y: 0 })

  const imageRef = useRef<HTMLImageElement>(null)

  return (
   <div>
      <div>
        <button onClick={()=>{} }><span>+</span></button>
        <button onClick={()=>{} }><span>-</span></button>

        <Image
          ref={imageRef}
          src={props.imageUrl}
         alt="Zoomable image"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: `${position.x}px ${position.y}px`,
          }}
        />
      </div>
   </div>
  )
}

export default Index