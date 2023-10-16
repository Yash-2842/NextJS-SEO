import Head from "../../node_modules/next/head";
import IFrameLoader from "./components/IFrameLoader/Index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="google-site-verification"
          content="vV70oydhHyHlTJtFSqdZiX6it9v1Nv_iaySUAbv0z6w"
        />
      </Head>
      <IFrameLoader />
    </div>
  );
}
