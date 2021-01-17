/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { baseUrl } from '../helpers/config';

export const callMovieList = (titles) => {
  const url = `${baseUrl}?apikey=a329e40b&s=${titles}`;

  const result = axios.get(url, {
  }).then((res) => res.data).catch(() => {
  });

  return result;
};

export const callMovieDetail = (imdbID) => {
  const url = `${baseUrl}?apikey=a329e40b&i=${imdbID}`;

  const result = axios.get(url, {
  }).then((res) => res.data).catch(() => {
  });

  return result;
};
