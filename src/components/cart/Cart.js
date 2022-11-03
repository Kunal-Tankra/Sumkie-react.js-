import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux/es/exports'
import ApiContext from '../../context/apis/apiContext'
import NewProductsCard from '../home/NewProductsCard'



const Cart = (props) => {
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }
  useEffect(() => {
    document.title = `Sumkie - ${capitalize(props.title)}`
  })

  const { newProducts, featuredProducts } = useContext(ApiContext) //these are from context api


  const [cartProducts, setCartProducts] = useState([]);  // states

  const cartIds = useSelector(state => state.cart)  // this is from redux store


  let allProducts = [];
  if (newProducts) {
    allProducts = newProducts.concat(featuredProducts)

  }




  // useeffect for get cart products...
  useEffect(() => {
    let cartProductsArr = []

    cartIds.map((c_id) => {

      allProducts.map((product) => {
        if (product._id === c_id) {
          cartProductsArr.push(product)
          setCartProducts(cartProductsArr)
        }
        return null
      })
      
      return null
    })

    if (cartIds.length === 0) {
      setCartProducts([])
    }


  }, [cartIds]);

 
// functions for corect links 
  const checkProductGoggleURL = (cat) => {
    return `gallery/images/${cat}/googles/`
  }

  const checkProductModalURL = (cat) => {
    return `gallery/images/${cat}/modal/`

  }

  return (
    <div className={`cartContainer ${cartProducts.length === 0 ? 'styleCartContainer': ''}`}>
      {cartProducts.length === 0 && <h1> cart is empty</h1>}

      {cartProducts.map((cart) => {
        return <NewProductsCard key={cart._id} product={cart} goggleImgURL={checkProductGoggleURL(cart.category)} modalImgURL={checkProductModalURL(cart.category)} />
      })}

       <button disabled={cartProducts.length === 0}>check out</button>
    </div>
  )
}

export default Cart
