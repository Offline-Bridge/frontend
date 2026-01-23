"use client";

import { useConnect, useConnectors } from "wagmi";

export function useWalletConnections() {
  const { connect } = useConnect();
  const connectors = useConnectors();

  const getConnector = (id: string) => {
    const connector = connectors.find(c => c.id === id);

    if (!connector) {
      console.warn(`${id} wallet not available`);
      return null;
    }

    return connector;
  };

  return {
    connectMetaMask: () => {
      const connector = getConnector("injected");
      if (!connector) {
        console.error("MetaMask connector not found. Make sure it's installed or the wagmi config includes it.");
        return;
      }
      connect({ connector });
    },

    connectWalletConnect: () => {
      const connector = getConnector("walletConnect");
      if (!connector) {
        console.error("WalletConnect connector not found. Make sure the wagmi config includes it.");
        return;
      }
      connect({ connector });
    },

    connectCoinbase: () => {
      const connector = getConnector("coinbaseWallet");
      if (!connector) {
        console.error("Coinbase Wallet connector not found. Make sure the wagmi config includes it.");
        return;
      }
      connect({ connector });
    },
  };
}
