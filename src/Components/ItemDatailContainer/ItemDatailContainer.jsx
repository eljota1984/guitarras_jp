import React from 'react';
import { Card } from 'react-bootstrap';
import '../ItemDatailContainer/ItemDatailContainer.css'

const ItemDatailContainer = ({ product }) => {
    return (
        <div className="item-detail-container">
            <Card key={product.id} className="item-card">
                <Card.Img variant="top" src={product.thumbnail} />
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
export default ItemDatailContainer;

