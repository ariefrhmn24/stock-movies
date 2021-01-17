/* eslint-disable max-len */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import { result } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, FormGroup, Label, Input,
  Modal, ModalBody,
} from 'reactstrap';
import { push } from 'connected-react-router';
import { callMovieList, callMovieDetail } from '../../services/movies.services';
import MovieList from './MovieList';

class MovieDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: '',
      modal: false,
      details: {},
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.getMovieDetails = this.getMovieDetails.bind(this);
  }

  componentDidMount() {
    this.getMovieList('');
  }

  async getMovieList(titles) {
    const callResponse = await callMovieList(titles);
    const searchResult = result(callResponse, 'Search', []);
    this.props.dispatch({ type: 'SAVE_SEARCH_MOVIE', value: searchResult });
  }

  async getMovieDetails(val) {
    const title = result(val, 'Title', '');
    const imdbID = result(val, 'imdbID', '');
    const callResponse = await callMovieDetail(imdbID);
    this.props.dispatch({ type: 'SAVE_DETAIL_MOVIE', value: callResponse });
    this.props.dispatch(push(`/movies/${title}`));
  }

  searchMovies(val) {
    const titles = val.target.value;
    this.getMovieList(titles);
  }

  toggleModal(val) {
    this.setState({ modal: !this.state.modal, details: val });
  }

  render() {
    const { modal, details } = this.state;
    const { stockMovie } = this.props;
    const watchAgain = result(stockMovie, 'watchAgain.Search', []);
    const searchResult = result(stockMovie, 'searchResult', []);

    return (
      <div>
        <div>
          <Modal isOpen={modal} toggle={this.toggleModal} centered size="md">
            <ModalBody>
              <img width={300} src={details.Poster} alt="poster" />
            </ModalBody>
          </Modal>
        </div>
        <div className="stock-movie">
          <Form>
            <FormGroup>
              <Label className="text-white" for="exampleSearch">Search Movies</Label>
              <Input
                type="search"
                name="search"
                id="exampleSearch"
                placeholder="Titles"
                onChange={(val) => this.searchMovies(val)}
              />
            </FormGroup>
          </Form>
          <div className="row">
            <MovieList movies={searchResult} modal={this.toggleModal} details={this.getMovieDetails} />
          </div>
        </div>
        <div className="stock-movie">
          <h2 className="text-white">Watch It Again</h2>
          <div className="row">
            <MovieList movies={watchAgain} modal={this.toggleModal} details={this.getMovieDetails} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stockMovie: state.stockMovie,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(MovieDashboard);
