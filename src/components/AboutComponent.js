import React, { Component } from "react";
import {
    Breadcrumb,
    BreadcrumbItem,
    Card,
    CardBody,
    CardHeader,
    Media
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderLeader({ leader }) {

    return (

        <div className="team-member">

            <Media>

                <Media left middle className="team-member-image-wrapper">

                    <Media
                        object
                        className="team-member-image"
                        src={leader.image}
                        alt={leader.name}
                    />

                </Media>


                <Media body className="team-member-content">

                    <span className="team-member-role">{leader.designation}</span>

                    <Media heading>{leader.name}</Media>

                    <p>{leader.description}</p>

                </Media>

            </Media>

        </div>

    );

}


/* =========================================
   ABOUT PAGE
========================================= */

class About extends Component {

    constructor(props) {

        super(props);

        this.state = {
            leaders: [],
            loading: true,
            error: null
        };

    }


    /* =========================================
       LOAD TEAM FROM API
    ========================================== */

    componentDidMount() {

        fetch('http://localhost:5000/api/team')

            .then(response => {

                if (!response.ok) {
                    throw new Error('Unable to load team members');
                }

                return response.json();

            })

            .then(leaders => {

                this.setState({
                    leaders: leaders,
                    loading: false
                });

            })

            .catch(error => {

                console.error('Team error:', error);

                this.setState({
                    loading: false,
                    error: error.message
                });

            });

    }


    /* =========================================
       RENDER
    ========================================== */

    render() {

        const {
            leaders,
            loading,
            error
        } = this.state;


        return (

            <div className="about-page">

                {/* =========================================
                    PAGE HEADER
                ========================================== */}

                <div className="container">

                    <div className="row">

                        <Breadcrumb>

                            <BreadcrumbItem>
                                <Link to="/home">
                                    Home
                                </Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem active>
                                Our Story
                            </BreadcrumbItem>

                        </Breadcrumb>


                        <div className="col-12">

                            <span className="section-label">
                                CONFUSION
                            </span>

                            <h3> Our Story</h3>

                            <hr />

                        </div>

                    </div>

                </div>


                {/* =========================================
                    INTRODUCTION
                ========================================== */}

                <section className="about-intro">

                    <div className="container">

                        <div className="row align-items-center">

                            <div className="col-12 col-md-7">

                                <span className="section-label">
                                    Where tradition meets imagination
                                </span>

                                <h1>
                                    We don't want to
                                    <br />
                                    forget where food comes from.
                                </h1>

                            </div>


                            <div className="col-12 col-md-5">

                                <p>
                                    Confusion is a fictional modern African
                                    dining experience inspired by the people,
                                    ingredients and food traditions of Southern
                                    Africa.
                                </p>

                                <p>
                                    We take familiar flavours and give them
                                    room to evolve — without losing the stories
                                    behind them.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="about-history">

                    <div className="container">

                        <div className="row">

                            <div className="col-12 col-md-7">

                                <span className="section-label">
                                    Our beginning
                                </span>

                                <h2>
                                    Born from a love
                                    <br />
                                    of the Eastern Cape.
                                </h2>

                                <p>
                                    Confusion began as a small idea between
                                    friends who shared a simple belief: African
                                    food deserves a place at the centre of the
                                    modern dining conversation.
                                </p>

                                <p>
                                    What started as experimental dinners grew
                                    into a fictional restaurant concept built
                                    around fire, spice, seasonal ingredients
                                    and the memories that come with food.
                                </p>

                                <p>
                                    Our kitchen draws inspiration from the
                                    Eastern Cape and the wider Southern
                                    African region, while remaining curious
                                    about flavours from everywhere.
                                </p>

                            </div>


                            <div className="col-12 col-md-4 offset-md-1">

                                <Card className="about-facts-card">

                                    <CardHeader>
                                        Confusion at a glance
                                    </CardHeader>

                                    <CardBody>

                                        <div className="about-facts-list">

                                            <div className="about-fact">
                                                <span>Founded</span>
                                                <strong>2024</strong>
                                            </div>

                                            <div className="about-fact">
                                                <span>Location</span>
                                                <strong>Gqeberha</strong>
                                            </div>

                                            <div className="about-fact">
                                                <span>Cuisine</span>
                                                <strong>Modern African</strong>
                                            </div>

                                            <div className="about-fact">
                                                <span>Kitchen</span>
                                                <strong>Open Fire</strong>
                                            </div>

                                            <div className="about-fact">
                                                <span>Philosophy</span>
                                                <strong>Heritage</strong>
                                            </div>

                                        </div>

                                    </CardBody>

                                </Card>

                            </div>

                        </div>

                    </div>

                </section>


               <section className="about-philosophy">

                    <div className="container">

                        <div className="row">

                            <div className="col-12 col-md-5">

                                <span className="section-label">
                                    Our philosophy
                                </span>

                                <h2>
                                    Food should
                                    <br />
                                    tell a story.
                                </h2>

                            </div>


                            <div className="col-12 col-md-6 offset-md-1">

                                <blockquote>

                                    "We want you to recognise something
                                    familiar on the plate — and then
                                    experience it in a way you didn't expect."

                                </blockquote>

                                <span className="quote-author">
                                    — The Confusion Kitchen
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                <section className="about-team">

                    <div className="container">

                        <div className="row">

                            <div className="col-12">

                                <span className="section-label">
                                    The people behind the table
                                </span>

                                <h2> Meet the team.</h2>

                                <p className="team-intro">
                                    A small fictional team with a big
                                    obsession with food, hospitality and
                                    creating memorable experiences.
                                </p>

                            </div>

                        </div>


                        <div className="row">

                            <div className="col-12">

                                {loading && (

                                    <p>Loading our team...</p>

                                )}


                                {error && (

                                    <p>{error}</p>

                                )}


                                {!loading && !error && (

                                    <div className="team-list">

                                        {leaders.map((leader) => (

                                            <RenderLeader
                                                key={leader._id}
                                                leader={leader}
                                            />

                                        ))}

                                    </div>

                                )}

                            </div>

                        </div>

                    </div>

                </section>

            </div>

        );

    }

}


export default About;



