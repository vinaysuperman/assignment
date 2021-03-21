import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { AddCart, RemoveCart } from '../Store/Action/Action';
import style from './CardMain.module.css';

class CardMain extends Component {
  render() {
    const price = this.props.price;
    const discountPrice = price - price * (this.props.discount / 100);
    const taxPrice = (this.props.tax / 100) * discountPrice;
    const totalPrice = (discountPrice + taxPrice).toFixed(0);
    const name = this.props.name;
    const id = this.props.id;
    const img = this.props.img;
    return (
      <>
        <div >
          <div className={style.card}>
            <div className={style.thumb} style={{
              backgroundImage: `url(${img})`
            }}></div>
            <article>
              <p>{name}</p>
              <p>Price: $<span style={{ textDecoration: "line-through", marginRight: "5px" }}> {price}</span>
                <span> {discountPrice} ({this.props.discount}% off)</span>
                <span> + {this.props.tax}% (Tax)</span></p>
              <p>Total Price : $<span> {totalPrice}</span></p>
              <Button variant="success" onClick={() => { this.props.addCartHandler({ name: name, id: id, price: totalPrice, img: img }) }}>Add to cart</Button>{' '}
            </article>
          </div>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    cardData: state.reducer2,
    newCart: state.reducer1
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addCartHandler: (data) => dispatch(AddCart(data)),
    removeCartHandler: (data) => dispatch(RemoveCart(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardMain);
