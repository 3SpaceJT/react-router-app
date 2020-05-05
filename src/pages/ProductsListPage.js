import React from 'react';
import { Link } from 'react-router-dom'
import "../styles/ProductsListPage.css"

const trips = [
  {
    id: 1,
    name: "Szlakiem dawnego Poznania",
  },
  {
    id: 2,
    name: "Obiekty sakralne Starego Rynku"
  },
  {
    id: 3,
    name: "Wodny szlak Warty"
  },
]


const ProductPage = () => {
  const list = trips.map(trip => (
    <li key={trip.id}>
      <Link to={`/product/${trip.id}`}>{trip.name}</Link>
    </li >
  ))


  return (
    <div className='trips'>
      <h1>Lista proponowanych wycieczek</h1>
      <ul>
        {list}
      </ul>

    </div>
  );
}

export default ProductPage;