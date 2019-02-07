import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import Layout from '../Layout';
import {NavLink} from "react-router-dom";

const styles = {
    card: {
        maxWidth: "75%",
    },
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

function Error404(props) {
    const { classes } = props;

    return (
            <div className="bg-parallax parallax-overlay accounts-page" data-jarallax="{&quot;speed&quot;: 0.2}"
                 style={{
                     backgroundImage: "url('http://advocate.webinch.com/frontendtheme/images/bg6.jpg')"
                 }}
                 data-jarallax-original-styles="background-image: url('http://advocate.webinch.com/frontendtheme/images/bg6.jpg')">
                <div className="container" style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Sorry,
                                </Typography>
                                <Typography component="p">
                                    Your requested page not found on our server, please take available actions from below.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <NavLink to="/">
                                <Button size="small" color="primary">
                                    Goto Home
                                </Button>
                            </NavLink>
                        </CardActions>
                    </Card>
                </div>
            </div>
    );
}


export default withStyles(styles)(Error404);
