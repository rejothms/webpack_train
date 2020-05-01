import React, { Component } from 'react';
import { connect } from 'react-redux';

class Statement extends Component {



    constructor(props) {
      super(props)
    }

    render() {
       return (
           <div>
             Statement 
             balance : {this.props.balance}
             
           </div>
       )
    }


}

const mapStateToProps = state => {
  return {
     balance: state.amount
  };
};


export default connect(mapStateToProps)(Statement)