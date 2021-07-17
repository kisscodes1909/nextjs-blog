import Layout from '../../components/layout'
import Date from '../../components/date'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'



export async function getStaticPaths() {
    const workData = await fetch('https://jsonplaceholder.typicode.com/posts');

    const dataJson = await workData.json();
    
    const paths = dataJson.map((data) => {
        return {
            params: { id: data.id.toString() }
        }
    });    
      // We'll pre-render only these paths at build time.
      // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export const getStaticProps = async ({params}) => {

    //https://jsonplaceholder.typicode.com/posts/1

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);

    const postData = await res.json();
    
    return {
        props:{
            postData
        }
    }
}

export default function Work({postData}) {
    console.log(postData)
    return (
        <Layout>
        {/* Add this <Head> tag */}
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <h2></h2>
            <div className={utilStyles.lightText}>
                {postData.body}
            </div>
        </article>
        </Layout>
    );
}


