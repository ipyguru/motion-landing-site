import Head from "next/head";
import { contacts } from "../constants";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{contacts.companyName}</title>
      <meta name="description" content={contacts.companyName} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="language" content="ru" />
      <meta
        name="author"
        content={`${contacts.developer.name}, ${contacts.developer.link}`}
      />
      <meta name="keywords" content={contacts.companyName} />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
