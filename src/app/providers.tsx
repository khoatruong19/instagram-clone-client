'use client';

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { PopupProvider } from '@/context/popup-context';

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <PopupProvider>{children}</PopupProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
