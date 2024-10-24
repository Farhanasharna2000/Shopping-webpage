import PropTypes from 'prop-types'

const Header = ({ selectedProducts, price }) => {
  // console.log(price);

  return (
    <div className="  bg-blue-50">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a className=" text-2xl font-bold ">Logo</a>
        </div>
        <div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0">
              <li><a>Home</a></li>
              <li><a>Product</a></li>
              <li><a>Cart {selectedProducts.length}</a></li>
              <li><a>$ 500</a></li>
            </ul>
          </div>
          <div className=" hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl">
              <li><a>Home</a></li>
              <li><a>Product</a></li>
              <li><a>Cart {selectedProducts.length}</a></li>
              <li><a>$ {price}</a></li>
            </ul>
          </div>
        </div>

      </div>

    </div>

  );
};

Header.propTypes = {

  selectedProducts: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
}

export default Header;