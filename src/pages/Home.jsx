import React from "react";
import { useAllProducts } from '../hooks/useProducts'
import { ItemListContainer} from "../Components/ItemListContainer/ItemListContainer";
import { LoaderComponent } from "../Components/LoaderComponent/LoaderComponent";

export const Home = () => {
  const { products, loading, error } = useAllProducts(15);

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>Hubo un error</div>
      ) : (
        <ItemListContainer products={products} />
      )}
    </div>
  );
};