
import { useState } from 'react'
import './App.css'
import AllProducts from './Components/AllProducts/AllProducts'
import CartContainer from './Components/CartContainer/CartContainer'
import Header from './Components/Header/Header'

function App() {

  const [price, setPrice] = useState(500)

  const handleIncreasePrice = (pr) => {
    setPrice(price + pr)
  }
  const [selectedProducts, setSelectedProducts] = useState([])

  const handleDeletePrice = (id) => {
    const product = selectedProducts.find(selectedProduct => selectedProduct.id == id)
    setPrice(price - product.price)
  }

  const handleDelete = (id) => {
    // console.log(id);
    handleDeletePrice(id);
    const remaining = selectedProducts.filter(selectedProduct => selectedProduct.id != id)
    setSelectedProducts(remaining)
  }

  const handleSelectedProduct = (product) => {
    // console.log(product);
    const isExist = selectedProducts.find(selectedProduct => selectedProduct.id == product.id);
    // console.log(isExist);
    if (isExist) {
      alert("Already available")
    }
    else {
      handleIncreasePrice(product.price)
      setSelectedProducts([...selectedProducts, product])

    }

  }

  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart"
  })
  // console.log(isActive);

  const handleIsActiveState = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setIsActive({
        cart: false,
        status: "about"
      })
    }
  }
  // console.log(isActive);

  return (
    <>
      <Header price={price} selectedProducts={selectedProducts}></Header>
      <div className='flex  justify-around  mt-6 container mx-auto'>
        <AllProducts handleSelectedProduct={handleSelectedProduct}></AllProducts>
        <CartContainer handleDelete={handleDelete} selectedProducts={selectedProducts} isActive={isActive} handleIsActiveState={handleIsActiveState}></CartContainer>
      </div>
    </>
  )
}

export default App
