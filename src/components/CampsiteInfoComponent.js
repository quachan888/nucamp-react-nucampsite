import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
    renderCampsite(campsite) {
        if (campsite) {
            return (
                <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        return <div></div>;
    }

    renderComments(comments) {
        console.log(this.props.campsite.comments);

        if (this.props.campsite.comments) {
            return (
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.props.campsite.comments.map((comment) => (
                        <p>
                            {comment.text}
                            <br />
                            -- {comment.author}, {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    ))}
                </div>
            );
        }
        return <div></div>;
    }

    render() {
        if (this.props.campsite === null) {
            return <div></div>;
        }
        return (
            <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite)}
            </div>
        );
    }
}

export default CampsiteInfo;
