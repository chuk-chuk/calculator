import { createStore } from 'redux';


export default function calculator(state = 0, action){
  switch (action.type) {
    case 'addNumberToStore':
      return parseInt(action.number)
      break;
    default:

  }
}

//action creator // named export
export function addNumberToStore(number){
  return {
    type: 'addNumberToStore',
    number: number
  }
}
