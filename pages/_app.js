// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/scss/variables.scss';
import Head from "next/head";
import { UserWrapper } from '../lib/context/userstate';
// own css files here

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Mulish:wght@200;400;500;800&display=swap" rel="stylesheet" />


      </Head>
      <UserWrapper>
        <Component {...pageProps} />
      </UserWrapper>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

    </>
  )
}
