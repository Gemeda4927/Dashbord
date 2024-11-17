// pages/index.js
import Head from 'next/head';
import styles from './styles/Home.module.css';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Alerts from './components/alerts';
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div >
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js app with header, footer, and hero section." />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.logo}>MyApp</h1>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>

      <main >
        <section className={styles.hero}>
          <h2>Welcome to MyApp</h2>
          <p>Your journey starts here. Lets explore together!</p>
          <SignedIn>
            <div>
            <Alerts />
            <Badge variant="destructive">Destructive</Badge>
            </div>
          </SignedIn>
        </section>
      </main>
    </div>
  );
}