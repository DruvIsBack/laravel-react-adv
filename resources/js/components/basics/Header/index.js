import React, {Component, Fragment} from "react";
import {NavLink, withRouter} from "react-router-dom";
import ENV from "../../../env";
import {connect} from "react-redux";
import Action_Page from "../../../redux/Actions/Page";
import { Redirect} from 'react-router';
import Action_Alert from "../../../redux/Actions/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

const assets_url = ENV.app_url+ENV.asset_url;

class Header extends Component{
    constructor(props){
        super(props);
        this.getListOfMenu = this.getListOfMenu.bind(this);
        this.getMenusForMember = this.getMenusForMember.bind(this);
        this.getMenusForGuest = this.getMenusForGuest.bind(this);
        this.printSingleMenu = this.printSingleMenu.bind(this);
        this.generateMenu = this.generateMenu.bind(this);

        this.handleAlertClose = this.handleAlertClose.bind(this);
    }

    printSingleMenu(key, title, route){
        return (
            <li key={"top-menu-item-"+key} className="nav-item">
                <NavLink to={route} className="nav-link">{title}</NavLink>
            </li>
        );
    }
    generateMenu(arrMenuLinks){
        return(
            <ul className="navbar-nav ml-auto">
            {
                arrMenuLinks.map(({title, route}, key) =>
                    this.printSingleMenu(key, title, route)
                )
            }
            </ul>
        );
    }


    getMenusForGuest(){
        let arrMenuLinks = [
            {
                title: 'Home',
                route: '/',
                type: 'link'
            },
            {
                title: 'Register as Patient Lawyer',
                route: '/account/register',
                type: 'link'
            },
            {
                title: 'Login',
                route: '/account/login',
                type: 'link'
            }
        ];
        return(
            this.generateMenu(arrMenuLinks)
        );
    }
    getMenusForMember(){
        let arrMenuLinks = [
            {
                title: 'Home',
                route: '/',
                type: 'link'
            },
            {
                title: 'Dashboard ('+this.props.userData.role+')',
                route: '/account/dashboard',
                type: 'link'
            },
            {
                title: 'Logout',
                route: '/account/logout',
                type: 'link'
            },
        ];
        return(
            this.generateMenu(arrMenuLinks)
        );
    }


    getListOfMenu(){
        if(this.props.userData.authorized){
            return this.getMenusForMember();
        }else {
            return this.getMenusForGuest();
        }
    }

    handleAlertClose(){
        this.props.handle_alert_info({
            isOpen: false,
            title: "",
            content: "",
            type: ""
        });
    }

    render() {

        if (typeof this.props.pageData.isRedirect !== "undefined" && this.props.pageData.isRedirect) {
            return <Redirect to={this.props.pageData.redirectPath}/>;
        }else{
            return(
                <Fragment>
                    <Dialog
                        open={this.props.alert_data.isOpen}
                        onClose={this.handleAlertClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{this.props.alert_data.title}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                {this.props.alert_data.content}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleAlertClose} color="primary">
                                Ok
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <nav className="navbar navbar-expand-lg navbar-light navbar-transparent bg-faded nav-sticky">
                        <div className="container">
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"/>
                            </button>
                            <NavLink to={'/'} className="navbar-brand">
                                <img alt="logo" className="logo logo-dark" src={ENV.generate_url(assets_url, "images/logo-light.png")} />
                                <img alt="logo" className="logo logo-light hidden-md-down"
                                     src={ENV.generate_url(assets_url, "images/logo-light.png")} />
                            </NavLink>
                            <div id="navbarNavDropdown" className="navbar-collapse collapse">
                                {this.getListOfMenu()}
                            </div>
                        </div>
                    </nav>
                </Fragment>
            );
        }
    }
};

const mapStateToProps = state =>{
    return {
        pageData: state.page,
        userData: state.user,
        alert_data: state.alert_info
    };
};
const mapActionToProps = {
    handle_saveAttrs: Action_Page,
    handle_alert_info: Action_Alert
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(Header);
