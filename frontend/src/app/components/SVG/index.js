import React, { PropTypes } from 'react';

const SVG = (props) => {
  const { name, className } = props;

  let Icon = null;

  try {
    Icon = require(`../../../gfx/svg/react/${name}.svg`); // eslint-disable-line global-require
  } catch (e) {
    console.warn(e); // eslint-disable-line
  }

  return Icon ? <Icon.default className={`icon ${className || ''}`} /> : null;
};

SVG.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SVG;
