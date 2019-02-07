import React, {Fragment} from "react";

export default ()=>{
  return (
      <Fragment>
        {/*footer*/}
        <footer className="footer footer-standard pt50 pb10">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 mb40">
                        <h3>About Us</h3>
                        <p>
                            In eu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales, nisi est varius diam, ac ultrices sem ante quis sem. Proin ultricies volutpat sapien, nec scelerisque ligula mollis lobortis.
                        </p>
                        <a href="#" className="btn btn-white-outline btn-sm">Learn More</a>
                    </div>
                    <div className="col-lg-2 col-md-6 mb40">
                        <h3>Quick links</h3>
                        <ul className="list-unstyled footer-list-item">
                            <li>
                                <a href="#">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    FAQS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Term &amp; conditions
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Privacy &amp; policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb40">
                        <h3>Latest News</h3>
                        <ul className="list-unstyled latest-news">
                            <li className="media">
                                <a href="#"> <img className="d-flex mr-3 img-fluid" width={64} src="images/img1.jpg" alt="Generic placeholder image" /></a>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1"><a href="#">News Headline</a></h5>
                                    April 05, 2017
                                </div>
                            </li>
                            <li className="media my-3">
                                <a href="#"> <img className="d-flex mr-3 img-fluid" width={64} src="images/img2.jpg" alt="Generic placeholder image" /></a>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1"><a href="#">News Headline</a></h5>
                                    Jan 05, 2017
                                </div>
                            </li>
                            <li className="media">
                                <a href="#"> <img className="d-flex mr-3 img-fluid" width={64} src="images/img3.jpg" alt="Generic placeholder image" /></a>
                                <div className="media-body">
                                    <h5 className="mt-0 mb-1"><a href="#">News Headline</a></h5>
                                    March 15, 2017
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 mb40">
                        <h3>Contact</h3>
                        <p>Place: <a href="#">+8986543325</a></p>
                        <p>Place: <a href="#">+8986543325</a></p>
                        <p>Place: <a href="#">+8986543325</a></p>
                        <p>Place: <a href="#">+8986543325</a></p>
                    </div>
                </div>
            </div>
        </footer>
        {/*/footer*/}
        {/*footer bottom*/}
        <div className="footer-bottomAlt">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="clearfix">
                            <a href="#" className="social-icon-sm si-dark si-facebook si-dark-round">
                                <i className="fa fa-facebook" />
                                <i className="fa fa-facebook" />
                            </a>
                            <a href="#" className="social-icon-sm si-dark si-twitter si-dark-round">
                                <i className="fa fa-twitter" />
                                <i className="fa fa-twitter" />
                            </a>
                            <a href="#" className="social-icon-sm si-dark si-g-plus si-dark-round">
                                <i className="fa fa-google-plus" />
                                <i className="fa fa-google-plus" />
                            </a>
                            <a href="#" className="social-icon-sm si-dark si-skype si-dark-round">
                                <i className="fa fa-skype" />
                                <i className="fa fa-skype" />
                            </a>
                            <a href="#" className="social-icon-sm si-dark si-linkedin si-dark-round">
                                <i className="fa fa-linkedin" />
                                <i className="fa fa-linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <span>© 2018. All Rights Reserved.</span>
                    </div>
                </div>
            </div>
        </div>
        {/*/footer bottom*/}
        {/*back to top*/}
        <a href="#" className="back-to-top hidden-xs-down" id="back-to-top"><i className="ti-angle-up" /></a>
      </Fragment>
  );
};
