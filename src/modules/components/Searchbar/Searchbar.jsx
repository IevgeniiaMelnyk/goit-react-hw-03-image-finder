import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { IoSearch } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import {
  SearchbarSection,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.search.trim() === '') {
      toast.info('Enter a search term.');
      return;
    }
    const { onSubmit } = this.props;
    onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      search: '',
    });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;

    return (
      <SearchbarSection>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormInput
            value={search}
            onChange={handleChange}
            name="search"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <SearchFormButton type="submit">
            <IconContext.Provider
              value={{
                style: { width: '30px', height: '30px', fill: '#3f51b5' },
              }}
            >
              <IoSearch />
            </IconContext.Provider>
          </SearchFormButton>
        </SearchForm>
      </SearchbarSection>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
