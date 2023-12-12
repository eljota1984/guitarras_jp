// import React from 'react'
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'

// const Home = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https:dummyjson.com/products?limit=10")
//       .then((res) => {
//         setProducts(res.data.products);
//       })
//       .catch((error) => console.log(error));
//   }, [])
//   return (
//     <ItemListContainer products={products} />
//   )
// }
// export default Home;

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