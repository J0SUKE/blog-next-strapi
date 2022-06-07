import Link from 'next/link';
import Image from 'next/image'
import styles from './Articles.module.scss';

export default function Articles({articles}) {
  return (
    <div>
      <main className={styles.main}>
        {
          articles?.map(({id,attributes:{title,illustration,author,slug}})=>
          {
            
            let imgUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}${illustration.data?.attributes.url}`;
            
            return <>
                      <ArticleView 
                          imgUrl={imgUrl} 
                          slug={slug} 
                          author={author.data.attributes.username}
                          title={title}
                      />
                    </>
          })
        }
      </main>
    
    </div>
  )
}

function ArticleView({imgUrl,slug,title,author}) {
    return(
        <Link href={`/articles/${slug}`}>
            <section className={styles.article}>
                <h1>{title}</h1>
                <h4>par : {author}</h4>
                <div className={styles.illustration}>
                    <Image
                        src={imgUrl}
                        layout='fill'
                        objectFit='cover'
                    />
                </div>
            </section>
        </Link>
        
    )
}