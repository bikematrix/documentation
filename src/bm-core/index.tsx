import React, { useEffect, useRef } from "react";
import BikeMatrix from "@bikematrix/web-components";

export const BikeMatrixCore = () => {
  const initialized = useRef(false);

  // Initialize BikeMatrix on mount & destroy on unmount
  useEffect(() => {
    BikeMatrix.init();

    return () => {
      BikeMatrix.destroy();
    };
  }, []);

  // Reload BikeMatrix Web Components
  useEffect(() => {
    // Dont reload on first render
    // if (!initialized.current) {
    //   initialized.current = true;
    //   return;
    // }

    // Simple check for BikeMatrix availability and initialization
    if (!BikeMatrix?.isInitialized()) return;

    // Reload BikeMatrix Web Components
    BikeMatrix.reload();
  }, []);

  return null;
};
