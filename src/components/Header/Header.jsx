import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { useState } from 'react';
import { Link } from 'react-scroll';

import './Header.css';

const Header = () => {
    const mobile = window.innerWidth<=768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div className="header">
           <img src={Logo} alt="Logo" className='logo'/>
            {(menuOpened === false && mobile === true) ? ( 
                <div 
                style={{ backgroundColor: 'var(--appColor)', padding:'0.5rem', borderRadius: 'var(--appColor)'}}
                onClick={()=> setMenuOpened(true)}
                >
                    <img src={Bars} alt="navbar" style={{width: '1.5rem', height:'1.5rem'}}/>
                </div>
            ) : 
            <ul className="header-menu">
                <li>
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    to='hero'
                    span={true}
                    smooth={true}
                    >Home</Link>
                </li>
                <li>
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    to='programs'
                    span={true}
                    smooth={true}
                    >Programs</Link> 
                </li>
                <li>
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    to='reasons'
                    span={true}
                    smooth={true}
                    >Why Us</Link>
                </li>
                <li>
                    <Link 
                    onClick={()=>setMenuOpened(false)}
                    to='plans'
                    span={true}
                    smooth={true}
                    >Plans</Link></li>
                <li>
                    <Link
                    onClick={()=>setMenuOpened(false)}
                    to='testemonials'
                    span={true}
                    smooth={true}
                    >Testemonials</Link>
                </li>
           </ul>
            }
        </div>
    );
};

export default Header;