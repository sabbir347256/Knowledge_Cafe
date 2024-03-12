import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,cover,author_img,author,posted_date,hashtags} = blog;
    return (
        <div className="p-10 mt-10">
            <div className="w-full">
            <img src={cover} alt="" />
            </div>
            <div className='flex items-center mt-3'>
                <img src={author_img} style={{width:50, borderRadius:50,marginRight : 10}} alt="" />
                <div>
                    <h1 className="font-extrabold">{author}</h1>
                    <p>{posted_date}</p>
                </div>
            </div>
            <h1 className='text-3xl font-extrabold my-10'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx)=><span key={idx}><a href="" style={{marginRight : 20}}>{hash}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog : PropTypes.object.isRequired
}
export default Blog;