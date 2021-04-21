import React from 'react';
import PropTypes from 'prop-types';

function Footer(props) {
  return (
    <React.Fragment>
      <button onClick={props.handleClick}>{props.buttonText}</button>
      <p>&copy; 2021 Nick Lindau & Mikey Kriegel</p>
    </React.Fragment>
  )
}

Footer.propTypes = {
  handleClick: PropTypes.func,
  buttonText: PropTypes.string
};

export default Footer;