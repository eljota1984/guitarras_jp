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

// import React from 'react';
// import { Card } from 'react-bootstrap';

// const ItemDatailContainer = ({ product }) => {
//     return (
//         <div
//             style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 width: "100vw",
//                 justifyContent: "space-around",
//             }}
//         >
//             <Card
//                 key={product.id}
//                 style={{ width: "18rem", margin: 20 }}>
//                 <Card.Img variant="top" src={product.thumbnail} />
//                 <Card.Body>
//                     <Card.Title>{product.title}</Card.Title>
//                     <Card.Text>{product.description}</Card.Text>
//                 </Card.Body>
//             </Card>
//         </div>
//     );
// }

// export default ItemDatailContainer;