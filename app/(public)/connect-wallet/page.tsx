import type { Metadata } from "next";
import ConnectWalletPage from "@/app/Components/connect-wallet-page/ConnectWalletPage";

export const metadata: Metadata = {
  title: "Connect Wallet | Offline Bridge",
  description: "Securely connect your wallet to access Offline Bridge services.",
  keywords: ["Connect Wallet", "Web3", "Crypto Wallet", "Offline Bridge"],
};

export default function Page() {
  return <ConnectWalletPage />;
}
