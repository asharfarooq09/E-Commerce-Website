import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offer from "../Components/Offer/Offer";
import NewCollection from "../Components/Newcollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? <Skeleton height={400} width="100%" /> : <Hero />}
      {isLoading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} height={200} />
            ))}
        </div>
      ) : (
        <Popular />
      )}

      {isLoading ? <Skeleton height={250} width="100%" /> : <Offer />}

      {isLoading ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} height={300} />
            ))}
        </div>
      ) : (
        <NewCollection />
      )}

      {isLoading ? <Skeleton height={150} width="100%" /> : <NewsLetter />}
    </div>
  );
};

export default Shop;
