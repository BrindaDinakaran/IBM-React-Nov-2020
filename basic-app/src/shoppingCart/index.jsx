import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cartActionCreators from './actions';
import cartList from './views/cartList';
import cartStats from './views/cartStats';

function Cart(props) {
    return (
        <div>
            <h3>Cart</h3>
            {/* <input type="button" value="LOAD CART" onClick={load}/> */}
            <hr />
            <cartList
                items={props.cartItems}
                products={props.products}
            />
            <cartStats
                items={props.cartItems}
                products={props.products}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart,
        products: state.products,
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(cartActionCreators, dispatch);



export default connect(mapStateToProps, mapDispatchToProps)(Cart);