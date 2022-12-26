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
      <script
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(91852661, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true
                });
              `,
        }}
      />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
