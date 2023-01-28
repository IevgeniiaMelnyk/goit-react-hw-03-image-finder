import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMoreBtn from 'shared/components/Button/Button';
import Modal from 'shared/components/Modal/Modal';
import ModalImg from 'shared/components/ModalImg/ModalImg';
import Loader from 'shared/components/Loader/Loader';

import { searchImg } from '../shared/services/img-app.js';

class ImgSearch extends Component {
  state = {
    search: '',
    items: [],
    loading: false,
    error: null,
    page: 1,
    showModal: false,
    modalImg: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (prevState.search !== search || prevState.page !== page) {
      this.fetchImg();
    }
  }

  async fetchImg() {
    try {
      this.setState({ loading: true });
      const { search, page } = this.state;
      const data = await searchImg(search, page);
      this.setState(({ items }) => ({
        items: [...items, ...data.hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  searchImg = ({ search }) => {
    this.setState({ search, items: [], page: 1 });
  };

  loadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  showImg = ({ largeImageURL, tags }) => {
    this.setState({
      modalImg: {
        largeImageURL,
        tags,
      },
      showModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
      modalImg: null,
    });
  };

  render() {
    const { items, error, loading, showModal, modalImg } = this.state;
    const { searchImg, loadMore, closeModal, showImg } = this;

    return (
      <>
        <Searchbar onSubmit={searchImg} />
        <ImageGallery items={items} showImg={showImg} />
        {error && <p>{error}</p>}
        {loading && <Loader />}
        {Boolean(items.length) && (
          <LoadMoreBtn type="button" onClick={loadMore} />
        )}
        {showModal && (
          <Modal close={closeModal}>
            <ModalImg
              largeImageURL={modalImg.largeImageURL}
              tags={modalImg.tags}
            ></ModalImg>
          </Modal>
        )}
      </>
    );
  }
}

export default ImgSearch;
