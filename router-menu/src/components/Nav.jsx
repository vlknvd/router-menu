import { NavLink } from "react-router-dom"


const Nav = ({ link }) => {

    const activeLink = ({isActive}) => ((isActive ? 'menu__item menu__item-active' : 'menu__item'))

    return (
        <nav className="menu">
            {link.map(el => 
                <NavLink to={el.link} className={activeLink} key={Math.random(10)}>{el.title}</NavLink>
            )}
        </nav>
    )
}

export default Nav