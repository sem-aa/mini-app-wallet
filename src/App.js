import { SDKProvider } from "@tma.js/sdk-react";

import { MainComponent } from "./components/MainComponent";
import { Loader } from "./components/Loader";

function App() {
  return (
    <SDKProvider>
      <Loader>
        <MainComponent />
      </Loader>
    </SDKProvider>
  );
}

export default App;
