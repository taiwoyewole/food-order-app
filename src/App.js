import { useState } from 'react';
import Cart from './componenrs/Cart/Cart';
import Header from './componenrs/Layout/Header';
import Meals from './componenrs/Meals/Meals';
import CartProvider from './store/CartProvider';

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
