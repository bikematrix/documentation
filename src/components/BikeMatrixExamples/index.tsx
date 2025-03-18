import React from "react";
import s from "./styles.module.css";
import { Bikon } from "./Bikon";
import { Banner } from "./Banner";
import { CompatibleList } from "./CompatibleList";
import { CollectionResult } from "./CollectionResult";
import { BikeMatrixCore } from "@site/src/bm-core";

export const BikeMatrixExamples = () => {
  return (
    <div className={s.bikeMatrixExamples}>
      Hello there
      <Bikon />
      <Banner />
      <CompatibleList />
      <CollectionResult />
      <bikematrix-selector></bikematrix-selector>
      <BikeMatrixCore />
      <script type="application/json" data-bikematrix-config>
        {`
          {
            "logLevel": "verbose",
            "apiUrl": "https://bikematrix-20230522-1515-dev-apim.azure-api.net/proxy/v3/",
            "apiKey": "",
            "pageType": "collection",
            "collections": [
              {
                "title": "Brake pads",
                "handle": "brake-pads",
                "url": "/collections/brake-pads"
              },
              { 
                "title": "Tyres & Tubes",
                "handle": "tyres-tubes",
                "url": "/collections/tyres-tubes"
              },
              {
                "title": "Rotors",
                "handle": "rotors-1",
                "url": "/collections/rotors-1"
              },
              {
                "title": "Wheels & Rims",
                "handle": "wheels-rims",
                "url": "/collections/wheels-rims"
              }
            ],
            "categories": [
              {
                "title": "Brake Pads",
                "text_id": "category_brakepads",
                "collection": "Brake pads"
              }
            ]
          }`}
      </script>
    </div>
  );
};
