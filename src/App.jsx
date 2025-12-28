import { useState } from 'react'
import { SignedIn, SignedOut, SignIn, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <header>
       <SignedOut>
          <SignIn></SignIn>
       </SignedOut>
       <SignedIn>
          <UserButton></UserButton>
       </SignedIn>
    </header>
  )
}

export default App
