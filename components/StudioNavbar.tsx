import Link from 'next/link'
import React from 'react'
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
            <Link className='text-[#F7AB0A] flex items-center' href="/">
                <ArrowUturnLeftIcon className='h-6 w-6 text-[#F7AB0A]'/>
                Go to Website</Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar