import ImgSearch from 'modules/components/ImgSearch';
import { ToastContainer } from 'react-toastify';

export const App = () => {
  return (
    <>
      <ImgSearch />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};
