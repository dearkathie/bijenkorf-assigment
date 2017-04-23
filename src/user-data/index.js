import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const UserData = (props) => (
  <div className="user-data">
    <div className="row">
      <div className="user-data-main">Aanvegnraadg om:</div>
       <div className="user-data-secondary">{`${props.orderPlaced}`}</div>
    </div>
    <div className="row">
      <div className="user-data-main">Email:</div>
      <div className="user-data-secondary">{`${props.customerEmail}`}</div>
    </div>
    <div className="row">
      <div className="user-data-main">Telefoon:</div>
      <div className="user-data-secondary">{`${props.customerPhone}`}</div>
    </div>
  </div>
  );

UserData.propTypes = {
  orderPlaced: PropTypes.string,
  customerEmail: PropTypes.string,
  customerPhone: PropTypes.string,
};

export default UserData;
