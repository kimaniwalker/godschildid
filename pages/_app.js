// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/scss/variables.scss';
import Head from "next/head";
// own css files here

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Component {...pageProps} />
    </>
  )
}