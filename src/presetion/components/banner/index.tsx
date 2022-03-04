import ImageBanner from "../../../assets/banner.jpg";

import * as Styled from './styles';

export function Banner() {
    return (
        <Styled.ImageContainer>
            <img src={ImageBanner} alt="Image Promotional" />
        </Styled.ImageContainer>
    )
};