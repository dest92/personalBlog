import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const name = "Matías Acebal";
export const siteTitle = "Matías Acebal - Portfolio";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Asegúrate de incluir los estilos de DaisyUI aquí */}
      </Head>

      {/* Header usando DaisyUI */}

      <div className={styles.container}>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={name}
              />
              <h1 className="text-3xl font-bold pt-2 pb-5">{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className="text-3xl font-semibold pt-2 pb-5 text-white">
                    {name}
                  </a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className="pt-5">
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
