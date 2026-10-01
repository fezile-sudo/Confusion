import React, { Component } from 'react';
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import API_BASE_URL from '../config';



function RenderMenuItem({ dish }) {

    return (

        <Card className="confusion-menu-card">

            <Link to={`/menu/${dish._id}`} className="menu-card-link">

                <div className="menu-image-wrapper">

                    <CardImg width="100%" src={dish.image} alt={dish.name}/>

                    {dish.label && (
                        <span className="menu-label">
                            {dish.label}
                        </span>
                    )}

                </div>

                <CardBody>

                    <div className="menu-card-heading">

                        <CardTitle tag="h4">
                            {dish.name}
                        </CardTitle>

                        <span className="menu-price">
                            R{dish.price}
                        </span>

                    </div>

                    <CardText>
                        {dish.description}
                    </CardText>

                    <span className="view-dish">
                        View dish →
                    </span>

                </CardBody>

            </Link>

        </Card>

    );
}

function MenuSection({ title, description, dishes }) {

    if (!dishes || dishes.length === 0) {
        return null;
    }

    return (

        <section className="menu-section">

            <div className="menu-section-heading">

                <div>

                    <span className="section-label">
                        {title}
                    </span>

                    <h2>{description}</h2>

                </div>

            </div>

            <div className="row">

                {dishes.map(dish => (

                    <div className="col-12 col-md-6" key={dish._id}>

                        <RenderMenuItem dish={dish} />

                    </div>

                ))}

            </div>

        </section>

    );
}

class Menu extends Component {

    constructor(props) {

        super(props);

        this.state = {
            dishes: [],
            loading: true,
            error: null
        };

    }

    componentDidMount() {

        fetch(`${API_BASE_URL}/api/dishes`)


            .then(response => {

                if (!response.ok) {
                    throw new Error('Unable to load menu');
                }

                return response.json();

            })

            .then(dishes => {

                this.setState({
                    dishes: dishes,
                    loading: false
                });

            })

            .catch(error => {

                console.error('Menu error:', error);

                this.setState({
                    loading: false,
                    error: error.message
                });

            });

    }

    render() {

        const {
            dishes,
            loading,
            error
        } = this.state;


        if (loading) {

            return (

                <div className="container menu-loading">

                    <p>Loading our menu...</p>

                </div>

            );

        }


        if (error) {

            return (

                <div className="container menu-loading">

                    <h3>Something went wrong</h3>

                    <p>
                        We couldn't load the menu.
                        Please try again.
                    </p>

                </div>

            );

        }


        const starters = dishes.filter(dish => dish.category === 'starter');


        const mains = dishes.filter(dish => dish.category === 'main');


        const sides = dishes.filter(dish => dish.category === 'side');


        const desserts = dishes.filter(dish => dish.category === 'dessert');


        return (

            <div className="menu-page">

                <section className="menu-hero">

                    <div className="container">

                        <div className="menu-hero-content">

                            <span className="section-label">
                                The Confusion kitchen
                            </span>

                            <h1>Our Menu</h1>

                            <p>
                                African flavours, familiar ingredients
                                and a little bit of curiosity.
                                Explore the dishes coming out of
                                our kitchen.
                            </p>

                        </div>

                    </div>

                </section>

                <main className="menu-content">

                    <div className="container">


                        <MenuSection
                            title="01 — Starters"
                            description="Start with something unexpected."
                            dishes={starters}
                        />


                        <MenuSection
                            title="02 — Mains"
                            description="The heart of the table."
                            dishes={mains}
                        />


                        <MenuSection
                            title="03 — Sides"
                            description="Made to share."
                            dishes={sides}
                        />


                        <MenuSection
                            title="04 — Desserts"
                            description="Something sweet to finish."
                            dishes={desserts}
                        />


                    </div>

                </main>

                <section className="menu-bottom">

                    <div className="container">

                        <div className="menu-bottom-content">

                            <span className="section-label">
                                Good food takes time
                            </span>

                            <h2> Come hungry.</h2>

                            <p>
                                Our menu changes with the seasons,
                                the ingredients available to us,
                                and occasionally, whatever idea
                                our chef can't stop thinking about.
                            </p>

                        </div>

                    </div>

                </section>


            </div>

        );

    }

}


export default Menu;


