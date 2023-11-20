import ItemDatailContainer from '../Components/ItemDatailContainer/ItemDatailContainer'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Item = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams(); // Call the function to get the object

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => console.log(error));
    }, [id])

    return <ItemDatailContainer product={product} />
};
export default Item;


