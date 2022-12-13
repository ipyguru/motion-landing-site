import Head from 'next/head';
import { contacts } from "../constants";

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{contacts.companyName}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;