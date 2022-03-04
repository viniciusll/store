import * as Styled from './styles';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <h1>Logo</h1>
      <nav className='navigation'>
          <ul>
            <li>
                <a href="/products">products</a>
            </li>
            <li>
                <a className='button' href="/cart">cart</a>
            </li>
          </ul>
      </nav>
    </Styled.HeaderContainer>
  );
};