import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  // cart setup

  return (
    <main>
      <Provider store={store}>
        <Navbar />
        {/* <CartContainer cart={cartItems} /> */}
        <CartContainer />
      </Provider>
    </main>
  );
}

export default App;
