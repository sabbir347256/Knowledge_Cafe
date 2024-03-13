import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog,handleBookmark }) => {
    const { title, cover, author_img, author, posted_date, hashtags, reading_time } = blog;
    return (
        <div className="p-10 mt-10">
            <div className="w-full">
                <img src={cover} style={{borderRadius : 10}} alt="" />
            </div>
            <div className='flex justify-between'>
                <div className='flex items-center mt-3'>
                    <img src={author_img} style={{ width: 50, borderRadius: 50, marginRight: 10,}} alt="" />
                    <div>
                        <h1 className="font-extrabold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center ">
                    <p>{reading_time}</p>
                    <button onClick={() =>handleBookmark(blog)}>
                        <FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h1 className='text-3xl font-extrabold my-10'>{title}</h1>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="" style={{ marginRight: 20 }}>{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark : PropTypes.func
}
export default Blog;