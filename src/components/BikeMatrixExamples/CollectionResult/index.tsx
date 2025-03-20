import React from "react";
import s from "./styles.module.css";

export const CollectionResult = () => {
  const results = [
    {
      id: "123", // Unique id for the product
      skus: ["8022530035613"], // Array of SKUs for the product
      title: "Disc Resin Brake Pad 1-Pair",
      description: "Description about the product",
      price: "$50.00",
      image: "https://via.placeholder.com/150",
      url: "/product"
    }
  ];

  return (
    <>
      {results.map((product, key) => {
        return (
          <div className={s.card} key={key}>
            {/* @ts-ignore */}
            <bikematrix-collectionresult
              data-product-id={product.id}
              data-product-skus={product.skus.join(",")}
            >
              {/* @ts-ignore */}
            </bikematrix-collectionresult>
          </div>
        );
      })}
    </>
  );
};
