import Document, {DocumentContext, Head, Html, Main, NextScript} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html lang="en" className="[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]">
        <Head>
          <meta name="description" content="王志威用于pre、paper、labs的网站"/>
          <link rel="icon" href={"/favicon.svg"}/>
        </Head>
        <body
          className={"antialiased text-gray-500 dark:text-gray-400"}
        >
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument