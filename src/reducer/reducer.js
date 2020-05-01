const initialState = {
    amount: 0
}

export default (state = initialState, action) => {

    console.log(action);
    if(action.type === 'DEPOSIT_MONEY') {
        return { amount: ( state.amount + action.payload )};
    } 

       if(action.type === 'WITHDRAW_MONEY') {
        return { amount: ( state.amount - action.payload )};
    } 


    return state;

}