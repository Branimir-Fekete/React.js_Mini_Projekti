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

const author = 'Jordan Moore';
const title = 'Oh, the Places You\'ll Go!';
const img = './images/book1.jpg';

const BookList = () =>{
    return <section className="booklist">
        <Book author={author} title={title} img={img} />
        <Book author={author} title={title} img={img} />
    </section>
};

const Book = (props) =>{
    console.log(props);
    return (
    <article className="book">
        <img src={props.img} alt={props.title} />
        <h2>{props.title}</h2>
        <h4>{props.author}</h4>
    </article>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'))


//prije je pisalo Greating, ali sam promijenio
root.render(<BookList/>)