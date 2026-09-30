
import React, { Component } from 'react';

import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

import {
    Routes,
    Route,
    Navigate
} from 'react-router-dom';

import { connect } from 'react-redux';

import {
    dishesLoading,
    addDishes,
    dishesFailed,
    leadersLoading,
    addLeaders,
    leadersFailed
} from '../redux/ActionCreators';


/* =========================================
   REDUX → PROPS
========================================= */

const mapStateToProps = state => ({
    dishes: state.dishes,
    leaders: state.leaders
});


/* =========================================
   REDUX ACTIONS
========================================= */

const mapDispatchToProps = dispatch => ({

    dishesLoading: () => dispatch(dishesLoading()),

    addDishes: dishes => dispatch(addDishes(dishes)),

    dishesFailed: error => dispatch(dishesFailed(error)),

    leadersLoading: () => dispatch(leadersLoading()),

    addLeaders: leaders => dispatch(addLeaders(leaders)),

    leadersFailed: error => dispatch(leadersFailed(error))

});


class Main extends Component {

    componentDidMount() {

        const {
            dishesLoading,
            addDishes,
            dishesFailed,
            leadersLoading,
            addLeaders,
            leadersFailed
        } = this.props;


        dishesLoading();

        fetch('http://localhost:5000/api/dishes')

            .then(response => {

                if (!response.ok) {
                    throw new Error('Unable to load dishes');
                }

                return response.json();

            })

            .then(dishes => {

                addDishes(dishes);

            })

            .catch(error => {

                console.error('Dishes error:', error);

                dishesFailed(error.message);

            });


        leadersLoading();

        fetch('http://localhost:5000/api/team')

            .then(response => {

                if (!response.ok) {
                    throw new Error('Unable to load team members');
                }

                return response.json();

            })

            .then(leaders => {

                addLeaders(leaders);

            })

            .catch(error => {

                console.error('Team error:', error);

                leadersFailed(error.message);

            });

    }

    render() {

        const { dishes, leaders } = this.props;

        const dishList = dishes.dishes || [];

        const leaderList = leaders.leaders || [];

        if (
            dishes.isLoading ||
            leaders.isLoading
        ) {

            return (

                <div>

                    <Header />

                    <div className="container menu-loading">

                        <p>Loading Confusion...</p>

                    </div>

                    <Footer />

                </div>

            );

        }

        if (
            dishes.errMess || leaders.errMess
        ) {

            return (

                <div>

                    <Header />

                    <div className="container menu-loading">

                        <h3>Something went wrong</h3>

                        {dishes.errMess && (
                            <p>Dishes: {dishes.errMess}</p>
                        )}

                        {leaders.errMess && (
                            <p>Team: {leaders.errMess}</p>
                        )}

                    </div>

                    <Footer />

                </div>

            );

        }

        return (

            <div>

                <Header />


                <Routes>

                    <Route path="/home" element={ <Home dishes={dishList} /> } />

                    <Route path="/menu" element={ <Menu dishes={dishList} /> } />

                    <Route path="/menu/:dishId" element={ <DishDetail /> } />

                    <Route path="/aboutus" element={ <About leaders={leaderList} /> } />

                    <Route path="/contactus" element={ <Contact /> } />

                    <Route
                        path="*"
                        element={<Navigate to="/home" replace/>}
                    />

                </Routes>


                <Footer />

            </div>

        );

    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

