import Link from 'next/link';
import { fetchAPI } from '../../lib/api';
import Articles from '../../components/Articles/Articles';


export default function ArticlesPage({articles}) 
{
  return <>
    <Articles articles={articles}></Articles>
  </>
}

export async function getStaticProps() {
  let articles = await fetchAPI("/articles",{"populate":"*"});
  articles=articles.data;

  return{
    props:{
      articles,
    }
  }
}