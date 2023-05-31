import React from "react";
import ReactDOM from 'react-dom/client';
import './style.css'

//ovo što je zakomentirano je staro pa nisam htio mijenjati. Zanemari samo
/*
function Greeting(){
    return <h1>Ovo je naslov</h1>;
}
*/

/*
function Greeting(){
    return React.createElement('h2',{},'hello world');
}
*/

/*
function Greeting(){
    return (
    <div>
        <h2>My element</h2>
    </div>);
}
*/

/*
function Greeting() {
    return(
    <React.Fragment>
        <div>
            <h3>
                <ul>
                    <li>
                        <a href="#">Hello world</a>
                    </li>
                </ul>
            </h3>
        </div>
        <h2>Novi naslov</h2>
    </React.Fragment>
    );
}
*/

/*
function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => <h2>John doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};
*/

//novo od sada pa na dalje...

const books = [
    {
        author: 'Jordan Moore',
        title: 'Oh, the Places You\'ll Go!',
        img: './images/book1.jpg',
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: './images/book2.jpg',
    },
];

const names = ['john', 'peter', 'ivan']
const newNames = names.map((name) => {
    return <h1>{name}</h1>;
});
console.log(newNames)
const BookList = () =>{
    return <section className="booklist">{newNames}</section>
};

const Book = (props) =>{
    const { img, title, author, children } = props;
    return (
    <article className="book">
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
    </article>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'))


//prije je pisalo Greating, ali sam promijenio
root.render(<BookList/>)