import BlogItem from '../../components/BlogItem';
import styles from '../../styles/Blog.module.css';

export async function getStaticProps(context) {
    const blogsData = await fetch(`http://localhost:3000/api/blogs`);
    const data = await blogsData.json();
    const { blogs } = data;

    return {
        props: { blogs },
    };
}

export default function Blogs(props) {
    const { blogs } = props;

    return (
        <div className="container">
            <div className={styles.blogs__container}>
                {blogs.map((item, index) => {
                    return <BlogItem key={index} blogs={item} />;
                })}
            </div>
        </div>
    );
}
