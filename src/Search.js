import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaMale, FaExchangeAlt  } from "react-icons/fa";
import { GoCalendar  } from "react-icons/go";
import { MdAccessTime  } from "react-icons/md";
import moment from 'moment'
import PlacesAutocomplete from 'react-places-autocomplete';
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import fr from 'date-fns/locale/fr';
registerLocale('fr', fr);
setDefaultLocale('fr');

const ArrowToRight = () =><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-bZQynM ehECGS" width="24" height="24" aria-hidden="true" fill="#708C91"><polyline fill="none" stroke="#708C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="9 18 15 12 9 6"></polyline></svg>;

class Search extends React.Component{

    constructor(){
        super();
        this.state={
            from:'',
            to:'',
            date: new Date(),
            hour: new Date(),
            seat:'1',

        };
        this.handleChange = date => {
            this.setState({
                date: date,
                hour : date
            });
        };
        this.handleChangeFrom = address => {
            this.setState({
                from: address
            });
        };
        this.handleChangeTo = address => {
            this.setState({
                to: address
            });
        };
        this.handleSelectFrom = address => {
            this.setState({
                from: address
            });
        };
        this.handleSelectTo = address => {
            this.setState({
                to: address
            });
        };
        this.onSubmit = () => {
            alert("Merci pour votre attention. A bientôt!\nBROU Charles +225 08 89 31 76")
        };
        this.onClick = () => {
            let tempfrom = this.state.from;
            let tempto = this.state.to;
            this.setState({
                from: tempto,
                to : tempfrom
            });
        }
    }
    render() {
        return (
            <div className="row search">
                {/* Form section*/}
                <section className="w-100 py-5 car-sharing">
                    <div className="container">
                        <div className="col-md-12">
                            <h2 className="h1 mb-3 section-title text-center">Où voulez-vous aller ?</h2>
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <form>
                                        <div className="form-group travel">
                                            <PlacesAutocomplete
                                                value={this.state.from}
                                                onChange={this.handleChangeFrom}
                                                onSelect={this.handleSelectFrom}
                                            >
                                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                    <div>
                                                        <input
                                                            {...getInputProps({
                                                                placeholder: 'Départ',
                                                                className: 'form-control from',
                                                            })}
                                                        />
                                                        <div className="autocomplete-dropdown-container">
                                                            {suggestions.map(suggestion => {
                                                                const className = suggestion.active
                                                                    ? 'suggestion-item--active'
                                                                    : 'suggestion-item';
                                                                // inline style for demonstration purpose
                                                                const style = suggestion.active
                                                                    ? { backgroundColor: '#f8f9fa', cursor: 'pointer' }
                                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                                return (
                                                                    <div
                                                                        {...getSuggestionItemProps(suggestion, {
                                                                            className,
                                                                            style,
                                                                        })}
                                                                    >
                                                                        <span>{suggestion.description}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </PlacesAutocomplete>
                                            <PlacesAutocomplete
                                                value={this.state.to}
                                                onChange={this.handleChangeTo}
                                                onSelect={this.handleSelectTo}
                                            >
                                                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                                                    <div>
                                                        <input
                                                            {...getInputProps({
                                                                placeholder: 'Destination',
                                                                className: 'form-control to',
                                                            })}
                                                        />
                                                        <div className="autocomplete-dropdown-container">
                                                            {suggestions.map(suggestion => {
                                                                const className = suggestion.active
                                                                    ? 'suggestion-item--active'
                                                                    : 'suggestion-item';
                                                                // inline style for demonstration purpose
                                                                const style = suggestion.active
                                                                    ? { backgroundColor: '#f8f9fa', cursor: 'pointer' }
                                                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                                                return (
                                                                    <div
                                                                        {...getSuggestionItemProps(suggestion, {
                                                                            className,
                                                                            style,
                                                                        })}
                                                                    >
                                                                        <span>{suggestion.description}</span>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </PlacesAutocomplete>
                                            <span className="exchange-btn" onClick={() => this.onClick()}><FaExchangeAlt/></span>
                                        </div>
                                        <div className="form-group infotravel">
                                            <GoCalendar/>
                                            <DatePicker
                                                withPortal
                                                selected={this.state.date}
                                                onSelect={this.handleSelect}
                                                onChange={this.handleChange}
                                                locale="fr"
                                                dateFormat="P"
                                                monthsShown={2}
                                                minDate={moment().toDate()}
                                                className="form-control day"
                                            />
                                            <MdAccessTime/>
                                            <DatePicker
                                                selected={this.state.hour}
                                                onSelect={this.handleSelect}
                                                onChange={this.handleChange}
                                                locale="fr"
                                                showTimeSelect
                                                showTimeSelectOnly
                                                dateFormat="p"
                                                timeCaption="Heure"
                                            />
                                            <FaMale/>
                                            <input
                                                type="number"
                                                min="1"
                                                max="15"
                                                className="form-control seat"
                                                value={this.state.seat}
                                                onChange={e => this.setState({seat : e.target.value})}
                                            />
                                        </div>
                                        <div className="form-group text-center">
                                            <button className="blabla-btn search-btn" onClick={() => this.onSubmit()}>Rechercher</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Form Section*/}

                {/*Best car Sharing routes Section*/}
                <section className="w-100 mb-5 topbus">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <h2 className="h1 pl-lg-3 section-title">Voyagez moins cher sur des trajets très demandés</h2>
                                <div className="topbus-grid list-grid-search">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Lille&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Paris&nbsp; → &nbsp;Bruxeles <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Lyon&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Paris&nbsp; → &nbsp;Lyon <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Rennes&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Paris&nbsp; → &nbsp;Lille <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Nantes&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Bordeaux&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Paris&nbsp; → &nbsp;Amsterdam <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Paris&nbsp; → &nbsp;Bordeaux <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Rennes&nbsp; → &nbsp;Nantes <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Nantes&nbsp; → &nbsp;Rennes <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Montpellier&nbsp; → &nbsp;Toulouse <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Toulouse&nbsp; → &nbsp;Montpellier <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Bordeaux&nbsp; → &nbsp;Toulouse <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Saint-Brieuc&nbsp; → &nbsp;Rennes <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Rennes&nbsp; → &nbsp;Saint-Brieuc <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Angres&nbsp; → &nbsp;Nantes <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Nantes&nbsp; → &nbsp;Bordeaux <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            <Link to="/search-car-sharing">Paris&nbsp; → &nbsp;Rennes <span className="badge"><ArrowToRight/></span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Best car sharing Section*/}
            </div>
        );
    }
}

export default Search;