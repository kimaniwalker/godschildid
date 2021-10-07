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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </>
  )
}