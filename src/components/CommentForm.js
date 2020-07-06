import React,{Component} from 'react';
import {Button,Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label,Row,Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


class CommentForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            isModalOpen:false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        })
    }


    handleSubmit(values){
        alert(values);
        // this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }


    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
    
        return(
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="ratings" md={12}>Ratings</Label>
                                <Col md={12}>
                                    <Control.select model=".ratings" name="ratings"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" name="comment"
                                        className="form-control" rows='6' />
                                        
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={12}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>
                </Modal>
                <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Submit Comment</Button>
            </React.Fragment>
        );
    }
}

export default CommentForm;