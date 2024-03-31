const Nav = ({nav}) => {
    return(
      <nav>
        <ul>
          {nav.map((item, index) => (
            <li key={index}><a href="#">{item.title}</a></li>
          ))}
        </ul>
      </nav>
    )
}

export default Nav;