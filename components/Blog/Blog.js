import styles from './Blog.module.scss';
import Link from 'next/link';
import {getStrapiMedia} from '../../lib/media';
import Moment from 'react-moment';
import rehypeRaw from "rehype-raw";
import ReactMarkdown from 'react-markdown';
import BlogLayout from '../BlogLayout/BlogLayout';

export default function Blog({articles}) {
  
  return (
    <BlogLayout>
      <section className={styles.content}>
          <h2>The blog feed</h2>
          <section className={styles.feed}>
            <GalleryColumn articles={articles.filter((element,index)=>(index)%3==0)}/> 
            <GalleryColumn articles={articles.filter((element,index)=>(index)%3==1)}/> 
            <GalleryColumn articles={articles.filter((element,index)=>(index)%3==2)}/> 
            
          </section>
      </section>
    </BlogLayout>
  )
}


function GalleryColumn({articles}) {
  return(
    <ul>
      {
        articles.map((item)=>{
          const{attributes} = item;
          
          return(
            <Link href={`/blog/${attributes.slug}`} key={item.id}>
              <a>
                <li>
                  <img src={getStrapiMedia(attributes.image)} alt="" />
                  <div>
                    <span>
                    <Moment format="DD MMM YYYY">
                        {attributes.createdAt}
                    </Moment>
                    </span>
                    <h2>{attributes.title}</h2>
                    <p>
                      <ReactMarkdown skipHtml={false} rehypePlugins={[rehypeRaw]} >
                        {`${attributes.content.substring(0, 200)}...`}
                      </ReactMarkdown>                      
                    </p>
                  </div>
                </li>
              </a>
            </Link>
          )
        })
      }
    </ul>
  )
}