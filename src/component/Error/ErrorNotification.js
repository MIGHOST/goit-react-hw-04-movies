import React from 'react';
import PropTypes from 'prop-types';

const ErrorNotification = ({ text }) => (
  <h2>Woops, something went wrong: {text}</h2>
);

ErrorNotification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorNotification;
