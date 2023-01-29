import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
