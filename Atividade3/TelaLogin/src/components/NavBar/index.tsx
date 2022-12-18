import './Header.modules.css';

import andersonLogo from '../../assets/img/LogoAnderson.png';

export function Navbar(){

    return (
        <nav className='header'>
             <img src={andersonLogo} alt="Logo Anderson Game"/>
        </nav>
    );
}