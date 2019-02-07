import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React, {Component} from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";

import constraintActions from '../../../redux/Constraints/Alert';
import alertActions from '../../../redux/Actions/Alert';

class Alert extends Component{

    constructor(props){
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
      let alertData = constraintActions.info.init;
      alertData.isOpen = false;
      props.handle_AlertInfo(alertData);
    };

    render() {
        console.info("Alert Rendered..............................!!!");
        return (
            <Dialog
                open={this.props.alert_data.isOpen}
                onClose={this.handleClose}
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
                    <Button onClick={this.handleClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

const mapStateToProps = state =>{
    console.log("Alert state...");
    return {
        alert_data: state.alert
    };
};
const mapActionToProps = {
    handle_AlertInfo: alertActions
};

export default connect(
    mapStateToProps,
    mapActionToProps
)(Alert);

