import React from 'react';
import Order from './order/index';
import OrderData from './order-data/index';
import Header from './header/index';
import UserData from './user-data/index';
import myData from './data.json';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header
          customerName={myData.data.customer.name}
          customerId={myData.data.customer.id}
        />
        <UserData
          orderPlaced={myData.data.placedAt}
          customerEmail={myData.data.customer.email}
          customerPhone={myData.data.customer.phoneNumber}
        />
        <OrderData 
          orderStatus={myData.data.status}
          orderAssignee={myData.data.assignee.name}
          deliveryDate={myData.data.assignedAt}
        />
        <Order
          items={myData.data.items}
        />
      </div>
    );
  }
}

export default App;
