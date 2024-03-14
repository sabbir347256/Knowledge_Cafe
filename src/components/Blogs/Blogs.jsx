import { useEffect } from "react";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({ handleBookmark }) => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('cafe.json');
                const data = await response.json();
                setBlogs(data);
            } catch{
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [error]);
    return (
        <div className="w-2/3">
            {
                isLoading ? <div className="flex justify-center ">
                    <h3>Loading</h3>
                    <DotLoader
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>

                    :

                    <div>
                        {
                            blogs?.map(blog => <Blog key={blog.title} blog={blog} handleBookmark={handleBookmark}></Blog>)
                        }
                    </div>
            }
        </div>
    );
};
Blogs.propTypes = {
    handleBookmark: PropTypes.func
}
export default Blogs;