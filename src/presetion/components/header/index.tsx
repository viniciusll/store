import { Link } from 'react-router-dom';

import * as Styled from './styles';

import { BsFillCartFill } from 'react-icons/bs';
import Logo from '../../../assets/logo.png';

export function Header() {
  
  return (
    <Styled.HeaderContainer>
      <Link to="/"><img className="logo" src={Logo} alt="Logo company" /></Link>
      <nav className='navigation'>
          <ul>
            <li>
                <Link to="/products">Produtos</Link>
            </li>
            <li>
                <Link className='button' to="/cart">
                  <BsFillCartFill />
                </Link>
            </li>
          </ul>
      </nav>
    </Styled.HeaderContainer>
  );
};