import SectionTitle from "./ui/SectionTitle";
import { data } from "../data/blogsdata";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section id='blog' className='wrapper sp'>
      <SectionTitle subHeading='Timeworthy Articles' heading='Blogs' />
      <div className='grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3'>
        {data.map((blog: any, index: number) => (
          <BlogCard
            key={blog.id}
            index={index}
            image={blog.image}
            title={blog.title}
            author={blog.author}
            authorUrl={blog.authorUrl}
            publishedDate={blog.publishedDate}
            body={blog.body}
            blogUrl={blog.blogUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Blog;
