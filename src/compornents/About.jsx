import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setTestButton, onPlaceChange } from '../actions/';


const About = props => (
  <div>
    <input
      type="text"
      size="30"
      value={props.testText}
      onChange={(e) => {
        e.preventDefault();
        props.onPlaceChange(e.target.value);
      }}
    />
    <button
      onClick={() => props.setTestButton()}
    >
      About
    </button>
  </div>
);

About.propsTypes = {
  testText: PropTypes.string,
  setTestButton: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};


const mapDispatchToProps = { setTestButton, onPlaceChange };


export default connect(null, mapDispatchToProps)(About);
