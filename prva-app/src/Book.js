const Book = (props) => {
const { img, title, author, getBook, id } = props;
// console.log(props);
const getSingleBook = () => {
    getBook(id);
};

return (
    <article className='book'>
    <img src={img} alt={title} />
    <h2>{title}</h2>
    {/* this is not going to work */}
    <button onClick={getSingleBook}>display title</button>
    <h4>{author}</h4>
    </article>
);
};

export default Book;