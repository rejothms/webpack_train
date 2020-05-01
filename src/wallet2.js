import React, { Component } from 'react';
import { account } from './action/account';
import { connect } from 'react-redux';

class Wallet2 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            amount: 0
        }
    }

    /*updateStatement = (action) => {
      console.log(action);
    } */

    updateStatement(...data) {
        this.props.account({
            amount: this.state.amount,
            onSuccess: () => {
                console.log('success')
            }
        })
    }


    updateAmount = (event) => {
        this.setState({ amount: event.target.value })
    }

    render() {
        return (
            <div>

                <input type="text" onChange={this.updateAmount.bind(this)} value={this.state.amount}></input>

                <button onClick={this.updateStatement.bind(this, 'w')} >Withdraw</button>
                <button onClick={this.updateStatement.bind(this, 'd')} >Deposit</button>

            </div>
        )
    }


}



export default connect(null, { account })(Wallet2);






