import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../utils/posts";
import Head from "next/head";
import Date from "../../components/date";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="text-3xl font-bold pb-2">{postData.title}</h1>
        <div className="font-light text-gray-400 pb-5">
          <Date dateString={postData.date} />
        </div>
        <ReactMarkdown
          children={postData.contentMarkdown}
          remarkPlugins={[gfm]}
        />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
