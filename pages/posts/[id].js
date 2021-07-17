import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'


export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false
    }
}


export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    console.log(postData);

    return {
        props: {
            postData,
            extraData: {
                'name': 'Huu Nguyen2335'
            }
        }
    }
}

export default function Post({ postData, extraData }) {
    return (
        <Layout>
        {/* Add this <Head> tag */}
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <h2> {extraData.name} </h2>
            <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    )
  }