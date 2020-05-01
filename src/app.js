import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Wallet from './wallet';
import Statement from './statement';
import createStore from './store/store';

const STORE = createStore();


class App extends Component {

    constructor(props) {
     super(props)

     this.state = {
         amount: 100
     }

    }

    ComponentDidMount() {
        console.log('component did mount');
    }

    render() {
        return(
            <Provider store={STORE}>
            <div>

            <Statement />

            <Wallet />
            
            </div>
            </Provider>
        )
    }

}
export default App