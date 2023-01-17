import styles from "../styles/Home.module.css";
import {apiBaseUrl} from "../config";

export default function Home({ data, url }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p>
          Message from Server @ <code>{url}</code>
        </p>
        <h1 className={styles.title}>{data.message}</h1>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.info(`API_BASE_URL == ${apiBaseUrl}`);
  const url = `${apiBaseUrl}/`
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: { 
      data,
      url,
     }
  };
}
