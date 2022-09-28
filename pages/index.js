import Head from 'next/head'
import CommerceLayout from '@components/common/CommerceLayout'

export default function Home() {
  return (
    <CommerceLayout>
      <Head>
        <title>Parabole</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section class="flex min-h-screen flex-col text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <h1>PARABOLE</h1>
        </div>
      </section>
    </CommerceLayout>
  )
}
