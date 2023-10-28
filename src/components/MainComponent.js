import { useSDK } from "@tma.js/sdk-react";

export function MainComponent() {
  const sdk = useSDK();
  console.log(sdk);

  return <p>Hello wallet</p>;
}
