import {RiMoonClearFill} from 'react-icons/ri'
import AnchorLink from "react-anchor-link-smooth-scroll"





export const Nav = () => {
  return (
    <nav className='nav__wrapper'>
        <div className="nav__section">
                    <h1 className='folio__name'>Bunyameen Shola</h1>
        <ul>
            <AnchorLink href="#about">
                <li>About</li>
            </AnchorLink>

            <AnchorLink href="#work">
                <li>Work</li>
            </AnchorLink>
            <AnchorLink href="#contact">
                <li>Contact</li>
            </AnchorLink>
            
        </ul>
        <div className="theme">
            <RiMoonClearFill />
        </div>

        </div>

        </nav>
  )
}
