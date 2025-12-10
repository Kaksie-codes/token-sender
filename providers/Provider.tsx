'use client';

import React from 'react'
import { WagmiProvider } from 'wagmi';
import {RainbowKitProvider} from '@rainbow-me/rainbowkit';
import config from '@/utils/rainbowKitConfig';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();
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