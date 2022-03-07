import * as Styled from './styles';

import { BsFillCartFill } from 'react-icons/bs';
import Logo from '../../../assets/logo.png';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <img className="logo" src={Logo} alt="Logo company" />
      <nav className='navigation'>
          <ul>
            <li>
                <a href="/products">Produtos</a>
            </li>
            <li>
                <a className='button' href="/cart">
                  <BsFillCartFill />
                </a>
            </li>
          </ul>
      </nav>
    </Styled.HeaderContainer>
  );
};