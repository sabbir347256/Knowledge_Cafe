import { PropTypes } from 'prop-types';

const Book = ({book}) => {
    const {title} =book;
    return (
        <div className='bg-slate-300 py-5 px-8 rounded-lg mb-5'>
            <h3 className='text-xl'>{title}</h3>
        </div>
    );
};
Book.propTypes ={
    book : PropTypes.func
}
export default Book;