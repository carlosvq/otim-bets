export const AuthenticationStatus = {
  Authenticated: "authenticated",
  Unauthenticated: "unauthenticated",
  Loading: "loading",
} as const;
export type AuthenticationStatus =
  (typeof AuthenticationStatus)[keyof typeof AuthenticationStatus];
