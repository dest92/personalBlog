import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../utils/posts";
import Link from "next/link";
import Date from "../components/date";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home className="fade-in">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="pb-5">
        <section className={utilStyles.contact}>
          <Link target="_blank" href="https://github.com/dest92">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/matiasacebal/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </section>
      </div>

      <section className={utilStyles.headingMd}>
        <p>
          Hi! My name is <strong>Matías</strong>, and I'm a systems developer
          specializing in backend, frontend, and computer security. I'm capable
          of easily solving problems and am always eager to continue learning. I
          adapt quickly to any team and am competent in following instructions
          precisely. I consider myself proactive, methodical, and organized, and
          I take responsibility for my work and strive to meet any challenge.
        </p>
        <p className="text-center pt-5 pb-10">
          I´m currently working at{" "}
          <Link
            target="_blank"
            href="https://beachampion.gg"
            className="text-orange-400"
          >
            Be a Champion
          </Link>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className="font-bold text-3xl pb-2">Projects</h2>
        <ul className="font-medium text-xl ">
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
