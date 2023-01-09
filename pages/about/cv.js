import Head from 'next/head'
import Cv from '../../components/about/Cv'




export default function CvPage() {
  return (
    <>
      <Head>
        <title>BEN</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Cv />
    </>
  )
}