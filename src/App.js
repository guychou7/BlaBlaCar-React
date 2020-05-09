import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Search from './Search'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ScrollToTop from 'react-router-scroll-top'

function App() {

    return (
        <Router>
            <Header/>
            <div className="container-fluid content">
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/search-car-sharing" component={Search}/>
                </Switch>
                <Footer/>
            </div>
            <ScrollToTop/>
        </Router>

    );
}
export default App;