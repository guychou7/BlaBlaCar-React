import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FiPlusCircle, FiMinusCircle  } from "react-icons/fi";
const ArrowToRight = () =><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-bZQynM ehECGS" width="24" height="24" aria-hidden="true" fill="#708C91"><polyline fill="none" stroke="#708C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="9 18 15 12 9 6"></polyline></svg>;

class Toproutes extends React.Component{
    constructor(){
        super();
        this.state={
            show:false,
            hidden : <div><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Paris&nbsp; → &nbsp;Bruxelles <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Lyon&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Paris&nbsp; → &nbsp;Lyon <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Rennes&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Paris&nbsp; → &nbsp;Lille <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Nantes&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Bordeaux&nbsp; → &nbsp;Paris <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Paris&nbsp; → &nbsp;Amsterdam <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Paris&nbsp; → &nbsp;Bordeaux <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Rennes&nbsp; → &nbsp;Nantes <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Nantes&nbsp; → &nbsp;Rennes <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Montpellier&nbsp; → &nbsp;Toulouse <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Toulouse&nbsp; → &nbsp;Montpellier <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Bordeaux&nbsp; → &nbsp;Toulouse <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Saint-Brieuc&nbsp; → &nbsp;Rennes <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Rennes&nbsp; → &nbsp;Saint-Brieuc <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Angres&nbsp; → &nbsp;Nantes <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Nantes&nbsp; → &nbsp;Bordeaux <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link to="/">Paris&nbsp; → &nbsp;Rennes <span className="badge"><ArrowToRight/></span></Link></li><li className="list-group-item d-flex justify-content-between align-items-center"><Link className="alltoproutes" to="/">Afficher tous les trajets</Link></li></div>,
        }
    }
    render(){
        return (
            <div className="toproutes-grid">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/">Bordeaux&nbsp; → &nbsp;Toulouse <span className="badge">13 &euro; <ArrowToRight/></span></Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/">Nantes&nbsp; → &nbsp;Rennes <span className="badge">6 &euro; <ArrowToRight/></span></Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/">Paris&nbsp; → &nbsp;Lyon <span className="badge">24 &euro; <ArrowToRight/></span></Link>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <Link to="/">Lille&nbsp; → &nbsp;Paris <span className="badge">20 &euro; <ArrowToRight/></span></Link>
                    </li>
                </ul>
                <ul className="list-group">
                {
                    this.state.show? this.state.hidden.props.children: null
                }
                </ul>
                <button className="toproutes-control-btn" onClick={()=>{this.setState({show:!this.state.show})}}>{ this.state.show? <FiMinusCircle/> : <FiPlusCircle/> }</button>
            </div>

        );
    }
}

export default Toproutes;