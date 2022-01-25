import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import CarouselItem from "reactstrap/lib/CarouselItem";

function RenderCard({ item }) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardText>{item.name}</CardText>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.campsite} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    );
}
