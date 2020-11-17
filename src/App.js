import React from 'react';
import AddItem from './AddItem'
import DisplayList from './DisplayList'
import CartList from './CartList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentItem: '',
      groceryList: [],
      cartList: []
    }
  }
  handleNewItem = (e) => {
    this.setState({currentItem: e.target.value })
  }
  handleAddClick = () => {
    this.setState({groceryList: this.state.groceryList.concat(this.state.currentItem)})
  }
  handleDeleteItem = (e) => {
    let newList = this.state.groceryList.filter(each => each !== e.target.value)
    this.setState({ groceryList: newList })
  }
  handleDeleteAll = () => {
    this.setState({groceryList: []})
  }
  handleAddToCart = (e) => {
    this.setState({cartList: this.state.cartList.concat(e.target.value)})
    this.handleDeleteItem(e)
  }
  render(){
    return (
      <div>
        <h1>Shopping List App!</h1>
        <AddItem handleNewItem = {this.handleNewItem} handleAddClick = {this.handleAddClick}/>
        <DisplayList groceryList = {this.state.groceryList} handleDeleteItem={this.handleDeleteItem} handleDeleteAll = {this.handleDeleteAll} handleAddToCart={this.handleAddToCart}/>
        <CartList cartList= {this.state.cartList}/>
      </div>
    );
  }
 
}

export default App;
