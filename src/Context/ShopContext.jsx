import { createContext, useEffect, useState } from "react";
import all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartadditem, setcartadditem] = useState(() => {
    const saveCartItem = localStorage.getItem("cartItems");
    return saveCartItem ? JSON.parse(saveCartItem) : [];
  });

  const [action, setAction] = useState("Login");
  const [searchQuery, setSearchQuery] = useState("");

  const [login, setLogin] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartadditem));
  }, [cartadditem]);

  const AddtoCart = (product) => {
    setcartadditem((prev) => {
      const updatedCart = [...prev , product]
      localStorage.setItem("cartItems",JSON.stringify(updatedCart))
      return updatedCart
    });
  };

  const RemovetoCart = (productID) => {
    setcartadditem((prev) => prev.filter((item) => item.id !== productID));
  };

  const replaceCart = (cart) => {
    setcartadditem([...cart]);
  };

  const getTotalAmount = () => {
    return cartadditem.reduce(
      (total, item) => total + item.new_price * (item.quantity || 1),
      0
    );
  };

  const ContextValue = {
    action,
    login,
    setLogin,
    setAction,
    getTotalAmount,
    all_product,
    cartadditem,
    setcartadditem,
    AddtoCart,
    RemovetoCart,
    replaceCart,
    searchQuery,
    setSearchQuery,
  };
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
