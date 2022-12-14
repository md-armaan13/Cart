import React from 'react';
import './CartItem.css';
class CartItem extends React.Component{

constructor(){
super();

this.state = {

  price : 99,
  title : "Shirt",
  discription : 'Cotton T-Shirt',
  qty : 1

}

}

increaseQuantity= ()=>{
  console.log(this.state.qty+1);
// first form 
  // this.setState({
  //   qty : this.state.qty+1,
  // })

  //second form (you can pass the call back functioin)

  this.setState((prevState)=>{
    return {
      qty : prevState.qty+1
    }
  })

}

decreaseQuantity= ()=>{
  console.log(this.state.qty-1);
// first form 
  // this.setState({
  //   qty : this.state.qty+1,
  // })

  //second form (you can pass the call back functioin)
  if(this.state.qty<=0){
    return;
  }

  this.setState((prevState)=>{
    return {
      qty : prevState.qty-1
    }
  })

}


render(){
  
  const { price, title,discription,qty} = this.state;
return (

    <div className="row mb-4 d-flex justify-content-between align-items-center">
    <div className="col-md-2 col-lg-2 col-xl-2">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp"
        className="img-fluid rounded-3" alt="Cotton T-shirt" style={{height : 80 , width : 80} }/>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-3">
      <h6 className="text-muted">{title}</h6>
      <h6 className="text-black mb-0">{discription}</h6>
    </div>
    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
      <button className="btn btn-link px-2"
        onClick={this.decreaseQuantity}>
        <i className="fas fa-minus"></i>
      </button>

      <input id="form1" min="0" name="quantity" value= {qty} type="number" 
        className="form-control form-control-sm" />

      <button className="btn btn-link px-2"
        onClick={this.increaseQuantity}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      <h6 className="mb-0">€ {price}</h6>
    </div>
    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
      <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
    </div>
  </div>
);


}


}



export default CartItem;