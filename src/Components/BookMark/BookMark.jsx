import PropTypes  from "prop-types";

const BookMark = ({bookMark}) => {
    console.log(bookMark)
    const {title} = bookMark;
    return (
        <div className="">
            <h2 className="text-xl font-semibold bg-white p-4 rounded-md">{title}</h2>
            
        </div>
    );
};

BookMark.propTypes = {
    bookMark: PropTypes.object
}
export default BookMark;