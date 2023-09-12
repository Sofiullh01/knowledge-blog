import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({bookMarks, readTime}) => {
    console.log(bookMarks)
    return (
        <div className="md:w-1/3 space-y-6">
            <div className='text-blue-800 bg-blue-200 rounded-lg border-2 font-bold p-6'>
                <p className="text-lg">Bookmarked Blogs :{readTime}</p>
            </div>
           <div className='bg-gray-100 px-4 py-6 space-y-3'>
           <h2 className="text-3xl font-semibold">Book Mark Blog:{bookMarks.length}</h2>
           {
            bookMarks.map(bookMark => <BookMark 
            key={bookMark.id}
            bookMark={bookMark}></BookMark>)
           }
           </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readTime: PropTypes.array
}
export default BookMarks;