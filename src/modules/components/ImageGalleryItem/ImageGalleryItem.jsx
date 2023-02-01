import PropTypes from 'prop-types';
import {
  ImageGalleryItemImage,
  ImageGalleryItemLi,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, tags, largeImageURL, showImg }) => {
  return (
    <ImageGalleryItemLi
      onClick={() => {
        showImg({ largeImageURL, tags });
      }}
    >
      <ImageGalleryItemImage
        src={src}
        alt={tags}
        loading="lazy"
      ></ImageGalleryItemImage>
    </ImageGalleryItemLi>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  showImg: PropTypes.func.isRequired,
};
