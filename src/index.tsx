import { BetProvider } from "@utils/bet.tsx";
import { WagmiProvider } from "@utils/wagmi.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/app.tsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider>
      <BetProvider>
        <App />
      </BetProvider>
    </WagmiProvider>
  </React.StrictMode>,
);
