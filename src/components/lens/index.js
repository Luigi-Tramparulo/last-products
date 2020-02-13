import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'
import './lens.scss'
import SubHeader from '../subheader'

const Lens = (props) => {

    const { product } = props

    const mapProducts = product.map((product, index) => {
        return (

            <Card key={index}>
                <CardImg heigth="100%" width="100%" src={`./assets/${product.name.toLowerCase()}.jpeg`} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{`RayBan ${product.name}`}</CardTitle>
                    <CardSubtitle>{product.sku}</CardSubtitle>
                    <CardText>{`Qty: ${product.qty}`}</CardText>
                    <CardText>{`Price: ${product.price}\u20AC`}</CardText>
                    <Button className="button-style">Add</Button>
                </CardBody>
            </Card>
        )
    })
    return (
        <div className="lens-view">
            <SubHeader titleAvaible="LAST PRODUCT AVAILABLE" productAvaible={`${product.length} product available`} />
            <div className="product-list">
                {mapProducts}
            </div>
        </div>
    )
};

export default Lens;
