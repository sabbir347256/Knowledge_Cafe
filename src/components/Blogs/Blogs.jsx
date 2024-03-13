import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({handleBookmark}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() =>{
        fetch('cafe.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h3 className="text-3xl"></h3>
            {
                blogs.map(blog => <Blog key={blog.title} blog={blog} handleBookmark={handleBookmark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleBookmark :PropTypes.func
}
export default Blogs;