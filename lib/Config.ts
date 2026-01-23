import { createConfig, http } from 'wagmi'
import { base, mainnet } from 'wagmi/chains'
import { injected, metaMask, coinbaseWallet, walletConnect } from 'wagmi/connectors'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || ''

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [
    injected({ target: 'metaMask' }),
    metaMask(),
    walletConnect({ projectId }),
    coinbaseWallet(),
  ],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
})
