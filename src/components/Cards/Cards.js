import React from 'react';

function Cards({ order, removeOrder }) {
  return (
    <div className="order">
      <h3>{order.name}</h3>
      <ul className="ingredient-list">
        {order.ingredients.map(ingredient => {
          return <li>{ingredient}</li>
        })}
      </ul>
      <button onClick={() => removeOrder(order.id)}>Cancel Order</button>
    </div>
  )
}

export default Cards 