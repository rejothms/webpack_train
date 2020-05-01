import React, { Component } from 'react';
import { account } from './action/account';
import { connect } from 'react-redux';

class Wallet extends Component {

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


        if (data[0] === 'w') {
            this.props.withdraw(Number(this.state.amount));
        } else {
            this.props.deposit(Number(this.state.amount));
        }

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

const withdraw = (amount) => ({ type: 'WITHDRAW_MONEY', payload: amount })

const deposit = (amount) => ({ type: 'DEPOSIT_MONEY', payload: amount })

const mapDispatchToProps = dispatch => {
    return {
        // dispatching actions returned by action creators
        withdraw: (a) => dispatch(withdraw(a)),
        deposit: (amount) => dispatch({ type: 'DEPOSIT_MONEY', payload: amount }),
        reset: () => dispatch(reset())
    }
}

const mapStateToProps = state => ({

})

export default connect(null, mapDispatchToProps)(Wallet);






