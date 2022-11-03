import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../context/apis/apiContext';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state/index'
import { useSelector } from 'react-redux/es/exports';
import { useRef } from 'react';


const NewProductsCard = (props) => {
    const cartIconRef = useRef()
    const dispatch = useDispatch()
    const { addCart, removeCart } = bindActionCreators(actionCreators, dispatch)  //this is from redux store

    const cartIds = useSelector(state => state.cart) // also it is from redux reducer

    const { handleCartNum } = useContext(ApiContext)  // this is for updatinig cart count
    const { goggleImgURL, modalImgURL, product } = props;  //props are here

   
    // handling add and remove icons
    const handleAddRemove = (e, productId) => {
        if (e.target.style.color === 'black') {

            handleCartNum(+1)
            addCart(productId)
        }
        else {
            handleCartNum(-1)
            removeCart(productId)
        }

    }

    // check the product that its in the cart or not
    const checkCartProduct = () => {
        let add_remove;
        cartIds.forEach(c_id => {
            if (c_id === product._id) {
                add_remove = true

            }
            

        });
        return add_remove

    }

    return (
        <div className='container_N_P_Card '>

            <div className="imgs_N_P">
                <img src={goggleImgURL + product.imgs.goggle} alt="img" />

                <img className='hoverStyleImg' src={modalImgURL + product.imgs.modal} alt="img" />

                {product.discountPer && <p className='discountPer'>{product.discountPer}</p>}
                {product.saleTag && <p className='saleTag'>on sale!</p>}

                <div className="icons_N_P">
                    <span className="material-icons-outlined  ">
                        favorite_border
                    </span>
                    <span className="material-icons-outlined  ">
                        content_copy
                    </span>
                    <span className="material-icons-outlined  ">
                        visibility
                    </span>
                    <span onClick={(e) => { handleAddRemove(e, product._id) }} ref={cartIconRef} style={{ color: checkCartProduct() ? '#ed0f0f' : 'black' }} className="material-icons-outlined">

                        {checkCartProduct() ? 'remove' : 'add'}_shopping_cart
                    </span>
                </div>

            </div>

            <div className="ratingStars">
                {product.stars.map((star, index) => {
                    return (
                        <span key={index} className={`material-icons-outlined ${star && 'yellowStar'}`}>
                            star
                        </span>

                    )
                })}

            </div>

            <Link className='productName' to='/'>{product.name}</Link><br></br>

            {product.cutPrice && <s>{product.cutPrice}</s>}
            <span className='productPrice'>{product.price}</span>
        </div>
    )
}

export default NewProductsCard
