import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Header = (props) => (
  <div className="header">
    <div className="customer-name">{`${props.customerName}`}</div>
    <div className="customer-id">{`${props.customerId}`}</div>
  </div>
  );

Header.propTypes = {
  customerName: PropTypes.string,
  customerId: PropTypes.string,
};

export default Header;