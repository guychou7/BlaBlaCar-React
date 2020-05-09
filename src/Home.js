import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Toproutes from './Toproutes';

import { GiTrophyCup  } from "react-icons/gi";
const ArrowToRight = () =><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-bZQynM ehECGS" width="24" height="24" aria-hidden="true" fill="#708C91"><polyline fill="none" stroke="#708C91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" points="9 18 15 12 9 6"></polyline></svg>;
const InfoIcon = () =><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-bZQynM ehECGS" width="24" height="24" aria-hidden="true" fill="#708C91"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g transform="translate(-337.000000, -417.000000)"><g transform="translate(336.000000, 416.000000)"><g><rect x="0" y="0" width="24" height="24"></rect><path d="M12,22.0652174 C6.44113393,22.0652174 1.93478261,17.5588661 1.93478261,12 C1.93478261,6.44113393 6.44113393,1.93478261 12,1.93478261 C17.5588661,1.93478261 22.0652174,6.44113393 22.0652174,12 C22.0652174,17.5588661 17.5588661,22.0652174 12,22.0652174 Z M12,21.0652174 C17.0065813,21.0652174 21.0652174,17.0065813 21.0652174,12 C21.0652174,6.99341868 17.0065813,2.93478261 12,2.93478261 C6.99341868,2.93478261 2.93478261,6.99341868 2.93478261,12 C2.93478261,17.0065813 6.99341868,21.0652174 12,21.0652174 Z" fill="#708C91" fillRule="nonzero"></path><path d="M11.5,7.65217391 C11.5,7.37603154 11.7238576,7.15217391 12,7.15217391 C12.2761424,7.15217391 12.5,7.37603154 12.5,7.65217391 L12.5,12.8695652 C12.5,13.1457076 12.2761424,13.3695652 12,13.3695652 C11.7238576,13.3695652 11.5,13.1457076 11.5,12.8695652 L11.5,7.65217391 Z" fill="#708C91" fillRule="nonzero"></path><circle fill="#708C91" fillRule="nonzero" cx="12" cy="16.3478261" r="1"></circle></g></g></g></g></svg>;

function Home() {
    return (
        <div className="row home" id="wb">
            {/*Landing Section*/}
            <section className="w-100 mb-5">
                <div role="presentation" className="col-lg-12 bg-light p-0">
                    <div className="col-lg-9 notice">
                    <span>
                        <InfoIcon/>
                    </span>
                    <span>Coronavirus : pour plus d'information sur la situation, merci de consulter notre <Link to="/">FAQ</Link></span>
                    </div>
                </div>
                <div className="banner landing-banner position-relative overflow-hidden text-center">
                    <div className="col-md-12 p-lg-12 mx-auto my-5">
                        <h1 className="landing-banner-title mb-0 pb-0">Vous êtes prêt pour le départ ?</h1>
                        <p className="landing-banner-subtitle">Partagez votre trajet en voiture et faites des économies</p>
                        <AnchorLink href="#costumergate" offset="-60" className="blabla-btn">D'accord, allons-y !</AnchorLink>
                    </div>
                </div>

                {/*Mobile Landing Section*/}
                <div className="banner mobile landing-banner position-relative overflow-hidden text-center"></div>
                <div className="col-md-12 p-lg-12 mx-auto text-center mobile-lbsub">
                    <h1 className="landing-banner-title mb-0 pb-0">Vous êtes prêt pour le départ ?</h1>
                    <p className="landing-banner-subtitle">Partagez votre trajet en voiture et faites des économies</p>
                    <AnchorLink href="#costumergate" offset="50" className="blabla-btn">D'accord, allons-y !</AnchorLink>
                </div>
                {/*End obile Landing Section*/}

            </section>
            {/*End Landing Section*/}

            {/*Costumers Section*/}
            <section className="w-100" id="costumergate">
                <div className="banner costumers-banner position-relative overflow-hidden text-center">
                    <div className="col-md-12 mx-auto my-md-5">
                        <div className="d-md-flex flex-md-equal w-100 my-md-3 p-md-3">
                            <div className="col-md-4 costumer passenger offset-lg-2">
                                <div className="py-3 m-md-5">
                                    <h2>Passager</h2>
                                    <Link to="/search-car-sharing" className="blabla-btn">Rechercher un trajet</Link>
                                </div>
                                <div className="bg-light box-shadow mx-auto" ></div>
                            </div>
                            <div className="col-md-3 costumer driver">
                                <div className="py-3 m-md-5">
                                    <h2>Conducteur</h2>
                                    <Link to="/search-car-sharing" className="blabla-btn">Proposer votre trajet</Link>
                                </div>
                                <div className="bg-dark box-shadow mx-auto" ></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="banner mobile costumers-banner position-relative overflow-hidden text-center"></div>
                <div className="col-md-12 mx-auto my-md-5 mobile-lbsub">
                    <div className="d-md-flex flex-md-equal w-100 my-md-3 p-md-3">
                        <div className="col-md-4 costumer passenger offset-lg-2">
                            <div className="py-3 m-md-5">
                                <h2>Passager</h2>
                                <Link to="/search-car-sharing" className="blabla-btn">Rechercher un trajet</Link>
                            </div>
                            <div className="bg-light box-shadow mx-auto" ></div>
                        </div>
                        <div className="col-md-3 costumer driver">
                            <div className="py-3 m-md-5">
                                <h2>Conducteur</h2>
                                <Link to="/search-car-sharing" className="blabla-btn">Proposer votre trajet</Link>
                            </div>
                            <div className="bg-dark box-shadow mx-auto" ></div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Costumers Section*/}

            {/* top routes  Section*/}
            <section className="w-100 py-5 toproutes bg-dark-blue">
                <div className="container">
                    <div className="col-md-12">
                        <h2 className="h1 mb-4 section-title"><GiTrophyCup/> Nos top trajets</h2>
                            <Toproutes/>
                    </div>
                </div>
            </section>
            {/*End top routes Section*/}

            {/* Skills Section 1*/}
            <section className="w-100 py-5 skill skill-one">
                <div className="container">
                    <div className="col-md-12">
                        <h2 className="h1 mb-3 section-title">Allez où vous voulez</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-top-feature">
                                    <h5>Pratique</h5>
                                    <p>
                                        Trouvez rapidement un covoiturage ou un bus à proximité parmi les millions de trajets proposés. <Link to="/">En savoir plus</Link>
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-top-feature">
                                    <h5>Facile</h5>
                                    <p>Trouvez le trajet parfait ! Il vous suffit d’entrer votre adresse exacte, de choisir le voyage qui vous convient le mieux, et de réserver.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-top-feature">
                                    <h5>Economique</h5>
                                    <p>Que vous prévoyiez à l’avance ou réserviez en dernière minute, vous trouverez toujours un tarif avantageux.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Skills Section 1*/}

            {/* Skills Section 2*/}
            <section className="w-100 pb-5 skill skill-two">
                <div className="container">
                    <div className="col-md-12">
                        <h2 className="h1 mb-3 section-title">Ce qui va vous plaire</h2>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="single-top-feature">
                                    <h5>Avoir le choix</h5>
                                    <p>L'avantage des routes ? Elles vont partout ! Littéralement. Profitez librement des trajets qui vous conviennent avec de personnes sympas.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-top-feature">
                                    <h5>Communauté</h5>
                                    <p>Nous connaissons chacun de nos membres et de nos partenaires de bus. Comment ? Nous vérifions profils, avis, et pièces d'identité.</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="single-top-feature">
                                    <h5>Assurance</h5>
                                    <p>
                                        Assurez votre voiture à l'année avec BlaBlaSure : profitez de couvertures conçues pour les covoitureurs avec AXA. <Link to="/">En savoir plus</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Skills Section 2*/}

            {/*Bus Offers Section*/}
            <section className="w-100 bus-offers">
                <div className="container">
                    <div className="row p-3">
                        <div className="col-md-6 d-flex">
                            <div className="w-100 py-5">
                                <span className="bus-offers-img">&nbsp;</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="bg-grad h-100 w-100 d-table p-5 all-text-white">
                                <h2 className="m-0 align-middle bus-offers-title section-title"><span className="d-block h4">Vers plus de 300 villes</span>Nos bus vous emmènent à petits prix.</h2>
                                <p>
                                    Chaque semaine, chaque mois. Pour une réunion importante ou juste parce que vous avez envie de voir un nouvel endroit. Avec une grande famille. Ou un gros bagage. Vers la mer comme vers les pistes de ski. Peu importe votre voyage, il sera toujours simple et abordable avec BlaBlaBus.
                                    <br/>
                                    <Link to="/" className="blabla-btn mt-3">Découvrez notre offre de bus</Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*End Bus Offers Section*/}

            {/*Top Bus routes Section*/}
            <section className="w-100 mb-5 topbus">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="h1 pl-lg-3 section-title"><GiTrophyCup/> Le top des destinations en bus</h2>
                            <div className="topbus-grid">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Rennes <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Toulouse <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Paris <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Strasbourg <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Aéroport Lyon-Saint Exupéry <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Lille <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                </ul>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Amsterdam <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Bruxelles <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Nantes <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Rouen <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">Bordeaux <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <Link to="/">En voir plus <span className="badge"><ArrowToRight/></span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*End Top Bus routes Section*/}

            {/*BlablaLife Section*/}
            <section className="w-100 mb-5 blog">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5 className="text-primary pl-lg-3"><Link to="/">BlaBlaLife</Link></h5>
                            <h2 className="h1 pl-lg-3 section-title">Le covoiturage selon BlaBlaCar</h2>
                            <p className="mb-0 p-4 rptb">
                                <Link to="/">
                                    <img src="https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2019/04/10131533/Blog_Thumbnail_900x900_FR-300x300.jpg" alt="CO2" className="blog-img"/>
                                </Link>
                            </p>
                            <div className="p-4 rptb">
                                <h5>1,6 million de tonnes de CO2 économisées ensemble</h5>
                                <p className="mb-0">Voici quelques idées pour faire du covoiturage la nouvelle norme car le climat n’attend pas !</p>
                            </div>
                        </div>{/*End Blog Article 1 div*/}
                        <div className="col-md-4 mt-5">
                            <p className="mb-0 p-4 rptb">
                                <Link to="/">
                                    <img src="https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2020/03/17104851/BLOG%20THUMBNAIL-300x300.png" alt="COVID-19" className="blog-img"/>
                                </Link>
                            </p>
                            <div className="p-4 mb-5 rptb">
                                <h5>COVID-19 : un message de Nicolas Brusson, directeur général de BlaBlaCar</h5>
                                <p className="mb-0">Face à l’ampleur de cette épidémie, nous avons décidé de prendre des mesures adaptées à l’évolution de la situation.</p>
                            </div>
                        </div>{/*End Blog Article 2 div*/}
                        <div className="col-md-4">
                            <p className="mb-0 p-4 rptb">
                                <Link to="/">
                                    <img src="https://dxxbxu0f802py.cloudfront.net/wp-content/uploads/2018/11/16095114/FR_Blog-thumbnail_15Mmembers_900x900%20%281%29-300x300.jpg" alt="Communauté" className="blog-img"/>
                                </Link>
                            </p>
                            <div className="all-text-white p-4 rptb">
                                <h5>Waouh, notre communauté passe le cap des 15 millions !</h5>
                                <p className="mb-0">
                                    Merci à toutes celles et ceux qui, chaque jour en France, partagent un petit (ou grand) bout de chemin avec BlaBlaCar !
                                </p>
                            </div>
                        </div>{/*End Blog Article 3 div*/}
                    </div>{/*End row*/}
                </div>{/*End container*/}
            </section>
            {/*End BlablaLife Section*/}
        </div>
    );
}
export default Home;