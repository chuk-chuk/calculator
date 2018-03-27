export const addNumberToStore = (number) => {
  return {
    type: 'ADD_NUMBER_TO_STORE',
    number
  }
}

export const actionPressButton = (button) => {
  switch(button){
    case '=':
    return {
      type: 'RESULT'
    }

    case 'c':
    return {
      type: 'RESET'
    }

    default:
    return {
      type: 'CALCULATE'
    }
  }
}
