import * as Styled from './styles';

import { 
    BsInstagram, 
    BsFacebook, 
    BsTwitter, 
    BsLinkedin 
} from "react-icons/bs";

export function Footer() {
    return (
        <Styled.FooterContainer>
            <div className="social">
                <a href="#">
                    <BsInstagram />
                </a>
                <a href="#">
                    <BsFacebook />
                </a>
                <a href="#">
                    <BsTwitter />
                </a>
                <a href="#">
                    <BsLinkedin />
                </a>
            </div>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="/">Inicio</a>
                </li>
                <li className="list-inline-item">
                    <a href="/products">Produtos</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Sobre</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Termos de uso</a>
                </li>
                <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            <p className="copyright">Vinicius Martins © 2022</p>
        </Styled.FooterContainer>
    );
};