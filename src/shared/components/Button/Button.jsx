import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const LoadMoreBtn = ({ onClick, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      Load more
    </Button>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
};
