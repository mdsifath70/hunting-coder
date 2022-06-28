import styles from '../../styles/Blog.module.css';

export async function getServerSideProps(context) {
    const { slug } = context.query;
    const data = await fetch(`http://localhost:3000/api/blog?slug=${slug}`);
    const blog = await data.json();

    return {
        props: { blog },
    };
}

export default function Blog(props) {
    const { blog } = props;

    return (
        <div className="container">
            {
                <div className={styles.blog__details}>
                    <h3 className="title">{blog.title}</h3>
                    <p className="description">{blog.content}</p>
                    <p style={{ fontSize: '.85rem' }}>Author: {blog.author}</p>
                </div>
            }
        </div>
    );
}
