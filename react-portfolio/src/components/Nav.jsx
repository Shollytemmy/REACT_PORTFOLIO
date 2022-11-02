import {RiMoonClearFill} from 'react-icons/ri'



import './styles.css'

export const Nav = () => {
  return (
    <nav className='container'>
        <div className="nav__section">
                    <h1 className='folio__name'>Bunyameen Shola</h1>
        <ul>
            <a href="/about">
                <li>About</li>
            </a>
            <a href="">
                <li>Work</li>
            </a>
            <a href="">
                <li>Contact</li>
            </a>
            
        </ul>
        <div className="theme">
            <RiMoonClearFill />
        </div>

        </div>

        </nav>
  )
}
