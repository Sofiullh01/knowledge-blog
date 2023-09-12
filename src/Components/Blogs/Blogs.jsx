import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBoomMark,handelAddToRead}) => {
    const [ blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h4 className="text-4xl font-semibold">Boogs</h4> */}
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleBoomMark={handleBoomMark}
                    handelAddToRead={handelAddToRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleBoomMark: PropTypes.func.isRequired,
    handelAddToRead: PropTypes.func
}
export default Blogs;