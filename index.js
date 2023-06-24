/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/
/*ReactDOM.render
(<ul><li>This is line 1</li><li>This is line 2</li></ul>, document.getElementById("root"));
const page = (
    <div>
        <h1 classname="header"> This is JSX1</h1>
        <p> This is a para </p>
    </div>
    )
ReactDOM.render(
    page ,
    document.getElementById("root")
)*/

/*const page=(
    <div>
        <h1>THIS IS MY WEBSITE</h1>
        <ul>
            <li>PRICING</li>
            <li>ABOUT</li>
            <li> CONTACT</li>
        </ul>
    </div>
)
ReactDOM.render( page, document.getElementById("root"))*/

/*const page=
(
    <div classname="header">
        <h1> Fun facts about React  </h1>
        <ul>
            <li>hi</li>
            <li> there </li>
            <li> Faizan </li>
        </ul>
    </div>

)

ReactDOM.render(page, document.getElementById("root"))*/

import Header from "Header"

/*function Header(){
    return(
        <header>
        <nav className= "nav">
            <img src="./check.jpg" className="img"/>
            <ul className="nav-item">
            <li>PRICE</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            </ul>
        </nav>
    </header>
    )
}*/
function Footer()
{
    return(
        <footer className="foot">
        <small> ALL RIGHTS RESERVED </small>
    </footer>
    )
}
function MainComp()
{
    return(
        <nav className="body">
        <h1> EXCITED TO LEARN!</h1>
        <ol> 
            <li> TRY LINE</li>
            <li> HELLO 1 2 3 </li>
        </ol>
        </nav>
    )
}
function Page()
{
    return(  
        <div>
        <Header />
        <MainComp />
        <Footer />
        </div>
    ) 
}
ReactDOM.render(<Page />, document.getElementById("root"))