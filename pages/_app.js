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
      <!-- Yandex.Metrika counter -->
      <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(91852661, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
        });
      </script>
      <noscript><div><img src="https://mc.yandex.ru/watch/91852661" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
      <!-- /Yandex.Metrika counter -->
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
