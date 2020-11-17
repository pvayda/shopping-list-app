function DisplayList(props){
    var createGroceryItem = props.groceryList.map(each => <li>{each} <button onClick={props.handleDeleteItem} value={each}> Delete</button> <button onClick = {props.handleAddToCart} value={each}>Add to cart</button></li>)
    return(
        <div>
            <h3>My Shopping List</h3>
            <ul>{createGroceryItem}</ul>
            <button onClick= {props.handleDeleteAll}>Delete All Items</button>
        </div>
    )
}
export default DisplayList