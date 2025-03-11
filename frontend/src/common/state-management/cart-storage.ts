import { create } from "zustand";
import { ProductModel } from "../models/product-model";

type CartStorageModel = {
  products: ProductModel[];
  addProduct: (value: ProductModel) => void;
  removeProduct: (value: number) => void;
  getCartCount: () => number;
  reset: () => void;
  setState: (state: CartStorageModel) => void;
};

const useCartStorage = create<CartStorageModel>((set, get) => {
  return {
    products: [],
    addProduct: (product: ProductModel) =>
      set((state) => ({ products: [...state.products, product] })),
    removeProduct: (productId: number) =>
      set((state) => ({
        products: state.products.filter((product) => product.id !== productId),
      })),
    getCartCount: () => get().products.length,
    reset: () => set(() => ({ products: [] })),
    setState: (state) => set(state),
  };
});

export default useCartStorage;
