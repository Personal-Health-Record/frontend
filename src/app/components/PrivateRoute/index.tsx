'use client';

import React, { useEffect } from 'react';
import { NextComponentType } from 'next';
import { useRouter } from 'next/navigation';

const withAuth = (Component: NextComponentType) => {
  const Auth = () => {
    const router = useRouter();

    useEffect(() => {
      const isLoggedIn = localStorage.getItem('authUserEmail') !== null;

      if (!isLoggedIn) {
        router.push('/auth');
      }
    }, [router]);

    return <Component />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
