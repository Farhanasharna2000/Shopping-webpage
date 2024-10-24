import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './AllProducts.css';
import Product from '../Product/Product';

const AllProducts = ({ handleSelectedProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('fakeData.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div> 1
      <h1 className="text-3xl font-bold mb-3">All Products.JSX</h1>
      <div>
        {products.map((product, idx) => (
          <Product
            key={idx}
            product={product}
            handleSelectedProduct={handleSelectedProduct}
          />
        ))}
      </div>
    </div>
  );
};

AllProducts.propTypes = {
  handleSelectedProduct: PropTypes.func.isRequired,
};

export default AllProducts;