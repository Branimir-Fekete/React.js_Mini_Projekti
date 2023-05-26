import React from "react";
import ReactDOM from 'react-dom/client';

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




const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting/>)