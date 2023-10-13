import Head from "../../node_modules/next/head";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="robots" content="index,follow"></meta>
        <meta name="author" content="Yash" />
      </Head>
      <h1>Next JS App</h1>
    </div>
  );
}
