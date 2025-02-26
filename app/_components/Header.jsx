"use client"

import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image src={'./logo.svg'}
        alt='logo'
        width={160}
        height={100}
      />
      {isSignedIn ? <UserButton /> :
        <Button>Get Started</Button>
      }
    </div>
  )
}

export default Header