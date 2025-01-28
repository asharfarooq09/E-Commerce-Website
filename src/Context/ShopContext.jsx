import { createContext, useState } from "react";
import all_product from "../Components/assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartadditem, setcardadditem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [action, setAction] = useState("Login");
  const [login, setLogin] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const AddtoCart = (product) => {
    setcardadditem((prev) => [...prev, product]);
  };

  const RemovetoCart = (productID) => {
    setcardadditem((prev) => prev.filter((item) => item.id !== productID));
  };

  const replaceCart = (cart) => {
    setcardadditem([...cart]);
  };

  const getTotalAmount = () => {
    return cartadditem.reduce(
      (total, item) => total + item.new_price * (item.quantity || 1),
      0
    );
  };

  const ContextValue = {
    action,
    isLoading,
    setIsLoading,
    login,
    setLogin,
    setAction,
    getTotalAmount,
    all_product,
    cartadditem,
    AddtoCart,
    RemovetoCart,
    replaceCart,
  };
  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
