// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/scss/variables.scss';
import Head from "next/head";
import { UserWrapper } from '../lib/context/userstate';
import * as ga from '../lib/googleAnalytics'
import { useRouter } from 'next/router';
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// own css files here

export default function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Mulish:wght@200;400;500;800&display=swap" rel="stylesheet" />

        {/* <!-- Facebook Pixel Code --> */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '308838784456345');
          fbq('track', 'PageView');
          `,
          }}
        />

        <noscript><img height="1" width="1" style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=308838784456345&ev=PageView&noscript=1"
        /></noscript>

        <meta name="facebook-domain-verification" content="u5vy1hkmzr8jsgf8w2e7lk5lfqpbsm" />

        {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5X25C7LM8R"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-5X25C7LM8R');
          `,
        }} >

        </script>

        {/* <!-- Google Tag Manager --> */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PXL2KDF');`,
        }} >

        </script>

      </Head>
      <UserWrapper>
        <Component {...pageProps} />
        <ToastContainer />
      </UserWrapper>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>



      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXL2KDF"
        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>



    </>
  )
}
