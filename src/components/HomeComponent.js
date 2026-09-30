import React from 'react';
import { Link } from 'react-router-dom';


function FeaturedDish({ dish }) {

    if (!dish) {
        return null;
    }

    return (

        <Link to={`/menu/${dish._id}`} className="featured-dish-card">

            <div className="featured-dish-image">

                <img src={dish.image} alt={dish.name}/>

                {dish.label && (
                    <span className="menu-label">{dish.label}</span>
                )}

            </div>


            <div className="featured-dish-content">

                <div className="featured-dish-heading">

                    <h3>{dish.name}</h3>

                    <span>R{dish.price}</span>

                </div>

                <p>{dish.description}</p>

                <span className="view-dish"> Discover dish →</span>

            </div>

        </Link>

    );

}

function Home(props) {

    const dishes = props.dishes || [];

    const featuredDishes = dishes.filter(dish => dish.featured).slice(0, 3);


    return (

        <div className="home-page">


            <section className="home-hero">

                <div className="container">

                    <div className="home-hero-content">

                        <span className="section-label">
                            CONFUSION · MODERN AFRICAN DINING
                        </span>

                        <h1>
                            African food.
                            <br />
                            Made differently.
                        </h1>

                        <p>
                            A contemporary restaurant inspired by
                            the flavours, ingredients and stories
                            of Southern Africa.
                        </p>


                        <div className="home-hero-buttons">

                            <Link to="/menu" className="btn confusion-btn-primary">
                                Explore the menu
                            </Link>

                            <Link to="/aboutus" className="btn confusion-btn-outline">
                                Our story
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            <section className="home-intro">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-12 col-md-5">

                            <span className="section-label">The Confusion kitchen</span>

                            <h2>
                                Familiar flavours.
                                <br />
                                Unexpected ideas.
                            </h2>

                        </div>


                        <div className="col-12 col-md-6 offset-md-1">

                            <p>
                                Confusion is about taking the food
                                we know and love and looking at it
                                from a different angle.
                            </p>

                            <p>
                                From the fire of the braai to the
                                warmth of Cape Malay spices, our
                                kitchen brings together tradition,
                                creativity and modern technique.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="home-featured">

                <div className="container">

                    <div className="home-section-heading">

                        <div>

                            <span className="section-label">
                                From our kitchen
                            </span>

                            <h2>A few things we're cooking.</h2>

                        </div>


                        <Link  to="/menu"  className="text-link">
                            View full menu →
                        </Link>

                    </div>


                    <div className="row">

                        {featuredDishes.map(dish => (

                            <div className="col-12 col-md-4" key={dish.id}>

                                <FeaturedDish dish={dish}/>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            <section className="home-experience">

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-12 col-md-6">

                            <div className="experience-block">

                                <span className="experience-number">
                                    01
                                </span>

                                <h2>Fire</h2>

                                <p>
                                    Cooking over fire is at the
                                    heart of our kitchen. Smoke,
                                    char and slow cooking bring
                                    depth to familiar ingredients.
                                </p>

                            </div>


                            <div className="experience-block">

                                <span className="experience-number">
                                    02
                                </span>

                                <h2>Spice</h2>

                                <p>
                                    From peri-peri to Cape Malay
                                    spice, we use bold flavours
                                    without losing the character
                                    of the ingredients.
                                </p>

                            </div>


                            <div className="experience-block">

                                <span className="experience-number">
                                    03
                                </span>

                                <h2>Heritage</h2>

                                <p>
                                    Our food takes inspiration from
                                    Southern African cooking and
                                    gives traditional ideas a new
                                    place at the table.
                                </p>

                            </div>

                        </div>


                        <div className="col-12 col-md-5 offset-md-1">

                            <div className="experience-quote">

                                <span>OUR PHILOSOPHY</span>

                                <blockquote>
                                    "Good food doesn't have
                                    to choose between where
                                    it came from and where
                                    it's going."
                                </blockquote>

                                <small>
                                    — The Confusion Kitchen
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="home-cta">

                <div className="container">

                    <div className="home-cta-content">

                        <span className="section-label">Your table is waiting</span>

                        <h2>Come hungry.</h2>

                        <p>
                            Explore the menu and discover
                            something you didn't expect.
                        </p>

                        <Link to="/menu" className="btn confusion-btn-primary">
                            Explore the menu
                        </Link>

                    </div>

                </div>

            </section>


        </div>

    );

}


export default Home;

