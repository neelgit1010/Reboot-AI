import "@/styles/globals.css";
import { ScrollProvider } from "../store/ScrollContext";

export default function App({ Component, pageProps }) {
  return (
    <ScrollProvider>
      <Component {...pageProps} />
    </ScrollProvider>
  );
}
