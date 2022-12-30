import Head from 'next/head';
import Link from 'next/link';

import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <div className={styles.body}>
      <Head>
        <title>Tailwind Dark Mode Test</title>
        <meta name="description" content="Tailwind Dark Mode Test" />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header className={styles.header}><Link className={styles.link} href="#">Tailwind Dark Mode Test</Link></header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <Link href="https://www.rubiopi.com" className={styles.footerLink}>
          <span>Powered by RubioPi</span>
        </Link>
      </footer>
    </div>
  );
};

export default Layout;
