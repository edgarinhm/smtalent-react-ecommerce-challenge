import { create } from "zustand";
import { ProductModel } from "../models/product-model";

type ProductsStorageModel = {
  products: ProductModel[];
  setProductsState: (value: ProductModel[]) => void;
  reset: () => void;
  setState: (state: ProductsStorageModel) => void;
};

const useProductsStorage = create<ProductsStorageModel>((set) => {
  return {
    products: [],
    setProductsState: (value: ProductModel[]) =>
      set(() => ({ products: value })),
    reset: () => set(() => ({ products: [] })),
    setState: (state) => set(state),
  };
});

export default useProductsStorage;
