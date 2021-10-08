import Head from 'next/head'
import Footer from './footer'
import Header from './header'

const Layoutfull = (props) => (
  <>
    <Head>
      <title>Gods Child Id</title>
    </Head>

    <Header />

    <main>
      <div className="container-fluid p-0 m-0">{props.children}</div>
    </main>


    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      
    `}</style>
  </>
)

export default Layoutfull
