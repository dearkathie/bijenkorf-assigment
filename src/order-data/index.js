import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const OrderData = (props) => (
  <div className="order-data">
    <div className="column column-status">
      <div className="status">Status</div>
      <div>{`${props.orderStatus}`}</div>
    </div>
    <div className="column">
      <div className="assignee">Door</div>
      <div>{`${props.orderAssignee}`}</div>
    </div>
    <div className="column">
      <div className="delivery">Om</div>
      <div>{`${props.deliveryDate}`}</div>
    </div>
  </div>
  );

OrderData.propTypes = {
  orderStatus: PropTypes.string,
  orderAssignee: PropTypes.string,
  deliveryDate: PropTypes.string,
};

export default OrderData;