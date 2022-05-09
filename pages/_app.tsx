import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import { ModalProvider } from "../contexts/ModalContext";

function MyApp({ Component, pageProps }: any) {
  return (
    <Provider store={store}>
      {/* <ModalProvider> */}
        <Component {...pageProps} />
      {/* </ModalProvider> */}
    </Provider>
  );
}

export default MyApp;
