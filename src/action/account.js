

/* export default account = () => {

    

} */

const onDepositAmount = (amount) => ({
    type: 'DEPOSIT_MONEY',
    payload: amount
})



/* export function account(postId) {
    return function(dispatch) {
        
            dispatch(onDepositAmount);
    
    };
} */



 export function account({amount, onSuccess}) {


    return async dispatch => {
        console.log(amount);
        try {
          dispatch(onDepositAmount(amount))
          onSuccess('success');
        } catch (error) {
         
          return error;
        }
      }; 

} 