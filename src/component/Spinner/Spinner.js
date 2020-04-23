import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Spinner() {
  return (
    <Loader
      type="Puff"
      color="#000000"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
