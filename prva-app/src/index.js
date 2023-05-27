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

const BookList = () =>{
    return <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
    </section>
};

const Book = () =>{
    return <article className="book">
        <Image />
        <Title />
        <Author />
    </article>
};


const Image = () => <img src="./images/book1.jpg" alt="Oh, the Places You'll Go!" />
const Title = () => <h2>Oh, the Places You'll Go!</h2>
const Author = () => {//inline css
    const inlineHeadingStyles = {
      color: '#617d98',
      fontSize: '0.75rem',
      marginTop: '0.5rem',
    };
    return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>;
  };

const root = ReactDOM.createRoot(document.getElementById('root'))


//prije je pisalo Greating, ali sam promijenio
root.render(<BookList/>)