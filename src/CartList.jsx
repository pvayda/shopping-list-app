function CartList(props){
    var createCartList = props.cartList.map(each => <li>{each}</li>)
    return(
        <div>
            <h3>My Shopping Cart</h3>
            <ul>{createCartList}</ul>
        </div>
    )
}
export default CartList