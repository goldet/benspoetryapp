import Layout from "../layouts/layout";
import "../styles/global.css";
import { useMedia } from 'react-use';

export default function App({ Component, pageProps }) {
  const isWide = useMedia('(min-width: 480px)', false);

  return (
    <Layout isWide={isWide}>
      <Component {...pageProps} isWide={isWide}/>
    </Layout>
  );
}
