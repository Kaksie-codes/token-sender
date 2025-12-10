import {
  getDefaultConfig
} from '@rainbow-me/rainbowkit';

import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  anvil,
  zksync
} from 'wagmi/chains';

const config = getDefaultConfig({
  appName: 'TokenSender',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  chains: [mainnet, polygon, optimism, arbitrum, base, anvil, zksync],
  ssr: false, // If your dApp uses server side rendering (SSR)
});

export default config;


