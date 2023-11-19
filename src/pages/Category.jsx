import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemListContainer from '../Components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom';

const Category = () => {
    const  [products, setProducts] = useState([]);

    const {categoryId} = useParams();

    useEffect(()=>{
     axios
     .get(`https://dummyjson.com/products/category/${categoryId}`)
     .then((res) => {
       setProducts(res.data.products);
     })
     .catch((error) => console.log(error));
    }, [categoryId])
    
    return <ItemListContainer products={products} />;

};

export default Category;