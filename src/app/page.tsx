import Head from "../../node_modules/next/head";
import IFrameLoader from "./components/IFrameLoader/Index";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <IFrameLoader />
    </div>
  );
}
