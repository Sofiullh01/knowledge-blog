import { FaBookmark} from 'react-icons/fa';
import PropTypes from 'prop-types';
import aurtor from '../../assets/images/profile.png'
const Blog = ({blog, handleBoomMark,handelAddToRead}) => {
    const {title , coverImg, readingTime ,authorName, postDate, hashtags} = blog;
    // console.log(blog)
    return (
        <div className='mb-20 space-y-4'>
            <img src={coverImg} alt="" className='rounded-md w-full'/>
            <div className='flex items-center py-3 justify-between px-4 '>
                <div className='flex items-center gap-x-3'>
                    <img src={aurtor} alt="" />
                    <div className='flex flex-col'>
                    <p className='font-bold'>{authorName}</p><p className='font-medium text-sm'>{postDate}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                <span className='mr-2'>{readingTime} min read</span>
                <button
                onClick={()=>handleBoomMark(blog)}
                className='text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p>
                {
                  hashtags.map((hash,is) => <span key={is} className='ml-2 text-sm text-gray-600 font-medium'><a href="">#{hash}</a></span>)  
                }
            </p>
            <button onClick={()=>handelAddToRead(readingTime)}
            className='text-purple-700 hover:underline font-bold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBoomMark:PropTypes.func.isRequired,
    handelAddToRead: PropTypes.func
}
export default Blog;