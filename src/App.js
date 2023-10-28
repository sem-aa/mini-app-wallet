import { SDKProvider } from "@tma.js/sdk-react";
import { MainComponent } from "./components/MainComponent";
import { Loader } from "./components/Loader";

function App() {
  // const backButton = useBackButton();
  // const webApp = useWebApp();

  // // When App is attached to DOM, lets show back button and
  // // add "click" event handler, which should close current application.
  // useEffect(() => {
  //   const listener = () => webApp.close();
  //   backButton.on('click', listener);
  //   backButton.show();

  //   return () => {
  //     backButton.off('click', listener);
  //     backButton.hide();
  //   };
  //   // We know, that backButton and webApp will never change,
  //   // but let's follow React rules.
  // }, [backButton, webApp]);

  return (
    <SDKProvider>
      <Loader>
        <MainComponent />
      </Loader>
    </SDKProvider>
  );
}

export default App;
