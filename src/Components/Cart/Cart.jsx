import PropTypes from 'prop-types';

const Cart = ({ selectedProducts, handleDelete }) => {
  return (
    <div>
      {selectedProducts.map((selectedProduct) => (
        <div className="mt-4" key={selectedProduct.id}>
          <div className="flex justify-between items-center gap-4">
            <img className="w-12 h-12" src={selectedProduct.image} alt="" />
            <h1>{selectedProduct.name}</h1>
            <p>{selectedProduct.price}</p>
            <button onClick={() => handleDelete(selectedProduct.id)} className='btn'>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  selectedProducts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Cart;