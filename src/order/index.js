import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Order = (props) => (
   <div className="order-list">
      {
        props.items.map((item) =>
          <div key={item.id} className="order-item">
            <input type="checkbox" id="custom-checkbox" checked="checked" />
            <label for="custom-checkbox"></label>
            <img className="ordered-item-img" src={item.product.imageUrl} alt="product"></img>
            <div className="order-item-text">
              <div className="ordered-item-name">{ item.product.name.toUpperCase() }</div>
              <div className="ordered-item-description">{ item.product.description }</div>
            </div>
          </div>
      )
    }
  </div>
  );

Order.propTypes = {
  items: PropTypes.array,
};

export default Order;