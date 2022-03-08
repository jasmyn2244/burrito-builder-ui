import React from 'react';
import { postOrder } from '../../apiCalls';
import './Orders.css';
import Cards from '../Cards/Cards'

const Orders = (props) => {
  const orderEls = props.orders.map(order => {
    return (
      <Cards
        key={order.id}
        order={order}
        removeOrder={props.removeOrder}
      />
    )
    //   <div className="order">
    //     <h3>{order.name}</h3>
    //     <ul className="ingredient-list">
    //       {order.ingredients.map(ingredient => {
    //         return <li>{ingredient}</li>
    //       })}
    //     </ul>
    //     <button onClick={() => props.removeOrder(order.id)}>Cancel Order</button>
    //   </div>
    // )

  });

  return (
    <section>
      {orderEls.length ? orderEls : <p>No orders yet!</p>}
    </section>
  )
}

export default Orders;