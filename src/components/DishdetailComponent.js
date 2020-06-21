import React, {Component} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
class Dishdetail extends Component{
    constructor(props){
        super(props);

    }

    renderComments(comments){
        if(comments!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul class = "list-unstyled">
                    {comments.map(comment=>{
                        return(
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author},{comment.date}</p>
                            </li>
                            
                        );
                    })}
                    </ul>
                </div>
            )
        }else{
            return(
                <div></div>
            );
        }
        
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    {this.renderComments(dish.comments)}
                </div>
            );
        else
            return(
                <div></div>
            );
    }
    render(){
        return(
                this.renderDish(this.props.selectedDish)
        );
    }
}

export default Dishdetail;