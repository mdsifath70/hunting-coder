import Link from 'next/link';
import styles from '../styles/Blog.module.css';

export default function blogItem({ blogs }) {
    return (
        <div className={styles.blog}>
            <h3>
                <Link href={`/blog/${blogs.slug}`}>{blogs.title}</Link>
            </h3>
            <p>{blogs.content.substr(0, 150)} ...</p>
            <p style={{ fontSize: '.85rem' }}>Author: {blogs.author}</p>
        </div>
    );
}
