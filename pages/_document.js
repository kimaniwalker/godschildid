import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {


    render() {
        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PXL2KDF"
                        height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe></noscript>


                </body>
            </Html>
        )
    }
}

export default MyDocument