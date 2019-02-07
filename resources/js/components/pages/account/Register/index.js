import React, {Component, Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import {connect} from "react-redux";

import Alert from '../../../basics/Alert';

import Action_Page from "../../../../redux/Actions/Page";
import Action_UpdateUser from '../../../../redux/Actions/UpdateUser';
import withStyles from "@material-ui/core/styles/withStyles";
import FormHelperText from "@material-ui/core/FormHelperText";
import ENV from "../../../../env";
import axios from "axios";
import $ from 'jquery';
import Action_Alert from "../../../../redux/Actions/Alert";
import constraintAlert from "../../../../redux/Constraints/Alert";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
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

class Register extends Component{

    constructor(props){
        super(props);
        this.onChange_role = this.onChange_role.bind(this);
        this.onSubmitRegisterForm = this.onSubmitRegisterForm.bind(this);
    }

    componentWillMount() {
        if(typeof this.props.pageData.role == "undefined") {
            this.props.handle_saveAttrs({
                'role': ""
            });
        }
    }

    onSubmitRegisterForm(dom){
        let $dom_Form = $(dom).find("input");

        console.log("Registered... => ",$dom_Form);
        let collect_data = {};
        $.each($dom_Form, (i,d) => {
            let $d = $(d);
            collect_data[$d.attr("name")] = $d.val();
        });

        let jax = axios.get;
        switch(ENV.apis.account.register.type) {
            case 'POST':
                jax = axios.post;
                break;
            case 'GET':
                jax = axios.get;
                break;
        }
        let that = this;
        jax(ENV.apis.account.register.url,
            collect_data
        ).then(res => {

            let initAlertInfo = constraintAlert.init();
            initAlertInfo.isOpen = true;
            initAlertInfo.content = res.data.content;

            if(res.data.success){
                initAlertInfo.type = "success";
                initAlertInfo.title = "Success !";

                that.props.handle_alert_info(initAlertInfo);
                this.props.history.push('/account/login');
            }else{
                initAlertInfo.type = "error";
                initAlertInfo.title = "Ooops !";

                that.props.handle_alert_info(initAlertInfo);
            }
        });
    }


    onChange_role(event){
        let val = event.target.value;
        this.props.handle_saveAttrs({
            'role': val
        });
    };


    render(){
        console.log("register form updated...");
        const { classes } = this.props;
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
                                Register
                            </Typography>
                            <form className={classes.form} onSubmit={(e)=>{
                                e.preventDefault(true);
                                this.onSubmitRegisterForm(e.target)
                            }}>
                                <FormControl margin="normal" required fullWidth>
                                    <Select
                                        inputProps={{
                                            name: 'role',
                                            id: 'role',
                                        }}
                                        autoFocus
                                        value={this.props.pageData.role}
                                        onChange={this.onChange_role}
                                        displayEmpty
                                    >

                                        <MenuItem value="" disabled>Select Role</MenuItem>
                                        <MenuItem value={"lawyer"}>Patent Lawyer</MenuItem>
                                        <MenuItem value={"inventor"}>Inventor</MenuItem>
                                        <MenuItem value={"patent"}>Patent</MenuItem>
                                    </Select>
                                    <FormHelperText>User Role</FormHelperText>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                                    <Input id="firstName" name="firstName" autoComplete="first-name"/>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                                    <Input id="lastName" name="lastName" autoComplete="last-name"/>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input id="email" name="email" autoComplete="email"/>
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input name="password" type="password" id="password"
                                           autoComplete="current-password"/>
                                </FormControl>
                                <FormControl margin="normal" fullWidth>
                                    <Link to={'/account/login'}>
                                        Have Account ? Login Now !
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
                                    Register Me
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
        pageData: state.page,
        alert_data: state.alert_info
    };
};
const mapActionToProps = {
        handle_saveAttrs: Action_Page,
        handle_updateUser: Action_UpdateUser,
        handle_alert_info: Action_Alert
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(withStyles(styles)(Register));
