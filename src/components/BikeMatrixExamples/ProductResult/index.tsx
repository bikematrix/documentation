import React from "react";
import s from "./styles.module.css";

export const ProductResult = () => {
  return (
    <>
      {/* @ts-ignore */}
      <bikematrix-productresult data-sku="8022530035613" />
      <script type="application/json" data-bikematrix-config>
        {JSON.stringify({ productCollections: ["brake-pads"] })}
      </script>
    </>
  );
};
