import PropTypes from 'prop-types'
import Book from '../Book/Book';
const BookMark = ({bookmarks}) => {
    return (
        <div className="w-1/3 bg-slate-200 p-10 mt-10 rounded-lg">
            <h2 className='text-3xl font-bold my-5'>BookMarks Blog: {bookmarks.length}</h2>
            {
                bookmarks.map(book =><Book key={book.id} book={book}></Book>)
            }
        </div>
    );
};
BookMark.propTypes ={
    bookmarks : PropTypes.func
}

export default BookMark;