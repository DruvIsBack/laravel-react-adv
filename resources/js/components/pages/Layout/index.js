import Header from '../../basics/Header';
import Footer from '../../basics/Footer';
import React, {Fragment, Component} from "react";
import AllCustomMiddlewares from "../../../components/middleware";

export default class Singular extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.children);
    }

    render() {

        return(
            <AllCustomMiddlewares>
                <Header/>
                {this.props.children}
                <Footer/>
            </AllCustomMiddlewares>
        );
    };
};
