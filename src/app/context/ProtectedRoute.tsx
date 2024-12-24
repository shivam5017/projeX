'use client'
import { useRouter } from 'next/navigation';
import { useEffect, ReactNode } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import PulseLoader from '../UI/Loader';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { publicKey } = useWallet();  
  const router = useRouter();

  useEffect(() => {
    if (!publicKey) {
      router.push('/signup');
    }
  }, [publicKey, router]);


  if (!publicKey) {
    return <PulseLoader />;
  }

 
  return <>{children}</>;
};

export default ProtectedRoute;
