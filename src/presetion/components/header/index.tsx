import * as Styled from './styles';

import { BsFillCartFill } from 'react-icons/bs';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <h1>Logo</h1>
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