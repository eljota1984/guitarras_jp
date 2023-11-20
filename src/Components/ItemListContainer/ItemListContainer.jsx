import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../ItemListContainer/ItemListContainer.css';

const ItemListContainer = ({ products }) => {
    return (
        <div className="item-list-container">
            {products.map((product) => {
                return (
                    <Card key={product.id} className="card-container">
                        <Link to={`/item/${product.id}`}>
                            <Card.Img variant="top" src={product.thumbnail} />
                        </Link>
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
};
export default ItemListContainer;
