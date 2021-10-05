import { useRouter } from 'next/dist/client/router';
import { data } from '../data';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home(props) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>{props.data.title}</h1>

        <h2 className={styles.description}>{props.data.main}</h2>
        {console.log({ data })}
      </main>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      data,
    },
  };
}
