import React, {Fragment, Component} from 'react';
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
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Action_UpdateUser from "../../../../redux/Actions/UpdateUser";
import Action_Alert from "../../../../redux/Actions/Alert";
import {connect} from "react-redux";
import constraintAlert from "../../../../redux/Constraints/Alert";
import constraintUser from "../../../../redux/Constraints/User";
import Dialog from "@material-ui/core/Dialog";
import $ from "jquery";
import axios from "axios";
import ENV from "../../../../env";

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

class SignIn extends Component{


    constructor(props){
        super(props);

        this.onSubmitLoginForm = this.onSubmitLoginForm.bind(this);
    }


    onSubmitLoginForm(e){
        e.preventDefault(true);
        let $dom_Form = $(e.target).find("input");
        let collect_data = {
            _token: $('meta[name="csrf-token"]').attr('content')
        };

        $.each($dom_Form, (i,d) => {
            let $d = $(d);
            collect_data[$d.attr("name")] = $d.val();
        });

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
        $.ajax(ENV.apis.account.login.url, {
            type: ENV.apis.account.login.type,
            data: collect_data,
            success: (data) => {
                initAlertInfo.isOpen = true;
                initAlertInfo.content = data.content;
                if(data.success) {
                    initAlertInfo.title = "Thank you !";
                    let userData = data.data;
                    let uData = constraintUser.updateUser.init();
                    uData.email = userData.email;
                    uData.name = userData.full_name;
                    uData.role = userData.role;
                    uData.authorized = true;
                    this.props.handle_updateUser(uData);
                    this.props.history.push('/');
                }else{
                    initAlertInfo.title = "Ooops !";
                }
                this.props.handle_alert_info(initAlertInfo);
            },
            error: (data) => {
                initAlertInfo.isOpen = true;
                initAlertInfo.content = data.responseJSON.message;
                initAlertInfo.title = "Your request is invalid!";
                this.props.handle_alert_info(initAlertInfo);
            },
        });
    }

    render() {
        const {classes} = this.props;
        return (
            <Fragment>
                <div className="bg-parallax parallax-overlay accounts-page" data-jarallax="{&quot;speed&quot;: 0.2}"
                     style={{
                         backgroundImage: "url('http://advocate.webinch.com/frontendtheme/images/bg6.jpg')"
                     }}
                     data-jarallax-original-styles="background-image: url('http://advocate.webinch.com/frontendtheme/images/bg6.jpg')">
                    <div className="container">
                        <main className={classes.main}>
                            <CssBaseline/>
                            <Paper className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <form
                                    onSubmit={(e) => {
                                        this.onSubmitLoginForm(e)
                                    }}
                                    className={classes.form}>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">Email Address</InputLabel>
                                        <Input id="email" name="email" autoComplete="email" autoFocus/>
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input name="password" type="password" id="password"
                                               autoComplete="current-password"/>
                                    </FormControl>
                                    {/*<FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />*/}
                                    <FormControl margin="normal" fullWidth>
                                        <Link to={'/account/register'}>
                                            New User ? Register Now !
                                        </Link>
                                        <Link to={'/account/recover'}>
                                            Forgot ? Recover Now !
                                        </Link>
                                    </FormControl>

                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign in
                                    </Button>
                                </form>
                            </Paper>
                        </main>
                    </div>
                </div>
            </Fragment>
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
)(withStyles(styles)(SignIn));
