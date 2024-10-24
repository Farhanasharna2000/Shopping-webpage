import About from '../About/About';
import Cart from '../Cart/Cart';
import './CartContainer.css'
import PropTypes from 'prop-types'
const CartContainer = ({ handleIsActiveState, isActive, selectedProducts, handleDelete }) => {
    // console.log(handleIsActiveState);

    return (
        <div>
            <h1 className='text-3xl font-bold mb-3'>CartContainer.JSX</h1>
            <div className=" flex  justify-around ">
                <div onClick={() => handleIsActiveState("cart")} className={`${isActive.cart ? "btn active" : "btn"}`}>Cart</div>
                <div onClick={() => handleIsActiveState("about")} className={`${isActive.cart ? "btn " : "btn active"}`}>About</div>
            </div>
            {isActive.cart ? <Cart handleDelete={handleDelete} selectedProducts={selectedProducts}></Cart> : <About></About>}
        </div>
    );
};
CartContainer.propTypes = {
    handleIsActiveState: PropTypes.func.isRequired,
    isActive: PropTypes.object.isRequired,
    selectedProducts: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
}
export default CartContainer;