import {Fragment} from "react";
import React, {Component} from "react";


export default class Home extends Component{
    render() {
        console.log("Home component rendered....");

        return (
            <Fragment>
                <div className="bg-parallax fullscreen parallax-overlay" data-jarallax="{&quot;speed&quot;: 0.2}" style={{backgroundImage: 'url("images/bg10.jpg")', height: '600px'}}>
                    <div className="d-flex align-items-center">
                        <div className="container">
                            <div className=" row">
                                <div className="col-lg-10 ml-auto mr-auto text-center">
                                    <div className="hero-text-style1">
                                        <div className="tlt h1 font700 text-white text-capitalize mb20">
                                            <ul className="texts" style={{
                                                listStyleType: "none"
                                            }}>
                                                <li className="text-capitalize" data-out-effect="fadeOut" data-in-effect="fadeIn">Your ultimate Law &amp; Legal Solution</li>
                                                <li className="text-capitalize" data-out-effect="fadeOut" data-in-effect="fadeIn">Defent your Constitutional Rights with Legal help</li>
                                                <li className="text-capitalize" data-out-effect="fadeOut" data-in-effect="fadeIn">We help to solve Business &amp; law Solution</li>
                                            </ul>
                                        </div>{/*/.tlt*/}
                                        <p className="lead text-white-gray">
                                            Your legal solution starts here.
                                        </p>
                                        <a href="#" className="btn btn-rounded btn-white-outline">Make an Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*hero*/}
                <div className="bg-white">
                    <div className="container pt70 pb30">
                        <div className="title-heading1 mb60">
                            <h3>Our Satisfied Customers</h3>
                        </div>
                        <div className="clearfix" />
                        {/* Carousel */}
                        <div className="carousel-client owl-carousel owl-theme">
                            <div className="item text-center">
                                <img src="images/cl-1.png" alt className="img-fluid" />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-2.png" alt />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-3.png" alt />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-4.png" alt />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-5.png" alt />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-1.png" alt />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-2.png" alt />
                            </div>
                            <div className="item text-center">
                                <img src="images/cl-3.png" alt />
                            </div>
                        </div> {/* /Carousel */}
                    </div>{/*/.clients*/}
                </div>
                <div className="container pt60 pb30">
                    <div className="title-heading1 mb60">
                        <h3>Our promises</h3>
                    </div>
                    <div className="clearfix" />
                    <div className="row">
                        <div className="col-lg-4 mb30">
                            <img src="images/img12.jpg" alt className="img-fluid mb20" />
                            <h4 className="text-uppercase">why choose us</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.
                            </p>
                        </div>
                        <div className="col-lg-4 mb30">
                            <img src="images/img13.jpg" alt className="img-fluid mb20" />
                            <h4 className="text-uppercase">Our Mission</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.
                            </p>
                        </div>
                        <div className="col-lg-4 mb30">
                            <img src="images/img14.jpg" alt className="img-fluid mb20" />
                            <h4 className="text-uppercase">Our strategy</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi rem, facilis nobis voluptatum est voluptatem accusamus molestiae eaque perspiciatis mollitia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="half-image-content bg-faded">
                    <div className="content-img bg-parallax pos-left hidden-lg-down" data-jarallax="{&quot;speed&quot;: 0.2}" style={{background: 'url(images/bg9.jpg) no-repeat'}}>
                    </div>
                    <img src="images/bg9.jpg" className="visible-lg-down img-fluid hidden-lg-up" alt />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 ml-lg-auto pt70 pb70">
                                <h2 className="mb40">
                                    30 Years of experienced serving a high quality services
                                </h2>
                                <div className="clearfix">
                                    <div className="media mb30 wow fadeInUp" data-wow-delay=".150ms">
                                        <div className="d-flex mr-3">
                                            <i className="icon-toolbox fa-3x" />
                                        </div>
                                        <div className="media-body">
                                            <h4 className="mt-0 mb10 text-capitalize">Feature One</h4>
                                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                    <div className="media mb30 wow fadeInUp" data-wow-delay=".250ms">
                                        <div className="d-flex mr-3">
                                            <i className="icon-toolbox fa-3x" />
                                        </div>
                                        <div className="media-body">
                                            <h4 className="mt-0 mb10 text-capitalize">Feature Two</h4>
                                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-outline-primary">View Features</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{/*half image section*/}
                <div className="container pt70 pb30">
                    <div className="title-heading1 mb60">
                        <h3>Practice Area</h3>
                    </div>
                    <div className="clearfix" />
                    <div className="row pb60">
                        <div className="col-lg-4 mb30 wow zoomInUp" data-wow-delay="100ms" data-wow-duration=".1s" style={{visibility: 'visible', animationDuration: '0.1s', animationDelay: '100ms', animationName: 'zoomInUp'}}>
                            <div className="icon-box icon-box-center">
                                <i className="icon-hover-1 bg-primary icon-mobile icon-hover-default" />
                                <h4>Real Estate Law</h4>
                                <p>
                                    Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.
                                </p>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-4 mb30 wow zoomInDown" data-wow-delay="200ms" data-wow-duration=".3s" style={{visibility: 'visible', animationDuration: '0.3s', animationDelay: '200ms', animationName: 'zoomInDown'}}>
                            <div className="icon-box icon-box-center">
                                <i className="icon-hover-1 bg-primary icon-profile-male icon-hover-default" />
                                <h4>Insurance Law</h4>
                                <p>
                                    Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.
                                </p>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-4 mb30 wow zoomInRight" data-wow-delay="300ms" data-wow-duration=".5s" style={{visibility: 'visible', animationDuration: '0.5s', animationDelay: '300ms', animationName: 'zoomInRight'}}>
                            <div className="icon-box icon-box-center">
                                <i className="icon-hover-1 bg-primary icon-refresh icon-hover-default" />
                                <h4>Business Law</h4>
                                <p>
                                    Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.
                                </p>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-4 mb30 wow zoomInUp" data-wow-delay="100ms" data-wow-duration=".7s" style={{visibility: 'visible', animationDuration: '0.7s', animationDelay: '400ms', animationName: 'zoomInUp'}}>
                            <div className="icon-box icon-box-center">
                                <i className="icon-hover-1 bg-primary icon-mobile icon-hover-default" />
                                <h4>Personal Injury</h4>
                                <p>
                                    Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.
                                </p>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-4 mb30 wow zoomInDown" data-wow-delay="200ms" data-wow-duration=".9s" style={{visibility: 'visible', animationDuration: '0.9s', animationDelay: '500ms', animationName: 'zoomInDown'}}>
                            <div className="icon-box icon-box-center">
                                <i className="icon-hover-1 bg-primary icon-profile-male icon-hover-default" />
                                <h4>Medical Neglegence</h4>
                                <p>
                                    Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.
                                </p>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-4 mb30 wow zoomInRight" data-wow-delay="300ms" data-wow-duration=".9s" style={{visibility: 'visible', animationDuration: '0.9s', animationDelay: '600ms', animationName: 'zoomInRight'}}>
                            <div className="icon-box icon-box-center">
                                <i className="icon-hover-1 bg-primary icon-refresh icon-hover-default" />
                                <h4>Criminal defence</h4>
                                <p>
                                    Molestiae, repudiandae, maxime, earum, sapiente assumenda non odit laborum qui vero vel quos sint excepturi in laudantium.
                                </p>
                            </div>
                        </div>{/*/col*/}
                    </div>
                </div>
                <div className="half-image-content bg-faded">
                    <div className="content-img bg-parallax pos-right hidden-md-down" data-jarallax="{&quot;speed&quot;: 0.2}" style={{background: 'url(images/img-half2.jpg) no-repeat'}}>
                    </div>
                    <img src="images/img-half2.jpg" className="visible-lg-down hidden-lg-up img-fluid" alt />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5  pt70 pb70">
                                <h2 className="mb40">
                                    Limitless possibilities create incredible layouts
                                </h2>
                                <div className="clearfix">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p><br />
                                    <a href="#" className="btn btn-outline-primary">View Features</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*half image section*/}
                <div className="container pt70 pb70">
                    <div className="title-heading1 mb60">
                        <h3>This is what press says about us</h3>
                    </div>
                    <div className="clearfix" />
                    {/* Carousel */}
                    <div className="press">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <a href="#"><img src="images/cl-1.png" alt /></a>
                            </div>
                            <div className="col-md-3 text-center">
                                <a href="#"><img src="images/cl-2.png" alt /></a>
                            </div>
                            <div className="col-md-3 text-center">
                                <a href="#"><img src="images/cl-3.png" alt /></a>
                            </div>
                            <div className="col-md-3 text-center">
                                <a href="#"><img src="images/cl-4.png" alt /></a>
                            </div>
                        </div>
                        <a href="#" className="btn btn-outline-primary">Read More</a>
                    </div>{/*/.clients*/}
                </div>
                <div className="container-fluid no-padding">
                    <div className="row no-margin">
                        <div className="col-lg-8  mr-auto ml-auto">
                            <div className="title-heading1 mb30">
                                <h3>Our Attorneys</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row no-margin">
                        <div className="col-lg-3 col-md-6 no-padding">
                            <div className="team-card">
                                <img src="images/team1.jpg" alt className="img-fluid" />
                                <div className="team-overlay align-items-center">
                                    <div className="team-detail">
                                        <h4><a href="#">John Doe</a></h4>
                                        <span>Marketing manager</span>
                                        <div className="seprator-overlay" />
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"> <i className="fa fa-youtube" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-instagram" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-3 col-md-6 no-padding">
                            <div className="team-card">
                                <img src="images/team2.jpg" alt className="img-fluid" />
                                <div className="team-overlay align-items-center">
                                    <div className="team-detail">
                                        <h4><a href="#">John Doe</a></h4>
                                        <span>Marketing manager</span>
                                        <div className="seprator-overlay" />
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"> <i className="fa fa-youtube" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-instagram" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-3 col-md-6 no-padding">
                            <div className="team-card">
                                <img src="images/team3.jpg" alt className="img-fluid" />
                                <div className="team-overlay align-items-center">
                                    <div className="team-detail">
                                        <h4><a href="#">John Doe</a></h4>
                                        <span>Marketing manager</span>
                                        <div className="seprator-overlay" />
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"> <i className="fa fa-youtube" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-instagram" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>{/*/col*/}
                        <div className="col-lg-3 col-md-6 no-padding">
                            <div className="team-card">
                                <img src="images/team4.jpg" alt className="img-fluid" />
                                <div className="team-overlay align-items-center">
                                    <div className="team-detail">
                                        <h4><a href="#">John Doe</a></h4>
                                        <span>Marketing manager</span>
                                        <div className="seprator-overlay" />
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-facebook" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-twitter" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"> <i className="fa fa-youtube" /></a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#"><i className="fa fa-instagram" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>{/*/col*/}
                    </div>
                </div>
                <div className="bg-dark pt60">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 text-center mb40">
                                <h1 className="counter text-white" data-from={0} data-to={1539} data-speed={5000} data-refresh-interval={50} />
                                <p className="lead text-white-gray">Quilified lawyers</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center mb40">
                                <h1 className="counter text-white" data-from={0} data-to={3653} data-speed={5000} data-refresh-interval={50} />
                                <p className="lead text-white-gray">Trusted Clients</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center mb40">
                                <h1 className="counter text-white" data-from={0} data-to={5987} data-speed={5000} data-refresh-interval={50} />
                                <p className="lead text-white-gray">Successful case</p>
                            </div>
                            <div className="col-md-6 col-lg-3 text-center mb40">
                                <h1 className="counter text-white" data-from={0} data-to={3999} data-speed={5000} data-refresh-interval={50} />
                                <p className="lead text-white-gray">Honor &amp; Award</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-parallax parallax-overlay pt100 pb100" data-jarallax="{&quot;speed&quot;: 0.2}" style={{backgroundImage: 'url("images/bg11.jpg")'}}>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-lg-8 ml-auto mr-auto">
                                <h3 className=" text-white h1">30 Years of Experienced in Various cases</h3>
                                <p className="text-white-gray lead">
                                    We help people effectively fight their offenders back and successfully defend their own stand!
                                </p>
                                <a href="#" className="btn btn-white-outline btn-lg">Consultation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
};
