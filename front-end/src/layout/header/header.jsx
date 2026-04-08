import './style.css'
import github from '../../assets/images/github.svg'
import logo from '../../assets/images/logo.svg'

export const Header = () => {

    return(
        <header>
            <img src={logo} alt="" loading='' />
            <nav className='nav-header'>
                <ul className='list-header'>
                    <li>LOCAIS</li>
                    <li>PERSONAGENS</li>
                    <li>EPISÓDIOS</li>
                </ul>
            </nav>
            <img src={github} alt="" loading=''/>
        </header>

    )
        

    
}