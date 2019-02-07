import React from "react";
import {connect} from "react-redux";
import Action_UpdateUser from "../../../redux/Actions/UpdateUser";
import Action_Alert from "../../../redux/Actions/Alert";
import {Redirect, withRouter} from "react-router";


import allAvailRoutes from '../../Routes-Data';

class CheckRoutes extends React.Component{
    constructor(props){
        super(props);
        this.isLinkValid = false;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        this.isLinkValid = false;
        allAvailRoutes().map(({path}) => {
            if(this.props.location.pathname === path){
                this.isLinkValid = true;
            }
        });

        if(!this.isLinkValid){
            this.props.history.push('/404');
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

    }

    componentWillUpdate() {

    }

    componentDidMount(){
        console.log("Working my middleware check routes...");
    }

    render(){
            return this.props.children;
    }
};

const mapStateToProps = state => {
    return {
        alert_data: state.alert_info,
        auth: state.user
    };
};

const mapActionToProps = {
    handle_updateUser: Action_UpdateUser,
    handle_alert_info: Action_Alert
};

export default withRouter(connect(mapStateToProps, mapActionToProps)(CheckRoutes));
