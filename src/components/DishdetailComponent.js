import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardText,
    CardTitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import API_BASE_URL from '../config';


class CommentForm extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isModalOpen: false,
            author: '',
            comment: '',
            rating: 5
        };

    }


    toggleModal = () => {

        this.setState({isModalOpen: !this.state.isModalOpen});

    };


    handleSubmit = (event) => {

        event.preventDefault();

        this.props.addComment({
            dishId: this.props.dishId,
            rating: Number(this.state.rating),
            author: this.state.author,
            comment: this.state.comment
        });

        this.toggleModal();

        this.setState({
            author: '',
            comment: '',
            rating: 5
        });

    };


    render() {

        return (

            <div>

                <Button color="primary" onClick={this.toggleModal}>
                    Add Comment
                </Button>


                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >

                    <ModalHeader toggle={this.toggleModal}>
                        Add Comment
                    </ModalHeader>


                    <ModalBody>

                        <Form onSubmit={this.handleSubmit}>

                            <FormGroup>

                                <Label for="rating">
                                    Rating
                                </Label>

                                <Input
                                    type="select"
                                    id="rating"
                                    value={this.state.rating}
                                    onChange={(event) =>
                                        this.setState({
                                            rating: event.target.value
                                        })
                                    }
                                >

                                    {[1, 2, 3, 4, 5].map(rating => (

                                        <option
                                            key={rating}
                                            value={rating}
                                        >
                                            {rating}
                                        </option>

                                    ))}

                                </Input>

                            </FormGroup>


                            <FormGroup>

                                <Label for="author">Your Name</Label>

                                <Input
                                    type="text"
                                    id="author"
                                    value={this.state.author}
                                    onChange={(event) =>
                                        this.setState({
                                            author: event.target.value
                                        })
                                    }
                                    required
                                />

                            </FormGroup>


                            <FormGroup>

                                <Label for="comment">Comment</Label>

                                <Input
                                    type="textarea"
                                    id="comment"
                                    value={this.state.comment}
                                    onChange={(event) =>
                                        this.setState({
                                            comment: event.target.value
                                        })
                                    }
                                    required
                                />

                            </FormGroup>


                            <Button type="submit" color="primary">
                                Submit
                            </Button>

                        </Form>

                    </ModalBody>

                </Modal>

            </div>

        );

    }

}

class RenderComments extends Component {

    render() {

        const {
            comments,
            addComment,
            dishId
        } = this.props;


        return (

            <div className="col-12 col-md-5 m-1">

                <h4>Comments</h4>


                {comments.length === 0 ? (

                    <p className="text-muted">
                        No comments yet. Be the first to share your thoughts.
                    </p>

                ) : (

                    <ul className="list-unstyled">

                        {comments.map(comment => (

                            <li key={comment._id} className="mb-3">

                                <p>{comment.comment}</p>

                                <p className="text-muted">

                                    — {comment.author},{' '}

                                    {new Intl.DateTimeFormat('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: '2-digit'
                                    }).format(
                                        new Date(comment.createdAt)
                                    )}

                                </p>

                            </li>

                        ))}

                    </ul>

                )}


                <CommentForm dishId={dishId} addComment={addComment} />

            </div>

        );

    }

}

class RenderDish extends Component {

    render() {

        const { dish } = this.props;

        if (!dish) {
            return null;
        }

        return (

            <div className="col-12 col-md-5 m-1">

                <Card>

                    <CardImg width="100%" src={dish.image} alt={dish.name}/>


                    <CardBody>

                        <CardTitle tag="h5">{dish.name}</CardTitle>


                        <CardText>{dish.description}</CardText>


                        <div className="dish-detail-price">
                            R{dish.price}
                        </div>

                    </CardBody>

                </Card>

            </div>

        );

    }

}

class DishDetail extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dish: null,
            comments: [],
            loading: true,
            error: null
        };

    }

    getDishId() {

        const path = window.location.pathname;

        return path.split('/').pop();

    }

    componentDidMount() {

        const dishId = this.getDishId();


        Promise.all([

            fetch(`${API_BASE_URL}/api/dishes/${dishId}`).then(response => {

                if (!response.ok) {
                    throw new Error('Dish not found');
                }

                return response.json();

            }),


           fetch(`${API_BASE_URL}/api/comments/dish/${dishId}`).then(response => {

                if (!response.ok) {
                    throw new Error('Unable to load comments');
                }

                return response.json();

            })

        ])

        .then(([dish, comments]) => {

            this.setState({
                dish: dish,
                comments: comments,
                loading: false
            });

        })

        .catch(error => {

            console.error(error);

            this.setState({
                loading: false,
                error: error.message
            });

        });

    }

    addComment = (comment) => {

        fetch(`${API_BASE_URL}/api/comments`, {


            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(comment)

        })

        .then(response => {

            if (!response.ok) {
                throw new Error('Unable to save comment');
            }

            return response.json();

        })

        .then(savedComment => {

            this.setState({

                comments: [
                    ...this.state.comments,
                    savedComment
                ]

            });

        })

        .catch(error => {

            console.error('Comment error:', error);

            alert('Unable to save your comment. Please try again.');

        });

    };

    render() {

        const {
            dish,
            comments,
            loading,
            error
        } = this.state;


        if (loading) {

            return (

                <div className="container menu-loading">

                    <p>Loading dish...</p>

                </div>

            );

        }


        if (error || !dish) {

            return (

                <div className="container menu-loading">

                    <h3> Dish not found</h3>

                    <p>We couldn't find that dish.</p>

                </div>

            );

        }


        return (

            <div className="container">

                <div className="row">

                    <RenderDish dish={dish}/>


                    <RenderComments
                        comments={comments}
                        addComment={this.addComment}
                        dishId={dish._id}
                    />

                </div>

            </div>

        );

    }

}


export default DishDetail;




