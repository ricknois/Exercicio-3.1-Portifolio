// Ex1 https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
function actionCreator(action){
  return action
}
//---------------------------------------------------------------------------------------//

//Ex2 https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction())
//---------------------------------------------------------------------------------------//

//Ex3 https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN':
    return {
      login: true
    }
    default: 
    return state
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
//---------------------------------------------------------------------------------------//

//Ex4 https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  switch(action.type) {
    case('LOGIN'):
    return {
      authenticated: true
    }
    case('LOGOUT'):
    return {
      authenticated: false
    }
    default:
    return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
//---------------------------------------------------------------------------------------//

//Ex5  https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
//---------------------------------------------------------------------------------------//

//Ex6 https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

store.subscribe(() => {
  count +=1
});


store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
//---------------------------------------------------------------------------------------//

//Ex7 https://www.freecodecamp.org/learn/front-end-libraries/redux/combine-multiple-reducers
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer 
})

const store = Redux.createStore(rootReducer);
//---------------------------------------------------------------------------------------//

//Ex8 https://www.freecodecamp.org/learn/front-end-libraries/redux/send-action-data-to-the-store
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
    return action.text
    default:
      return state;
  }
};

const addNoteText = (note) => {
    return {
    type: ADD_NOTE,
    text: note
  }
  
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
//---------------------------------------------------------------------------------------//

//Ex9  https://www.freecodecamp.org/learn/front-end-libraries/redux/write-a-counter-with-redux
const INCREMENT = 'INCREMENT'; 
const DECREMENT = 'DECREMENT'; 

const counterReducer = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
        return state + 1;
        case DECREMENT:
        return state - 1;
        default:
        return state;
    }
}

const incAction = () => {
    return {
        type: INCREMENT,
    }
}

const decAction = () => {
    return {
        type: DECREMENT,
    }
}

const store = Redux.createStore(counterReducer)
//---------------------------------------------------------------------------------------//

//Ex10 https://www.freecodecamp.org/learn/front-end-libraries/redux/never-mutate-state
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
//---------------------------------------------------------------------------------------//

//Ex11 https://www.freecodecamp.org/learn/front-end-libraries/redux/use-the-spread-operator-on-arrays
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
//---------------------------------------------------------------------------------------//

//Ex12 https://www.freecodecamp.org/learn/front-end-libraries/redux/remove-an-item-from-an-array
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

//Ex13 https://www.freecodecamp.org/learn/front-end-libraries/redux/copy-an-object-with-object-assign
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      const newObject = Object.assign({}, state, {status: 'online'})
      return newObject;
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
//---------------------------------------------------------------------------------------//

