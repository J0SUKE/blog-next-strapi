import Head from 'next/head'
import Home from '../components/Home/Home'
import {fetchAPI} from '../lib/api'; 

export default function App({about}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Home about={about}/>        
    </>
  )
}


export async function getStaticProps() {
  let about = await fetchAPI('/about',{
    populate:'*'
  });

  about = about.data;

  return{
    props:{about}
  }
}