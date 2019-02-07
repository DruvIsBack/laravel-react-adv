import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Action_UpdateUser from "../../../../redux/Actions/UpdateUser";
import Action_Alert from "../../../../redux/Actions/Alert";
import $ from "jquery";
import ENV from "../../../../env";
import constraintUser from "../../../../redux/Constraints/User";

const styles = theme => ({
    main: {
        position: "sticky",
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class Logout extends React.Component{
    constructor(props){
        super(props);
        this.onClickLogout = this.onClickLogout.bind(this);
    }

    onClickLogout(){
        let initAlertInfo = {
            isOpen: false,
            title: "",
            content: "",
            type: ""
        };
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax(ENV.apis.account.logout.url, {
            type: ENV.apis.account.logout.type,
            success: (data) => {
                initAlertInfo.isOpen = true;
                initAlertInfo.content = data.content;
                if(data.success) {
                    initAlertInfo.title = "Thank you !";
                    let uData = constraintUser.updateUser.init();
                    uData.authorized = false;
                    this.props.handle_updateUser(uData);
                    this.props.history.push('/account/login');
                }else{
                    initAlertInfo.title = "Ooops !";
                }
                this.props.handle_alert_info(initAlertInfo);
            },
            error: () => {
                initAlertInfo.isOpen = true;
                initAlertInfo.content = "Err. Server/Network Failure, please try again.";
                initAlertInfo.title = "Request invalid!";
                this.props.handle_alert_info(initAlertInfo);
            },
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="bg-parallax parallax-overlay accounts-page" data-jarallax="{&quot;speed&quot;: 0.2}"
                 style={{
                     backgroundImage: "url('http://advocate.webinch.com/frontendtheme/images/bg6.jpg')"
                 }}
                 data-jarallax-original-styles="background-image: url('http://advocate.webinch.com/frontendtheme/images/bg6.jpg')">
                <div className="container">
                    <main className={classes.main}>
                        <CssBaseline/>
                        <Paper className={classes.paper}>
                            <Typography component="h3" variant="h5">
                                Thank you,
                                <p>Want to see you soon :)</p>
                            </Typography>
                            <Button
                                onClick={this.onClickLogout}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Log me out
                            </Button>
                        </Paper>
                    </main>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        alert_data: state.alert_info
    };
};
const mapActionToProps = {
    handle_updateUser: Action_UpdateUser,
    handle_alert_info: Action_Alert
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(withStyles(styles)(Logout));
