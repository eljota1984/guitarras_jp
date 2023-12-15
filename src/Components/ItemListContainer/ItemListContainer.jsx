import Card from "react-bootstrap/Card";
import React from "react";
import { Link, useParams } from "react-router-dom";

export function ItemListContainer({ products }) {
    // const [name, setName] = React.useState();
    // const [lastName, setLastName] = React.useState("");
    // const [age, setAge] = React.useState(0);
    // const handleName = (e) => {
    //   setName(e.target.value);
    // };
    // const handleLastName = (e) => {
    //   setLastName(e.target.value);
    // };
    // const handleAge = (e) => {
    //   setAge(e.target.value);
    // };
    // const handlePseudoSubmit = () => {
    //   console.log(name, lastName, age);
    // };
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                width: "100vw",
                justifyContent: "space-around",
            }}
        >
            {products.map((product) => {
                return (
                    <Card key={product.id} style={{ width: "18rem", margin: 20 }}>
                        <Link to={`/item/${product.id}`}>
                            <Card>
                                <Card.Img variant="top" src={product.thumbnail} />
                            </Card>
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
}