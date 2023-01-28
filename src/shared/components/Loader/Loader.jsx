import { RotatingLines } from 'react-loader-spinner';
import { Box } from './Loader.styled';

const Loader = () => {
  return (
    <Box>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
};

export default Loader;
