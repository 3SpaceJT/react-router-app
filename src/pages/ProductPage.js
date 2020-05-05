import React from 'react';
import Product from "../components/Product"
import { Link } from 'react-router-dom'

const ProductPage = ({ match }) => {
  return (
    <>
      <div>Opis Wycieczki</div>
      <Product id={match.params.id} />
      <Link to="/products"> Powrót </Link>
    </>
  );
}

export default ProductPage;