import React from "react";
import { Bikon } from "./Bikon";
import { Banner } from "./Banner";
import { CompatibleList } from "./CompatibleList";
import { CollectionResult } from "./CollectionResult";
import { BikeMatrixCore } from "@site/src/bm-core";
import s from "./styles.module.css";
import { ProductResult } from "./ProductResult";

export const BikeMatrixExamples = () => {
  return (
    <div className={s.exampleWrapper}>
      <Bikon />
      <Banner />
      <CompatibleList />
      <ProductResult />
      <CollectionResult />
      {/* @ts-ignore */}
      <bikematrix-selector></bikematrix-selector>
      <BikeMatrixCore />
      <script type="application/json" data-bikematrix-config>
        {JSON.stringify({
          logLevel: "verbose",
          apiUrl:
            "https://bikematrix-20230522-1515-dev-apim.azure-api.net/proxy/v3/",
          apiKey: "",
          pageType: "collection",
          collections: [
            {
              title: "Brake pads",
              handle: "brake-pads",
              url: "/collections/brake-pads"
            }
          ],
          categories: [
            {
              title: "Brake Pads",
              text_id: "category_brakepads",
              collection: "Brake pads"
            }
          ]
        })}
      </script>
    </div>
  );
};
