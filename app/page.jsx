"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass } from "@fortawesome/free-regular-svg-icons"
import Chat from '@/components/Chat'
import Map from '@/components/Map'
import MapOverlay from '@/components/MapOverlay'

export default function Home() {

  return (
    <main>
      <header className='h-[50px] flex justify-center items-center gap-2'>
        <img src='/logo.svg' width={90} height={90} />
      </header>
      <div className='flex h-[calc(100vh-50px)]'>

        <Chat className='w-1/2' />
      </div>
    </main>
  )
}
