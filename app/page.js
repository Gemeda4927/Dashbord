// pages/index.js
import Head from 'next/head';
import styles from './styles/Home.module.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js app with header, footer, and hero section." />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>MyApp</h1>

      <SignedOut>
        <SignInButton/>
      </SignedOut>
      <SignedIn>
          <UserButton />
      </SignedIn>
      <SignedIn>
        
      </SignedIn>

      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h2>Welcome to MyApp</h2>
          <p>Your journey starts here. Let’s explore together!</p>
        </section>
      </main>

    
    </div>
  );
}