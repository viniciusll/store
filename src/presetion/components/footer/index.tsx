import { FooterContainer } from './styles';

import { 
    BsInstagram, 
    BsFacebook, 
    BsTwitter, 
    BsLinkedin 
} from "react-icons/bs";

export function Footer() {
    return (
        <FooterContainer>
            <div className="social">
                <a href="https://www.instagram.com/is.not.defined/">
                    <BsInstagram />
                </a>
                <a href="https://twitter.com/Rivers44336326">
                    <BsTwitter />
                </a>
                <a href="https://www.linkedin.com/in/vinicius-martins-0401381a0/">
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
        </FooterContainer>
    );
};