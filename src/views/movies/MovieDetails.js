/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import { map, result } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Row } from 'reactstrap';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: '',
      details: {},
    };
  }

  render() {
    const { stockMovie } = this.props;
    const detailMovie = result(stockMovie, 'detailMovie', {});
    const title = result(detailMovie, 'Title', '');
    const poster = result(detailMovie, 'Poster', '');
    return (
      <div>
        <h2 className="text-white">{title}</h2>
        <div>
          <Row xs="4">
            <Col>
              <img width={300} className="m-2" src={poster} alt="poster" />
            </Col>
            <Col>
              { map(detailMovie, (val, key) => (
                <>
                  { (key !== 'Ratings')
                    ? (
                      <div className="row">
                        <div className="text-white">
                          {key}
                          :
                          {' '}
                          {val}
                        </div>
                      </div>
                    )
                    : <div />}
                </>
              ))}
            </Col>
          </Row>
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
)(MovieDetails);
