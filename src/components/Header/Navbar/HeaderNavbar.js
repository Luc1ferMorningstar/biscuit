import React from 'react';
import PropTypes from 'prop-types';

import sticky from '../../../HOCs/sticky';
import Logo from '../../Logo/Logo';
import './HeaderNavbar.css';

const propTypes = {
  sticky: PropTypes.bool
};

const HeaderNavbar = ({ sticky }) => {
  return (
    <div className={`header-navbar ${sticky ? 'sticky' : ''}`}>
      <Logo sticky={sticky} />
    </div>
  )
};

HeaderNavbar.propTypes = propTypes;

export default sticky(HeaderNavbar);
