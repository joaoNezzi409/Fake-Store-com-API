import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Home, {
  Product,
} from './src/screens/Home';

import Details from './src/screens/Details';

import Cart, {
  CartProduct,
} from './src/screens/Cart';

type Screen =
  | 'home'
  | 'details'
  | 'cart';

export default function App() {
  const [screen, setScreen] =
    useState<Screen>('home');

  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  const [cartItems, setCartItems] =
    useState<CartProduct[]>([]);

  function openProduct(product: Product) {
    setSelectedProduct(product);
    setScreen('details');
  }

  function openCart() {
    setScreen('cart');
  }

  function goHome() {
    setScreen('home');
  }

  function addToCart(
    product: Product,
    quantity: number
  ) {
    setCartItems((currentItems) => {
      const existingItem =
        currentItems.find(
          (item) => item.id === product.id
        );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity,
        },
      ];
    });
  }

  function increaseQuantity(id: number) {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  }

  function decreaseQuantity(id: number) {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  }

  function removeFromCart(id: number) {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== id
      )
    );
  }

  const cartItemsCount =
    cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );

  return (
    <SafeAreaProvider>
      {screen === 'home' && (
        <Home
          onOpenProduct={openProduct}
          onOpenCart={openCart}
          cartItemsCount={cartItemsCount}
        />
      )}

      {screen === 'details' &&
        selectedProduct && (
          <Details
            product={selectedProduct}
            onBack={goHome}
            onAddToCart={addToCart}
          />
        )}

      {screen === 'cart' && (
        <Cart
          items={cartItems}
          onBack={goHome}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onRemove={removeFromCart}
        />
      )}
    </SafeAreaProvider>
  );
}
