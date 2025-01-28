import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/Description Box/DescriptionBox";
import RelatedProduct from "../Components/Related Product/RelatedProduct";

const Product = () => {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProduct />
    </>
  );
};

export default Product;
