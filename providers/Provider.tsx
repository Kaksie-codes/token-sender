'use client';

import React from 'react'
import { WagmiProvider } from 'wagmi';
import {RainbowKitProvider} from '@rainbow-me/rainbowkit';
import config from '@/utils/rainbowKitConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Provider = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Provider