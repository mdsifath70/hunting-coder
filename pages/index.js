import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Blogs from './blog';

export async function getStaticProps(context) {
    const blogsData = await fetch(`http://localhost:3000/api/blogs`);
    const data = await blogsData.json();
    const { blogs } = data;

    return {
        props: { blogs },
    };
}

export default function Home(props) {
    const { blogs } = props;

    return (
        <>
            <Head>
                <title>Hunting Coder App</title>
                <meta name="description" content="Hunting coder app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="container">
                <main className={styles.main}>
                    <h1 className={styles.title}>Hunting coder</h1>

                    <div className={styles.homeImage}>
                        <Image
                            src="/home-img.jpg"
                            alt="Home img"
                            width={150}
                            height={150}
                            placeholder="blur"
                            blurDataURL="/home-img.jpg"
                        />
                    </div>

                    <p className={styles.description}>
                        A blog for hunting coders by hunting coder
                    </p>
                </main>
            </div>
            <div className="blogs__container">
                <h2 style={{ textAlign: 'center' }}>Popular blogs</h2>
                <Blogs blogs={blogs} />
            </div>
        </>
    );
}
