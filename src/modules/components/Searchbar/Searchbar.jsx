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
          <SearchFormButton type="submit">
            <IconContext.Provider
              value={{ style: { width: '30px', height: '30px', fill: 'gray' } }}
            >
              <IoSearch />
            </IconContext.Provider>
          </SearchFormButton>

          <SearchFormInput
            value={search}
            onChange={handleChange}
            name="search"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarSection>
    );
  }
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
