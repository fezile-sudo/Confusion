import React, { Component } from 'react';
import {
    Button,
    Row,
    Col,
    Label,
    Form,
    FormGroup,
    Input
} from 'reactstrap';


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Email',
            message: '',

            submitting: false,
            submitError: null,
            submitSuccess: false
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {

        const target = event.target;

        const value =
            target.type === 'checkbox'
                ? target.checked
                : target.value;

        const name = target.name;

        this.setState({
            [name]: value
        });
    }


    handleSubmit(event) {

    event.preventDefault();

    this.setState({
        submitting: true,
        submitError: null,
        submitSuccess: false
    });

    fetch('http://localhost:5000/api/contact', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            telnum: this.state.telnum,
            email: this.state.email,
            contactType: this.state.contactType,
            message: this.state.message,
            agree: this.state.agree
        })

    })

    .then(response => {

        return response.json().then(data => {

            if (!response.ok) {
                throw new Error(
                    data.message || 'Unable to send your message'
                );
            }

            return data;

        });

    })

    .then(() => {

        this.setState({

            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Email',
            message: '',

            submitting: false,
            submitError: null,
            submitSuccess: true

        });

    })

    .catch(error => {

        console.error('Contact form error:', error);

        this.setState({

            submitting: false,
            submitSuccess: false,
            submitError: error.message

        });

    });

}



    render() {

        return (

            <div className="contact-page">
                <section className="contact-hero">
                    <div className="container">
                        <div className="contact-hero-content">
                            <span className="section-label">
                                Get in touch
                            </span>

                            <h1> Come find us.</h1>

                            <p>
                                Whether you're planning a dinner,
                                celebrating something special or
                                simply have a question, we'd love
                                to hear from you.
                            </p>

                        </div>

                    </div>

                </section>


               <section className="contact-location">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="contact-info">

                                    <span className="section-label">
                                        Visit us
                                    </span>

                                    <h2>Find Confusion</h2>

                                    <address>

                                        <strong>Confusion</strong>

                                        <br />

                                        18 Baakens Valley Road

                                        <br />

                                        Walmer

                                        <br />

                                        Gqeberha

                                        <br />

                                        Eastern Cape

                                        <br />

                                        South Africa

                                    </address>


                                    <div className="contact-details">

                                        <p>
                                            <i className="fa fa-phone"></i>
                                            {' '}
                                            +27 41 555 0142
                                        </p>

                                        <p>
                                            <i className="fa fa-envelope"></i>
                                            {' '}
                                            hello@confusion.co.za
                                        </p>

                                    </div>


                                    <div className="contact-hours">

                                        <h5>Opening hours</h5>

                                        <p>
                                            Tuesday – Thursday
                                            <br />
                                            12:00 – 21:30
                                        </p>

                                        <p>
                                            Friday – Saturday
                                            <br />
                                            12:00 – 22:30
                                        </p>

                                        <p>
                                            Sunday
                                            <br />
                                            12:00 – 18:00
                                        </p>

                                        <p>
                                            Monday — Closed
                                        </p>

                                    </div>

                                </div>

                            </div>


                            <div className="col-12 col-md-7">

                                <div className="contact-location-card">

                                    <div className="location-card-content">

                                        <span className="location-mark">
                                            C
                                        </span>

                                        <h3>
                                            Gqeberha,
                                            <br />
                                            Eastern Cape
                                        </h3>

                                        <p>
                                            A fictional home for
                                            Confusion, inspired by
                                            the coastal character
                                            and diverse food culture
                                            of the Eastern Cape.
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="contact-form-section">

                    <div className="container">

                        <div className="row">

                            <div className="col-12 col-md-4">

                                <div className="contact-form-intro">

                                    <span className="section-label">
                                        Drop us a line
                                    </span>

                                    <h2>
                                        We'd love to
                                        <br />
                                        hear from you.
                                    </h2>

                                    <p>
                                        Have a question about the
                                        menu, want to plan a private
                                        event or simply want to say
                                        hello?
                                    </p>

                                </div>

                            </div>


                            <div className="col-12 col-md-8">

                                <Form className="contact-form" onSubmit={this.handleSubmit}>
                                        {/* Name */}
                                    <Row>

                                        <Col md={6}>

                                            <FormGroup>

                                                <Label htmlFor="firstname">First Name</Label>

                                                <Input
                                                    type="text"
                                                    id="firstname"
                                                    name="firstname"
                                                    placeholder="Your first name"
                                                    value={this.state.firstname}
                                                    onChange={this.handleChange}
                                                    required
                                                />

                                            </FormGroup>

                                        </Col>


                                        <Col md={6}>

                                            <FormGroup>

                                                <Label htmlFor="lastname">
                                                    Last Name
                                                </Label>

                                                <Input
                                                    type="text"
                                                    id="lastname"
                                                    name="lastname"
                                                    placeholder="Your last name"
                                                    value={this.state.lastname}
                                                    onChange={this.handleChange}
                                                    required
                                                />

                                            </FormGroup>

                                        </Col>

                                    </Row>


                                    {/* Contact */}

                                    <Row>

                                        <Col md={6}>

                                            <FormGroup>

                                                <Label htmlFor="email">
                                                    Email
                                                </Label>

                                                <Input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="you@example.com"
                                                    value={this.state.email}
                                                    onChange={this.handleChange}
                                                    required
                                                />

                                            </FormGroup>

                                        </Col>


                                        <Col md={6}>

                                            <FormGroup>

                                                <Label htmlFor="telnum">Phone</Label>

                                                <Input
                                                    type="tel"
                                                    id="telnum"
                                                    name="telnum"
                                                    placeholder="+27 ..."
                                                    value={this.state.telnum}
                                                    onChange={this.handleChange}
                                                />

                                            </FormGroup>

                                        </Col>

                                    </Row>

                                    <FormGroup>

                                        <Label htmlFor="contactType">
                                            Preferred contact method
                                        </Label>

                                        <Input
                                            type="select"
                                            id="contactType"
                                            name="contactType"
                                            value={this.state.contactType}
                                            onChange={this.handleChange}
                                        >

                                            <option>Email</option>

                                            <option>Phone</option>

                                        </Input>

                                    </FormGroup>

                                    <FormGroup>

                                        <Label htmlFor="message">Message</Label>

                                        <Input
                                            type="textarea"
                                            id="message"
                                            name="message"
                                            rows="6"
                                            placeholder="Tell us what's on your mind..."
                                            value={this.state.message}
                                            onChange={this.handleChange}
                                            required
                                        />

                                    </FormGroup>

                                    <FormGroup check>

                                        <Label check>

                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleChange}
                                            />

                                            <span className="contact-checkbox-text">
                                                It's okay for Confusion
                                                to contact me about
                                                this message.
                                            </span>

                                        </Label>

                                    </FormGroup>


                                    <Button
                                        type="submit"
                                        color="primary"
                                        disabled={this.state.submitting}
                                    >
                                        {this.state.submitting
                                            ? 'Sending...'
                                            : 'Send Message'}
                                    </Button>

                                {this.state.submitSuccess && (
                                    <p className="text-success mt-3">
                                        Thank you for contacting Confusion.
                                        We will be in touch soon.
                                    </p>
                                )}

                                {this.state.submitError && (
                                    <p className="text-danger mt-3">
                                        {this.state.submitError}
                                    </p>
                                )}


                                </Form>

                            </div>

                        </div>

                    </div>

                </section>

                <section className="contact-cta">

                    <div className="container">

                        <div className="contact-cta-content">

                            <span className="section-label">
                                Hungry already?
                            </span>

                            <h2>Explore the menu.</h2>

                            <p>
                                Discover the flavours coming out
                                of the Confusion kitchen.
                            </p>

                            <a href="/menu" className="btn btn-primary">
                                View Menu
                            </a>

                        </div>

                    </div>

                </section>


            </div>

        );
    }
}


export default Contact;
