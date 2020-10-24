//Ex01 https://www.freecodecamp.org/learn/front-end-libraries/redux/create-a-redux-store
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:

const store = Redux.createStore(reducer)

//Ex02 https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();

//Ex3 https://www.freecodecamp.org/learn/front-end-libraries/redux/define-a-redux-action
// Define an action here:
const action = {
  type: 'LOGIN',
}
