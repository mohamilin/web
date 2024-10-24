import Image from 'next/image'
import React from 'react'

export default function index() {
  return (
    <div>
        <Image src='/globe.svg' width={100} height={100} />
    </div>
  )
}
