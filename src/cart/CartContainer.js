import React from "react";
import {connect} from "react-redux";
import Cart from "./Cart";
import {getCart, modifyCart} from "./cartActionCreators";

function mapStateToProps (state) {
  return {
    products: state.cart.products, //Array
    orderId: state.orders.order.id,
    userId: state.users.user.id,
  };
};

function mapDispatchToProps (dispatch) {
  return {
    getCart: (orderId) => dispatch(getCart(orderId)),
    modifyCart: (product, quantity) => dispatch(modifyCart(product, quantity))
  };
};

class CartContainer extends React.Component {

  componentDidMount() {
    this.props.getCart(this.props.orderId)
  }

  increaseQuantity = (product) => this.props.modifyCart(product, 1)
  decreaseQuantity = (product) => this.props.modifyCart(product, -1)

  handleDelete(){/*TODO*/}

  render() {
    return (
      <div>
        <Cart
          products={this.props.products}
          ammount={this.props.ammount}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);



/*  increaseQty = (event) => {
   console.log(event.target)
   const name = event.target.name;
   const selectedItem = this.state.items.filter((elem) => elem.name === name);
   const notSelectedItems = this.state.items.filter((elem) => elem.name !== name);
   selectedItem[0].quantity = selectedItem[0].quantity + 1;
     this.setState((prevState) => ({ ...prevState, items: [...notSelectedItems, selectedItem] }
     , console.log(this.state)
   ))
 } */

/* increaseQty = (event) => {
  console.log(event.target)
  const name = event.target.name;
  const selectedItem = this.state.items.filter((elem) => elem.name === name);
  const notSelectedItems = this.state.items.filter((elem) => elem.name !== name);
  selectedItem[0].quantity = selectedItem[0].quantity + 1;
  //this.props.setProductQuantity('+', selectedItem.name)
    this.setState((prevState) => ({ ...prevState, items: [...notSelectedItems, selectedItem] }
    , console.log(this.state)
  ))
} */