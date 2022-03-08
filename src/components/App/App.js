import React, { Component } from 'react';
import './App.css';
import { getOrders, postOrder, deleteOrder } from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
      error: ''
    }
  }

  componentDidMount() {
    getOrders()
      .then(data => {
        console.log(data)
        this.setState({ orders: data.orders })
      })
      .catch(err => console.error('Error fetching:', err));
  }

  addNewOrder = (newOrder) => {
    postOrder(newOrder)
      .then(data => this.setState({ orders: [...this.state.orders, data] }))
      .catch(error => this.setState({ error: error }))
  }

  removeOrder = (id) => {
    deleteOrder(id)
      .then(() => getOrders())
      .then(data => {
        this.setState({ orders: data.orders })
      })
      .catch(err => console.error('Error fetching:', err));
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm addNewOrder={this.addNewOrder} />
        </header>

        <Orders orders={this.state.orders} removeOrder={this.removeOrder} />
      </main>
    );
  }
}


export default App;
