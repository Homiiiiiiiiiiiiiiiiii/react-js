import Nav from "./Nav";

function Header({title, nav}){
    return(
        <header>
        <h1>{title}</h1>
        <Nav nav={nav}/>
        </header>
    )
}

export default Header;