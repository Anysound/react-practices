import { addManyCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
  function getData(dispatch) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomersAction(json)))
  }
  return dispatch(getData)
};
