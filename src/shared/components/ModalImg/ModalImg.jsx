import PropTypes from 'prop-types';
import { ImgBox, Img } from './ModalImg.styled';

const ModalImg = ({ largeImageURL, tags }) => {
  return (
    <ImgBox>
      <Img src={largeImageURL} alt={tags}></Img>
    </ImgBox>
  );
};

export default ModalImg;

ModalImg.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
