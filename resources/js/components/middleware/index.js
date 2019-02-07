import React from "react";
import {connect} from "react-redux";
import Action_UpdateUser from "../../redux/Actions/UpdateUser";
import Action_Alert from "../../redux/Actions/Alert";

import Middleware_CheckAuth from './checkAuth';
import Middleware_CheckRoutes from './checkRoutes';
import {withRouter} from "react-router-dom";

class CheckAuth extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
                <Middleware_CheckAuth>
                    <Middleware_CheckRoutes>
                        {this.props.children}
                    </Middleware_CheckRoutes>
                </Middleware_CheckAuth>
        );
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

export default connect(mapStateToProps, mapActionToProps)(CheckAuth);
