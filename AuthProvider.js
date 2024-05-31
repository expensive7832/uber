
import { useAuth } from '@clerk/clerk-expo';
import { useEffect } from 'react';

const AuthProvider = ({children}) => {



  

  return (
    <ClerkProvider
   
    >
      {children}
    </ClerkProvider>
  )
}

export default AuthProvider