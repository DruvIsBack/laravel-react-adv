import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';

export default class Example extends Component {
    render() {
        return (
            <Home/>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
