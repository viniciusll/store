import ImageBanner from "../../../assets/banner.jpg";

import { ImageContainer } from './styles';

export function Banner() {
    return (
        <ImageContainer>
            <img src={ImageBanner} alt="Image Promotional" />
        </ImageContainer>
    )
};