import styled from 'styled-components';

export const ImgBox = styled.div`
  max-height: 200px;
  max-width: 300px;
  @media screen and (min-width: 768px) {
    max-height: 400px;
    max-width: 600px;
  }
  @media screen and (min-width: 120px) {
    max-height: 600px;
    max-width: 800px;
  } ;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
