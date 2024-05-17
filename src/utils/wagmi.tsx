import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { WagmiProvider as PrimitiveWagmiProvider } from "wagmi";
import { holesky } from "wagmi/chains";

interface WagmiProviderProps {
  children: React.ReactNode;
}

export const config = getDefaultConfig({
  appName: "Otim Bets",
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID,
  chains: [holesky],
});

const WagmiProvider = ({ children }: WagmiProviderProps) => {
  const queryClient = new QueryClient();

  return (
    <PrimitiveWagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </PrimitiveWagmiProvider>
  );
};

export { WagmiProvider };
