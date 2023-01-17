import './App.css';
import Cart from './Cart';
// IN REACT DATA FLOW ONLY IN ONE DIRECTION TO GET THE DATA MOVE THE STATE TO ONE LEVEL UP
// IN ORDER GET DATA FROM CHILDREN TO ONE LEVEL UP THEN MOVE THE STATE TO PARENT


function App() {
  return (
    <Cart/>
  );
}

export default App;
