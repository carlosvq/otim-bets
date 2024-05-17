import { Button, ButtonIntent } from "@atoms/button";
import { AuthenticationStatus } from "@common/types/account";
import { ConnectButton as PrimitiveConnectButton } from "@rainbow-me/rainbowkit";
import { cn } from "@utils/cn";
import { isReady } from "@utils/misc";
import { LogOut } from "lucide-react";

interface ConnectButtonProps {
  onDisconnect?: () => void;
}

const ConnectButton = ({ onDisconnect }: ConnectButtonProps) => {
  return (
    <PrimitiveConnectButton.Custom>
      {({
        account,
        mounted,
        chain,
        openChainModal,
        openConnectModal,
        authenticationStatus,
      }) => {
        const ready = isReady(mounted, authenticationStatus);
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === AuthenticationStatus.Authenticated);

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button type="button" onClick={openConnectModal}>
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <div className={cn(["flex items-center gap-2"])}>
                    <div className={cn(["text-sm"])}>Unsupported Network</div>
                    <Button size="sm" type="button" onClick={openChainModal}>
                      Switch Network
                    </Button>
                  </div>
                );
              }

              return (
                <div className={cn(["flex justify-between gap-4"])}>
                  <div className={cn(["flex gap-2"])}>
                    {chain.hasIcon && (
                      <div
                        className={cn([
                          "flex items-center text-sm font-medium",
                        ])}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "chain icon"}
                            className={cn(["w-6 h-6 rounded-full mr-2"])}
                            src={chain.iconUrl}
                          />
                        )}
                        {chain.name}
                      </div>
                    )}

                    <div
                      className={cn(["flex items-center text-sm font-medium"])}
                    >
                      ({account.displayName})
                    </div>
                  </div>

                  <Button
                    intent={ButtonIntent.Secondary}
                    size="sm"
                    type="button"
                    onClick={onDisconnect}
                  >
                    <LogOut
                      className={cn(["text-primary-foreground mr-2"])}
                      size={16}
                    />
                    Disconnect
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </PrimitiveConnectButton.Custom>
  );
};

export { ConnectButton };
