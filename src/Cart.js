import React from 'react';

import CartItem from './CartItem';
class Cart extends React.Component{

    constructor(){
        super();
        
        this.state = {
        
        products : [
            {
                price : 99,
                title : "Shirt",
                discription : 'Cotton T-Shirt',
                qty : 1,
                id :1
            },
            {
                price : 999,
                title : "Mobile",
                discription : 'Redmi Note 9',
                qty : 6,
                id :2
            },
            {
                price : 9999,
                title : "Laptop",
                discription : 'Asus Vivobook',
                qty : 1,
                id : 3
            }
        ]
        
        }
        
        }


        increaseQuantity= (item)=>{
         const {products} = this.state;
         console.log(item);

         const index = products.indexOf(item);
         products[index].qty+=1;
         this.setState({
          products: products,
         })
        
        }
        
        decreaseQuantity= (item)=>{
          console.log(item);
        // first form 
          // this.setState({
          //   qty : this.state.qty+1,
          // })
        
          //second form (you can pass the call back functioin)
          const {products} = this.state;
          console.log(item);
         
          const index = products.indexOf(item);
          if(products[index].qty<=0){
            return;
          }
          products[index].qty-=1;
          this.setState({
           products: products,
          })
        
        }


        onDeletequantity=(id)=>{
          const {products} = this.state;
          const items = products.filter((product)=>product.id!==id);

          this.setState({
            products : items
          })

        }
        getQuantity=()=>{
          var count =0;
          const {products} =this.state;
          products.forEach((item)=> count+=item.qty);

          return count
        }

        getTotalPrice=()=>{

          var price=0;
          const {products} = this.state;
          products.forEach((item)=> price = price + item.qty*item.price);
          return price
        }

render(){
 const {products} = this.state;
 console.log(products)
    return(

        <section className="h-100 h-custom" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card card-registration card-registration-2" >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                          <h6 className="mb-0 text-muted">{this.getQuantity()} items </h6>
                        </div>
                      {/* <CartItem qty ={1} price ={99} title ={"watch"}/> */}
                      {/* we are passig attributes as props every instance have property props */}
                     
                      
        {
            products.map((item)=>{
                return(
                    <CartItem product ={item}
                     key={item.id}
                    onIncreasequantity ={this.increaseQuantity}
                    onDecreasequantity = {this.decreaseQuantity}
                    onDeletequantity = {this.onDeletequantity}
                    // jsx = {<h1>TEST</h1>}
                    // componenet = {<CartItem/>}
                     />
                    //  you can pass many attributes in the props 
                )
              
            })
        }
                        <div className="pt-5">
                          <h6 className="mb-0"><a href="#!" className="text-body"><i
                                className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</a></h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4"/>
      
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text-uppercase">items {this.getQuantity()}</h5>
                          <h5>€ {this.getTotalPrice()}</h5>
                        </div>
      
                        <h5 className="text-uppercase mb-3">Shipping</h5>
      
                        <div className="mb-4 pb-2">
                          <select className="select">
                            <option value="1">Standard-Delivery- €5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>
      
                        <h5 className="text-uppercase mb-3">Give code</h5>
      
                        <div className="mb-5">
                          <div className="form-outline">
                            <input type="text" id="form3Examplea2" className="form-control form-control-lg" />
                            <label className="form-label" for="form3Examplea2">Enter your code</label>
                          </div>
                        </div>
      
                        <hr className="my-4"/>
      
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>€ {this.getTotalPrice()}</h5>
                        </div>
      
                        <button type="button" className="btn btn-dark btn-block btn-lg"
                          >Register</button>
      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    )


}


}


export default Cart;