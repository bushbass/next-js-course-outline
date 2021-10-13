import Link from 'next/link';
import styles from './Header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>this is the header area</h1>
      <nav>
        <ul>
          <Link href="/">
            <li>
              <a> home</a>
            </li>
          </Link>
          <Link href="/course">
            <li>
              <a> my course outline</a>
            </li>
          </Link>
          <Link href="/path">
            <li>
              <a> dynamic path page</a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
