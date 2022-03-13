import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { HeaderContainer, Button } from './styles';

import { BsFillCartFill } from 'react-icons/bs';
import Logo from '../../../assets/logo.png';

export function Header() {
  const [isActive, setIsActive] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname === '/cart' ? true : false);
  }, []);
  
  return (
    <HeaderContainer>
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo company" />
      </Link>
      <nav className='navigation'>
          <ul>
            <li>
                <Link to="/products">Produtos</Link>
            </li>
            <li>
                <Link to="/cart">
                  <Button active={isActive}>
                      <span><BsFillCartFill /></span>
                  </Button>
                </Link>
            </li>
          </ul>
      </nav>
    </HeaderContainer>
  );
};