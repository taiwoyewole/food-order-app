import React, { useState } from 'react';


const Cart = React.lazy(() => import('./components/Cart/Cart'))
const CartProvider = React.lazy(() => import('./store/CartProvider'))
const Header = React.lazy(() => import('./components/Layout/Header'))
const Meals = React.lazy(() => import('./components/Meals/Meals'))

function App()
{
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true);
  }

   const hideCartHandler = () =>  {
    setCartIsShown(false);
  }
  return (
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
  );
}

export default App;
