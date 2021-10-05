import Link from 'next/link';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>this is the header area</h1>
      <nav>
        <ul>
          <Link href="/">
            <li>home</li>
          </Link>
          <Link href="/course">
            <li>my course outline</li>
          </Link>
          <Link href="/path">
            <li>dynamic path page</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
