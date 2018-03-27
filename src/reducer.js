const initialState = {
  input: "",
  result: ""
}

export default function calculator(state = initialState, action){
  console.log("ACTION", action.number)
  console.log("STATE", state.input)
  console.log("TYPE", action.type)

  switch (action.type) {
    case 'ADD_NUMBER_TO_STORE':
    return{
      ...state,
      input: state.input + action.number
    }

    case 'RESULT':
    return{
      ...state,
      input: state.input,
      result: eval(state.input).toString()
    }

    case 'RESET':
    return initialState

    default:
    return state
  }
}
