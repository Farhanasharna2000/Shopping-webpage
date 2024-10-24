import './Product.css'
import PropTypes from 'prop-types'

const Product = ({ product, handleSelectedProduct }) => {
    // console.log(product);
    const { name, image, description, price, isFeature } = product
    return (
        <div className='card'>
            <img className='w-full rounded-xl h-52' src={image} alt="" />
            <h2 className='text-xl font-bold'>{name}</h2>
            <p className='font-semibold text-base text-gray-500'>{description}</p>
            <div>
                <p className='text-base font-semibold text-gray-500'>${price}</p>
                <p className='text-base font-semibold text-gray-500'>{isFeature ? "Feature category" : "Not category"}</p>
                <button onClick={() => handleSelectedProduct(product)} className='btn  mt-3 '>Add to cart</button>

            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleSelectedProduct: PropTypes.func.isRequired
}
export default Product;