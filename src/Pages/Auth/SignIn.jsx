import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex justify-center item-center my-15'>
      <SignIn />
    </div>
  )
}

export default SignInPage