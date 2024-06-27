import React from 'react'
import { Button } from '../ui/button'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Header = () => {
    const { user, isSignedIn } = useUser()
    return (
        <div className='p-3 px-5 flex justify-between shadow-md'>
            <div className='flex items-end justify-center'>
                <Link to="/">
                    <img src='/mainlogo.svg' className='mr-4' height={30} width={30} />
                </Link>
            </div>
            {isSignedIn ?
                <div className='flex gap-2 items-center'>
                    <Link to="/dashboard">
                        <Button variant="outline"> Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to="/auth/sign-in">
                    <Button>Get Started</Button>
                </Link>
            }
        </div>
    )
}

export default Header