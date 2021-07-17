import Link from "next/link";

export const getServerSideProps = async (context) => {
    const workData = await fetch('https://jsonplaceholder.typicode.com/posts');

    const dataJson = await workData.json();

    return {
        props:{
            data: dataJson
        }
    }
}

export default function Liting({data}) {
    console.log(data);
    return (
        <ul>
            {
                data.map((post) => {
                    return (
                        <li><Link href={`works/${post.id}`}><a>{post.title}</a></Link></li>
                    )
                })
            }
        </ul>
    )
}