/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-useless-constructor */
import { map } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movies, modal, details } = this.props;
    return (
      <>
        { map(movies, (val, key) => (
          <div key={key} className="image-cont m-3">
            <div onClick={() => modal(val)}>
              <img width={150} src={val.Poster} alt="poster" />
            </div>
            <div onClick={() => details(val)} className="hover-titles">
              <div>
                <span style={{ fontSize: 10 }} className="text-white">{val.Title}</span>
                <br />
                <span style={{ fontSize: 10 }} className="text-white">{val.Year}</span>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps, mapDispatchToProps,
)(MovieList);
