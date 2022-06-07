import React from 'react'
import { fetchAPI } from '../../lib/api';
import Link from 'next/dist/client/link';

export default function Article({article}) 
{
    return (
    <main>
        <h1>{article.attributes.title}</h1>
        <Link href="/"><a>Back home</a></Link>
    </main>
  )
}


export async function getStaticPaths() {
    let articles = await fetchAPI("/articles",{"populate":"*"});
    articles=articles.data;

    const paths = articles.map(article=>{
        return(
            {
                params:{
                    slug:article.attributes.slug,
                    id:article.id,
                }
            }
        )
    })

    return {
        paths,
        fallback: false // false or 'blocking'
      };
}


export async function getStaticProps({params}) 
{
    let article = await fetchAPI(`/articles/`,
    {
        "populate":"*",
        "filters":{
            slug:{
                $eq:params.slug
            }
        }
    });
    article=article.data;
    
    return {
        props:{
            article:article[0],
        }
    }    
}

