import React from "react";
import {connect} from "react-redux";
import Action_UpdateUser from "../../../redux/Actions/UpdateUser";
import Action_Alert from "../../../redux/Actions/Alert";
import $ from 'jquery';
import ENV from "../../../env";
import constraintUser from "../../../redux/Constraints/User";

class CheckAuth extends React.Component{
    constructor(props){
        super(props);
        this.checkForAuth = this.checkForAuth.bind(this);
    }

    checkForAuth(cb_success = null, cb_fail=null, cb_lost=null){
        $.ajax(ENV.apis.account.auth_check.url,{
            type: ENV.apis.account.auth_check.type,
            success: (data)=>{
                if(data.success) {
                    if(cb_success != null){
                        cb_success(data);
                    }
                }else{
                    if(cb_fail != null){
                        cb_fail(data);
                    }
                }
            },
            error: ()=>{
                if(cb_lost != null){
                    cb_lost();
                }
            }
        });
    }

    componentWillMount() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });


        if(true || this.props.auth.authorized){
            this.checkForAuth(
                (data)=>{
                    let userData = data.data;
                    let uData = constraintUser.updateUser.init();
                    uData.email = userData.email;
                    uData.name = userData.full_name;
                    uData.role = userData.role;
                    uData.authorized = true;
                    this.props.handle_updateUser(uData);
                },
                ()=>{
                    let uData = constraintUser.updateUser.init();
                    this.props.handle_updateUser(uData);
                }
            );
        }
    }

    componentDidMount(){
        console.log("Working my middleware check auth...");
    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
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
